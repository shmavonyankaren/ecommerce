import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from "../assets/Logo.png"

export default function MyLogo() {

    const navigate = useNavigate();
    return (
        <div className="flex flex-shrink-0 items-center cursor-pointer" onClick={()=> navigate("/products")}>
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
