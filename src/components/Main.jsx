import React, { useState, useEffect } from 'react'
import Items from '../pages/Items';

export default function Main({ addToTheCart, changeQuantities }) {

  const [data, setdata] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  
  useEffect(() =>{
    try {
      const url = 'https://fakestoreapi.com/products/';
      fetch(url)
        .then(data => data.json())
        .then(data => {
          setdata(data);
          setProducts(data);
        });
      fetch(url + "categories")
        .then(data => data.json())
        .then(data =>{
          const newCategory = ["All", ...data].map((item) =>{
            if(item === "All") {
              return {
                title: item,
                active: true,
              }
            }
            return {
              title: item,
              active: false,
            }
          });
          setCategories(newCategory);
        });
        // fetch('https://fakestoreapi.com/products?sort=desc')
        // .then(data => data.json())
        // .then(data => {
        //   setdata(data);
        //   setProducts(data);
        // });
    } catch (error) {
        console.log(error.message);
    }
  }, []);

  const filterByCategory = (category) =>{
    if(category === "All") {
      setProducts(data)
      return;
    }
      const newData = data.filter((product) => product.category === category);
      setProducts(newData);
  };
  const changeSorting = (param) => {
    if(param === "Asc") {

    } else if(param === "Desc") {

    }
  }

  return (
    <div className='main'>
      <Items 
        data={products} 
        categories={categories}
        addToTheCart={addToTheCart}
        changeQuantities={changeQuantities}
        filterByCategory={filterByCategory}
        setCategories={setCategories}
        changeSorting={changeSorting}
      />
    </div>
  )
}
