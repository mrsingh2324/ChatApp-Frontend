import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LocalLogin = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const moveToPage = () => {
        if (username.trim() !== '') {
            // Move to the chat page with the username as a query parameter
            navigate(`/chat?username=${encodeURIComponent(username)}`);
        }
    }

    return (
        <div className='bg-gray-800 w-full flex items-center justify-center flex-col'>

            <h1 className='absolute top-10 text-2xl font-bold mb-10 rounded p-5 bg-white/10'>
                Chat App 
            </h1>

            <input
                placeholder='Enter your name'
                className='text-xl px-5 py-3 mb-5 text-black uppercase rounded'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button className='bg-blue-500 text-2xl px-5 py-2' onClick={moveToPage}>
                Go to chat
            </button>
            
            <h1 className='absolute bottom-0 text-lg font-normal mb-10 rounded p-5 bg-white/10'>
                Made by <a href="https://www.linkedin.com/in/mrsatyamsingh/" className='text-blue-500 underline'>Satyam Singh</a>🙌
            </h1>
        </div>
    );
}

export default LocalLogin;