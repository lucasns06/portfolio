import './obrigado.css'
import React, { useState, useEffect } from 'react';
export default function Obrigado() {
    const savedTheme = localStorage.getItem("isDarkTheme") === "true";
    const [isDarkTheme, setIsDarkTheme] = useState(savedTheme);

    useEffect(() => {
        localStorage.setItem("isDarkTheme", isDarkTheme)
        const body = document.body;
        if (isDarkTheme) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    }, []);

    return (
        <main className='obrigado-main'>
            <div className='obrigado'>
                <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none" /> <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="#6bff61" /> </g>
                </svg>
                <h1 className='obrigado-h1'>Obrigado!</h1> 
                <p className='obrigado-p'>Seu email foi enviado.</p><br />
                <a href='/portfolio'>
                    <button className='backBtn'>Voltar</button>
                </a>
            </div>
        </main>
    );
}