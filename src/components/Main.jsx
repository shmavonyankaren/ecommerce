import React, { useState, useEffect } from 'react'
import Items from '../pages/Items';

export default function Main({ addToTheCart, changeQuantities }) {

  const [data, setdata] = useState([]);
  useEffect(() =>{
    try {
      const url = 'https://fakestoreapi.com/products?limit=30';
      fetch(url)
        .then(data => data.json())
        .then(data => {
          setdata(data);
        })
    } catch (error) {
        console.log(error.message);
    }
}, []);

  return (
    <div className='main'>
      <Items 
        data={data} 
        addToTheCart={addToTheCart}
        changeQuantities={changeQuantities}
      />
    </div>
  )
}
