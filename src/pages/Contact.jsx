import React from 'react'
import { useNavigate } from 'react-router-dom'
import InputDivForContact from '../components/InputDivForContact';
import TextArea from '../components/TextArea';

export default function Contact() {
    const navigate = useNavigate();
    
    return (
        <div className="bg-background-contact-image bg-cover bg-no-repeat bg-fixed min-h-screen">
            <div className="py-4 lg:py-16 px-4 mx-auto max-w-screen-md">
                <div className='bg-white/80 rounded-lg p-4 shadow-lg'>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan?Let us know.
                    </p>
                    <form 
                        action="#" 
                        className="space-y-8"
                    >
                        <InputDivForContact 
                            type="email"
                            text="Email"
                            id="email"
                        />
                        <InputDivForContact 
                            type="text"
                            text="Subject"
                            id="subject"
                        />
                        <TextArea
                            id="message"
                            message="Your message"
                            placeholder="Leave a comment"
                        />
                        <button 
                            type="submit" 
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg  bg-gray-600 hover:bg-gray-700 focus:ring-gray-800"
                            onClick={() =>{
                                navigate("/successSent");
                            }}
                        >   
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </div>  
    )
}
