import React from 'react'

export default function Categories({ categories, filterByCategory, setCategories}) {
    return (
        <div>
            <ul className='flex justify-around mt-4'>
                {categories.map((item) => {
                    return (
                        <button
                            className={item.active ? 'px-[50px] py-1 rounded-lg bg-black/70 border-white border-2 text-white text-lg font-semibold' :'px-[50px] py-1 border-black border-1 rounded-lg bg-white/30 text-lg font-semibold'}
                            onClick={(e) => {
                                filterByCategory(item.title);
                                const newCategories = categories.map((category) => {
                                    if(category.title === item.title) {
                                        return {
                                        title: category.title,
                                        active: true
                                        }
                                    }

                                    return {
                                    title: category.title,
                                    active: false,
                                    }
                                })
                                setCategories(newCategories);
                            }}
                        >
                            <li>
                                {item.title}
                            </li>
                        </button>
                    )
                })}
            </ul>
        </div>
    )
}
