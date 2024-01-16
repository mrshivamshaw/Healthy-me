import React, { useState , useEffect} from 'react'
import axios from 'axios';
import { IoMdAttach } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import TypingAnimation from './TypingAnimation';
import send from "../../assets/send.png";
import ChatbotIcon from "../../assets/ChatbotIcon.png";
const API_KEY = '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'

function Chatbot() {

    const [inputValue , setInputValue] = useState('')
    const [chatLog , setChatLog] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setChatLog((prevChatLog) => [...prevChatLog , {type:'user' , message:inputValue}])

        // sendMessage(inputValue)

        setInputValue('')
    }
    const sendMessage = (message) => {
        // const url = 'https://api.openai.com/v1/chat/completions';
        // const headers = {
        //     'Content-type' : 'application/json',
        //     'Authorization' : 'Bearer ' + API_KEY
        // }
        // const data = {
        //     model: "gpt-3.5-turbo",
        //     messages: [{"role" : "user" , "content" : message}]

        // } 
        setIsLoading(true)

        axios.post(url , data , {headers : headers}).then((response) => {
            console.log(response)
            setChatLog((prevChatLog) => [...prevChatLog , {type:'bot' , message:response.data.choices[0].message.content}])
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
            console.log(error)
        })
        
    }


  return (
    <div>
        <div className='h-[75vh] w-auto bg-[#F1F1FF] shadow-xl rounded-2xl drop-shadow-lg'>
            <div className='bg-white rounded-2xl'>
                <div className='flex gap-10 border-b-2 p-3 px-5 py-10'>
                    <img src={ChatbotIcon} className='h-20 w-20' />
                    <div className='self-center'>Healthbot</div>
                </div>
                <div className='p-5 px-12 text-[#5E5E5E]'>
                    Hi There! <br />
                    I am Rabi, your personal assistant for today. Tell me how I can assist you and I will be glad to assist. 
                </div>
            </div>
            <div className='flex flex-col space-y-4 h-[40vh] overflow-hidden overflow-y-scroll' >
            {chatLog.map((message , index) => (
                <div key={index}
                className={`m-5 flex ${message.type === 'user'? 'justify-end' : 'justify-start'}`}
                >
                    <div className={`${message.type === 'user' ? 'bg-white rounded-br-none' : 'bg-[#5D6EF7] rounded-bl-none'} rounded-3xl p-4 max-w-[20vw] overflow-x-auto`}>
                        {message.message}
                    </div>
                    
                </div>
            ))}
            </div>
            {isLoading && 
                <div key={chatLog.length} className='flex justify-start'>
                    <div className='bg-[#5D6EF7] rounded-3xl rounded-bl-none'>
                        <TypingAnimation />
                    </div>    
                </div>
            }
            <form onSubmit={handleSubmit} className='fixed bottom-0 h-12 w-[80%] rounded-xl m-10 p-3 bg-white text-xl flex'>
                <input className='w-[70%] h-full outline-none rounded-3xl' type="text"
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)} 
                 placeholder='type reply . . . . .'
                />
                <button className=' text-[#A3A3A3] px-2 scale-105'><IoMdAttach /></button>
                <button className='text-[#A3A3A3] px-2 scale-105'><MdOutlineEmojiEmotions /></button>
                <button type='submit'  className='text-[#5D6EF7] px-5 drop-shadow'><img src={send} alt="tele" className="h-[30px]" /></button>
            </form>
        </div>
    </div>
  )
}

export default Chatbot