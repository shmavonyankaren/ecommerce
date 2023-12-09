import React from 'react'
import ItemModal from './ItemModal'

export default function Item({className, title, price, category, description, image, addToTheCart, changeQuantities, btn1ClassName, btn2ClassName }) {
  return (
      <div>
        <div 
            className={className}
        >
            <img 
                className="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" 
                src={image}
                alt={title} 
            />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {title} 
                    </p>
                    <p className="text-slate-500 font-medium">
                        {price} $
                    </p>
                </div>
                <div>
                    <ItemModal 
                        title={title}
                        price={price}
                        category={category}
                        description={description}
                        image={image}
                        addToTheCart={addToTheCart}
                        changeQuantities={changeQuantities}
                        btn1ClassName={btn1ClassName}
                        btn2ClassName={btn2ClassName}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
