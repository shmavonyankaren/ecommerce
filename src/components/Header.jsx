import React from 'react'
import { AiOutlineShopping } from "react-icons/ai";
import { Navigate, NavLink } from 'react-router-dom';
import MyLogo from "./MyLogo.jsx"
import Navigation from './Navigation.jsx';
const navigation = [
    { name: 'Products', href: '/products'},
    { name: "Cart", href: '/cart'},
    { name: "Contact", href: "/contact"},
];

export default function Header({ quatities, children }) {
    
    return (
        <div className='bg-background-image bg-cover bg-no-repeat bg-fixed min-h-screen'>
            <header className="fixed w-[100%] opacity-[0.97] hover:bg-gray-800 hover:opacity-100">
                <nav  className="bg-gray-800">
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <MyLogo />
                                    <Navigation 
                                        navigation={navigation}
                                    />
                                </div>
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
                            </div>
                        </div>
                    </>
                </nav>
            </header>
            <div className='pt-16'>
                {
                    children
                }
            </div>
        </div>
    )
}