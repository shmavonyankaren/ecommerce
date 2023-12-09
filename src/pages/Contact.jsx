import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate();
  return (
    <div className="bg-gray-300">
        <div className="py-4 lg:py-16 px-4 mx-auto max-w-screen-md">
            <div className='bg-white rounded-lg p-4 shadow-lg'>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan?Let us know.
                </p>
                <form 
                    action="#" 
                    className="space-y-8"
                >
                    <div>
                        <label 
                            for="email" 
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" 
                            placeholder="name@flowbite.com" 
                            required 
                        />
                    </div>
                    <div>
                        <label 
                            for="subject" 
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Subject
                            </label>
                        <input 
                            type="text" 
                            id="subject" 
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" 
                            placeholder="Let us know how we can help you" 
                            required 
                        />
                    </div>
                    <div class="sm:col-span-2">
                        <label 
                            for="message" 
                            className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Your message
                            </label>
                        <textarea 
                            id="message" 
                            rows="6" 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" 
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>
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
