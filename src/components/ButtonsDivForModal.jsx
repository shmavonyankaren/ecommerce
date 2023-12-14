import React from 'react'
import Button from './Button';

export default function ButtonsDivForModal({ btn1ClassName, btn2ClassName, product, addToTheCart, changeQuantities, handleClose }) {
    return (
        <div className='flex justify-center'>
            <Button 
                    type="button"
                    className={`${btn1ClassName} mt-4 mr-3 px-4  py-2` }
                    onClick={handleClose}
                    title="Close"
            />
            <Button
                    type="button"
                    className={`${btn2ClassName} mt-4 ml-3` }
                    onClick={() =>{
                    changeQuantities();
                    addToTheCart(product);
                    handleClose();
                    }}
                    title="Add to the cart"
            />
        </div>
    ) 
}
