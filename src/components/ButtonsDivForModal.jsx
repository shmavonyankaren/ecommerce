import React from 'react'
import Button from './Button';

export default function ButtonsDivForModal({ btn1ClassName, btn2ClassName, product, addToTheCart, changeQuantities, handle, title1, title2 }) {
    return (
        <div>
            <Button 
                    type="button"
                    className={btn1ClassName}
                    onClick={handle}
                    title={title1}
            />
            <Button
                    type="button"
                    className={btn2ClassName}
                    onClick={() =>{
                    changeQuantities();
                    addToTheCart(product);
                    handle();
                    }}
                    title={title2}
            />
        </div>
    ) 
}
