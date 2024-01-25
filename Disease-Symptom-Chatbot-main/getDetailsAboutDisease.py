from langchain_google_genai import GoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langchain_core.output_parsers import StrOutputParser, JsonOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableLambda, RunnablePassthrough
from os import environ
from langchain.vectorstores import FAISS


def getDetailsAboutDisease(question):
    api_key = environ["GOOGLE_API_KEY"]
    model = GoogleGenerativeAI(
        model="gemini-pro", google_api_key=api_key)
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    db = FAISS.load_local("local_db",embeddings)
    retreiver = db.as_retriever()
    prompt_template = """If the context is not relevant, 
        please answer the question by using your own knowledge about the topic
        output format 
        ```json
                disease:"",
                otherSymptom:[],
                doctorType:Suggest this based on your knowledge,
                remedies:Suggest this based on your knowledge,
        ```
        {context}
        
        Question: {question}
        """
    prompt = ChatPromptTemplate.from_template(prompt_template)
    chain = (
        {"context": retreiver, "question": RunnablePassthrough()}
        | prompt
        | model
        | JsonOutputParser()
    )
    return chain.invoke(question)
