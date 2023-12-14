import React from 'react'

export default function InputDivForContact({ type, text, id }) {
    return (
        <div>
            <label 
                for={id} 
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {text}
                </label>
            <input 
                type={type}
                id={id} 
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" 
                placeholder="Let us know how we can help you" 
                required 
            />
        </div>
    )
}
