// import React, { useState } from 'react'
import Item from "../components/Item.jsx"
// import Priview from "../assets/Priview.png"
// import Poster1 from "../assets/Poster1.png"
import Poster2 from "../assets/Poster2.png"
// import Poster3 from "../assets/Poster3.png"
import Loading from '../components/Loading'
import { useEffect, useState } from "react";
import Preview from "../components/Preview.jsx";
export default function Items({ data, addToTheCart, changeQuantities, categories, filterByCategory, setCategories, changeSorting }) {
  // const posters = [
  //   Poster1,
  //   Poster2,
  //   Poster3,
  //   Priview,
  // ];
  // const [currenPost, setCurrentPost] = useState(posters[0]);
  // let [number, setNumber] = useState(0);
  // setInterval(changePoster, 2000);
  // function changePoster() {
  //   if(number === posters.length) {
  //     setNumber(0);
  //     setCurrentPost(posters[number]);
  //     return;
  //   }
  //   setCurrentPost(posters[number]);
  //   setNumber(number+1);
  //   return;
  // };
  const [sortingOption, setSortingOption] = useState('None');
  useEffect(()=>{
    changeSorting(sortingOption);
  }) 
  return (
    <div className=''>
      {data
      ?(
      <div>
        <Preview 
          srcForImage={Poster2}
        />
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
        <div className="bg-white rounded-lg max-w-[230px] min-w-[250px] px-3 py-1 ml-[50px] mt-5">
            <label 
              className="text-lg font-semibold mr-2"
              for="cars"
            >
              Choose sorting:
            </label>
            <select 
              className="font-semibold text-lg" 
              name="Sort" 
              id="sort"
              value={sortingOption}
              onChange={e => setSortingOption(e.target.value)}
            >
                <option 
                  value="none"
                >None</option>
                <option 
                  value="desc" 
                >Desc</option>
                <option 
                  value="asc"
                >Asc</option>
            </select>
        </div>
        <div className='flex flex-wrap justify-center min-w-[100] mt-3'>
        {
            data.map(el => {
              const changedTitle = el.title.split(" ").length >= 6 ? el.title.split(" ").slice(0, 6).join(" ") + ".." : el.title;
              return(
              <div className='mx-2 my-2'>
                <Item 
                    className="m-2 mx-2 max-w-[400px] min-w-[400px] max-h-[250px] min-h-[250px] py-8 px-4  bg-white/90 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
                    key={el.id}
                    title={changedTitle}
                    price={el.price}
                    category={el.category}
                    description={el.description}
                    image={el.image}
                    addToTheCart={addToTheCart}
                    changeQuantities={changeQuantities}
                    btn1ClassName="mr-2 px-3 py-2 text-sm text-white bg-gray-800 font-semibold rounded-lg border border-gray-900 hover:text-white hover:bg-gray-900 hover:border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    btn2ClassName="px-3 py-2 text-sm bg-purple-800 text-white font-semibold rounded-lg border border-purple-900 hover:text-white hover:bg-purple-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2"
                />
              </div>
            )})
          }
        </div>
      </div>
      ): (
        <div className='flex justify-center items-center mt-[22%]'>
          <Loading /> 
        </div>
      )
      }
    </div>
  )
}