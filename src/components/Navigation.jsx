import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation({ navigation }) {
    return (
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
    )
}
