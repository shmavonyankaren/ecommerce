import React from 'react'
import { AiOutlineShopping } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import Logo from "../assets/Logo.png"
const navigation = [
    { name: 'Products', href: '/products'},
    { name: "Cart", href: '/cart'},
    { name: "Contact", href: "/contact"},
];

export default function Header({quatities, children}) {
    
    return (
        <div className='bg-background-image bg-cover bg-no-repeat bg-fixed min-h-screen'>
            <header className="fixed w-[100%] opacity-[0.97] hover:bg-gray-800 hover:opacity-100">
                <nav  className="bg-gray-800">
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <div className="flex items-center mr-2">
                                            <h1 className='text-white  font-semibold'>Ecommerce</h1>
                                        </div>
                                        <img
                                            className="block h-8 w-auto lg:hidden"
                                            src={Logo}
                                            alt="Ecommerce"
                                        />
                                        <img
                                            className="hidden max-h-[120px]  lg:block w-[120px]"
                                            src={Logo}
                                            alt="Ecommerce"
                                        />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block mt-[42px]">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.href}
                                                    className={({isActive}) =>{
                                                    return( 'no-underline rounded-md px-3 py-2 text-sm font-medium' + (
                                                        isActive
                                                        ? ' bg-gray-900 text-white' 
                                                        : ' text-gray-300 hover:bg-gray-700 hover:text-white'
                                                    ))
                                                    }}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
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

                        <div className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <NavLink
                                                key={item.name}
                                                to={item.href}
                                                className={({isActive}) =>{
                                                return( 'no-underline rounded-md px-3 py-2 text-sm font-medium' + (
                                                    isActive
                                                    ? ' bg-gray-900 text-white' 
                                                    : ' text-gray-300 hover:bg-gray-700 hover:text-white'
                                                ))
                                                }}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                    </NavLink>
                                ))}
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