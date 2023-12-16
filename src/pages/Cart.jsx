import React from 'react'
import CartItems from '../components/CartItems';
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
                <CartItems
                  products={products}
                  changeQuantities={changeQuantities}
                  removeFunction={removeFunction}
                  setProducts={setProducts}
                  setQuantities={setQuantities}
                  totalPrice={totalPrice}
                />
            </div>
          ): <ToProducts />
        }
    </div>
  )
}
