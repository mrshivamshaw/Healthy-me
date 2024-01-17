from flask import Flask,request
from os import environ
from getDetailsAboutDisease import getDetailsAboutDisease
environ["GOOGLE_API_KEY"] = ""
app = Flask(__name__)

@app.get("/")
def get_ans():
    question = request.args.get("question")
    return getDetailsAboutDisease(question)

app.run(debug=True)