import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Item from '../components/Item'

export default function Cart( {products, totalPrice, setProducts, changeQuantities, setQuantities} ) {
  const navigate = useNavigate();
  const removeFunction = (i) =>{
    const newProduct = products.filter((product, index) => index !== i);
    setProducts(newProduct);
    changeQuantities("dec");
  };
  
  return (
    <div className='mt-[20px]'>
      {
          products.length !== 0
      ?(
      <div className='pb-16 box-border'>
          {products.map((item, i) =>{
            return(
              <div key={item.id} className='mb-15px] flex justify-center overflow-hidden'>
                <Item
                    className="m-2 mx-2 max-w-[600px] min-w-[600px] max-h-[300px] min-h-[300px] py-8 px-4  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:items-center sm:space-y-1 sm:space-x-6"
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    category={item.category}
                    description={item.description}
                    image={item.image}
                    btn1ClassName="mr-2 px-3 py-2 text-sm text-white bg-gray-800 font-semibold rounded-lg border border-gray-900 hover:text-white hover:bg-gray-900 hover:border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    btn2ClassName="hidden px-3 py-2 text-sm bg-purple-800 text-white font-semibold rounded-lg border border-purple-900 hover:text-white hover:bg-purple-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2"
                />
                <div className='flex justify-cener items-center'>
                  <Button 
                    className="mr-2 px-3 py-2 text-sm text-white bg-gray-700 font-semibold rounded-full border border-gray-900 hover:text-white hover:bg-gray-900 hover:border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    onClick={() =>{
                      removeFunction(i);
                      changeQuantities("dec");

                    }}
                    title="X"
                  />
                  <Button 
                    className="px-3 py-2 text-sm bg-purple-700 text-white font-semibold rounded-lg border border-purple-900 hover:text-white hover:bg-purple-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2"
                    onClick={() =>{
                      removeFunction(i);
                      navigate("/success");
                    }}
                    title="Buy"
                  />
                </div>
              </div>
            )})
          }
          <div className='text-white fixed min-w-full flex justify-center bottom-0	  mt-4 border-t-[1.8px] border-gray-800 bg-gray-900'>
            <h3 className='mt-3'>Total Price : {totalPrice} $ </h3> 
            <NavLink
              to={'/success'}
            >
              <button
                className="ml-[20px] mt-[10px] px-4 py-[10px] text-sm text-white bg-purple-800 font-semibold rounded-lg border border-purple-900 hover:text-white hover:bg-purple-900 hover:border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2"
                onClick={() => {
                  setQuantities(0);
                  setProducts([]);
                }}
              >
                Buy all
              </button> 
            </NavLink>
          </div>
      </div>
      ): (
        <div className='ml-[37%] flx justify-center'>
          <h2>Add some products here</h2>
          <NavLink to={"/products"}>
              <button
                className="ml-[10%] px-4 py-[10px] text-sm text-white bg-gray-800 font-semibold rounded-lg border border-gray-900 hover:text-white hover:bg-gray-900 hover:border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                {'->'} Go to Products
              </button>          
          </NavLink>
        </div>
         )
      }
    </div>
  )
}
