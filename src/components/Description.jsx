import React from 'react'

export default function Description({ description }) {
  return (
    <div>
        <label 
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" 
            for="inline-full-name"
        >
            Description
        </label>
        <h6>
        {description}
        </h6>
    </div>
  )
}
