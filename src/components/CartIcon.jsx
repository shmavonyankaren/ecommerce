import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShopping } from 'react-icons/ai'

export default function CartIcon({ quatities }) {
    return (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NavLink
                type='button' 
                className='ml-5 text-2xl text-gray-300 cursor-pointer relative transition transform duration-75 ease-in-out hover:scale-150'
                to='/cart'
            >
                <AiOutlineShopping />
                <span className='flex justify-center items-center absolute left-[12px] top-0 text-[12px] text-white bg-red-600 w-[18px] h-[18px] rounded-[50%] font-semibold'>
                    {quatities}
                </span>
            </NavLink>
        </div>  
    )
}
