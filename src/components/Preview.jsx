import React from 'react'

export default function Preview({ srcForImage }) {
  return (
    <div className='mt-4 w-[100%] flex justify-center'>
        <div className='pt-4 flex justify-center bg-white/90 rounded-lg w-[86%] h-[450px]'>
            <img 
                src={srcForImage}
                alt="Poster"
            />
        </div>
    </div>
 )
}
