import React from 'react'
import Item from "../components/Item.jsx"
import Loading from '../components/Loading'
export default function Items({ data, addToTheCart, changeQuantities }) {
  return (
    <div>
      {data
      ?(
      <div>
        <div className='mt-4 w-[100%] flex justify-center'>
            <div className='pt-4 flex justify-center bg-white rounded-lg w-[90%] h-[450px]'>
                <img 
                  className='w-[40%] h-[400px]'
                  src={data[13]?.image}
                  alt={data[0]?.title}
                />
            </div>
        </div>
        <div className='flex flex-wrap justify-center min-w-[100] mt-3'>
        {
            data.map(el => (
              <div className='mx-2 my-2'>
                <Item 
                    className="m-2 mx-2 max-w-[400px] min-w-[400px] max-h-[250px] min-h-[250px] py-8 px-4  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
                    key={el.id}
                    title={el.title}
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
            ))
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