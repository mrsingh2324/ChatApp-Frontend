import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { nanoid } from "nanoid";
import { useLocation } from 'react-router-dom';
import '../index.css'

const socket = io.connect("https://chat-app-backend-lake.vercel.app");
const username = nanoid(4);
const Home = () => { // Updated component name to start with an uppercase letter
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userNameFromQuery = queryParams.get('username');
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const [userName, setUserName] = useState(userNameFromQuery || username); // Use the value from the query, or an empty string as a fallback

    const sendChat = (e) => {
        e.preventDefault();
        socket.emit("chat", { message, userName: userName });
        // Clear the input field after sending the message
        setMessage('');
    }
    useEffect(() => {
        socket.on("chat", (payload) => {
            setChat([...chat, payload])
        })
    })
    const messageSetter = (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className='h-full w-full bg-gray-800 p-5'>

            <h1 className='text-2xl font-bold rounded p-5 bg-white/10'>
                Chat App
    { socket == true ? ("connected to backend") : (" not connected to backend")}
            </h1><span className=''>{userName}</span>
        
            <h1 className='text-normal text-blue-500 p-2 bg-white/4'>
                You are into a chat room where others can also text you and you can also text them
            </h1>

            {
                chat.length ? (
                    <div className='overflow-scroll bg-blue-500/10 hide-scrollbar max-h-[60%] ' >
                        {/* <h1 className=''>
                            Previous Messages
                        </h1> */}
                        <div className='w-[50%]  rounded '>

                            <ul className={`flex ${chat.length ? 'justify-left' : 'justify-right'} items-left flex flex-col text-left p-5`}>
                                {chat.map((payload, index) => {
                                    const isMessageFromUser1 = payload.id === 1;

                                    return (
                                        <div
                                            className='bg-blue-700 rounded-lg flex gap-2 items-center p-2 mb-2'>
                                            <p className='font-bold text-black text-sm'>
                                                {payload.userName} :
                                            </p> <li
                                                key={payload.id}
                                            >
                                                {payload.message}
                                            </li>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                ) : ("")
            }

            <form onSubmit={sendChat} className='absolute bottom-10 w-full flex justify-center  p-5'>
                <input type="text" name="message" className='text-xl px-5 py-2 text-black/90 rounded' placeholder='Enter the message' value={message} onChange={(e) => messageSetter(e)} />

                {/* <input type="file" name="message" placeholder='enter the message' value={message} onChange={(e) => { setMessage(e.target.value) }} /> */}
                {/* <button>
                    media
                </button> */}
                <button type="submit" value="Send" className='bg-blue-500 text-xl ml-5 px-5 py-2 font-semibold rounded'>Send</button>
            </form>

        </div>
    );
}

export default Home
