import React from 'react'
import Logo from "../assets/Logo.png"

export default function MyLogo() {
    return (
        <div className="flex flex-shrink-0 items-center">
            <div className="flex items-center mr-2">
                <h1 className='text-white  font-semibold'>Ecommerce</h1>
            </div>
            <img
                className="max-h-[120px]  lg:block w-[120px]"
                src={Logo}
                alt="Ecommerce"
            />
        </div>  
    )
}
