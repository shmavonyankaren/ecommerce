import React from 'react'
import BuyAllButton from '../components/BuyAllButton';
import CartItem from '../components/CartItem';
import ToProducts from '../components/ToProducts';

export default function Cart( {products, totalPrice, setProducts, changeQuantities, setQuantities} ) {
  const removeFunction = (i) =>{
    const newProduct = products.filter((product, index) => index !== i);
    setProducts(newProduct);
    changeQuantities("dec");
  };
  
  return (
    <div className='mt-[20px]'>
      {
          products.length
      ?(
      <div className='pb-16 box-border'>
          {products.map((item, i) =>{
            return(
              <div key={item.id} className='mb-[10px] flex justify-center overflow-hidden'>
                <CartItem 
                  removeFunction={removeFunction}
                  i={i}
                  changeQuantities={changeQuantities}
                  item={item}
                />
              </div>
            )})
          }
          <BuyAllButton 
            setQuantities={setQuantities}
            setProducts={setProducts}
            totalPrice={totalPrice}
          />
      </div>
      ): <ToProducts />
      }
    </div>
  )
}
