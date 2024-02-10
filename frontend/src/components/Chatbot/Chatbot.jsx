import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { IoMdAttach } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import TypingAnimation from "./TypingAnimation";
import send from "../../assets/send.png";
import ChatbotIcon from "../../assets/ChatbotIcon.png";
import './chatbot.css'
import doctors from "./Doctors";

function Chatbot() {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when chatLog changes
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatLog]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue)

    setInputValue("");
  };

 const sendMessage = async (message) => {
    try {
      setIsLoading(true)
      const response = await axios.get(`http://127.0.0.1:5000/?question=${message}`);
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: "bot", message: response.data },
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <div>
      <div className="h-[78vh] w-auto bg-[#F1F1FF] shadow-xl rounded-2xl drop-shadow-lg">
        <div className="bg-white rounded-2xl">
          <div className="flex gap-4 border-b-2 p-3 px-3 py-3">
            <img src={ChatbotIcon} className="h-[50px] w-[50px]" />
            <div className="self-center font-bold text-2xl">Healthbot</div>
          </div>
          <div className="p-2 px-12 text-[#5E5E5E]">
            Hi <span>{localStorage.getItem('userName')}</span>! <br />I am Rabi, your personal assistant for today. Tell
            me how I can assist you and I will be glad to assist.
          </div>
        </div>
        <div className="flex flex-col space-y-4 max-h-[50vh] overflow-hidden overflow-y-scroll chat-bot" ref={chatContainerRef}>
          {chatLog.map((message, index) => (
            <div
              key={index}
              className={`m-5 flex text-lg ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  message.type === "user"
                    ? "bg-white rounded-br-none"
                    : "bg-[#5D6EF7] text-white rounded-bl-none"
                } rounded-3xl p-4 max-w-[25vw] overflow-x-auto`}
              >
                {message.type === "user" ? (
                  <div className="user-message">{message.message}</div>
                  ) : (
                  <div className="bot-message">
                    <p><strong>Disease:</strong> {message.message.disease}</p>
                    <p><strong>Other Symptoms :</strong> {message.message.otherSymptoms}</p>
                    <p><strong>Remedies:</strong> {message.message.remedies}</p>
                    <p><strong>Doctor Type:</strong> {message.message.doctorType}</p>
                  </div>
                )}
                
                {message.type === "user" ? "" : doctors.map((doctor) => {
                  if (doctor.type === message.message.doctorType) {
                    return (
                        <div key={doctor.type}>
                            <p><strong>Name:</strong> {doctor.name}</p>
                            <p><strong>Address:</strong> {doctor.address}</p>
                            <p><strong>Contact Number:</strong> {doctor.contactNumber}</p>
                        </div>
                     );
                    }
                return null;
              })}

              </div>
            </div>
          ))}
        </div>
        {isLoading && (
          <div key={chatLog.length} className="flex justify-start">
            <div className="bg-[#5D6EF7] rounded-3xl rounded-bl-none">
              <TypingAnimation />
            </div>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="fixed bottom-0 h-12 w-[80%] rounded-xl m-[3vh] mx-[4vw] p-3 bg-white text-xl flex"
        >
          <input
            className="w-[70%] h-full outline-none rounded-3xl"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="type reply . . . . ."
          />
          <button className=" text-[#A3A3A3] px-2 scale-105">
            <IoMdAttach />
          </button>
          <button className="text-[#A3A3A3] px-2 scale-105">
            <MdOutlineEmojiEmotions />
          </button>
          <button type="submit" className="text-[#5D6EF7] px-5 drop-shadow">
            <img src={send} alt="tele" className="h-[30px]" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
