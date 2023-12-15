import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import CategoryForModal from './CategoryForModal.jsx';
import Description from './Description.jsx';
import ButtonsDivForModal from './ButtonsDivForModal.jsx';

export default function ItemModal({ id, title, price, category, description, image, addToTheCart, changeQuantities, btn1ClassName, btn2ClassName }) {

  const [show, setShow] = useState(false);
  const product = {
    id,
    title,
    price,
    category,
    description,
    image,
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='mb-0 flex'>
        <ButtonsDivForModal 
          product={product}
          handle={handleShow}
          btn1ClassName={btn1ClassName}
          btn2ClassName={btn2ClassName}
          addToTheCart={addToTheCart}
          changeQuantities={changeQuantities}
          title1="More"
          title2="Add to the cart"
        />
      </div>
      <Modal
        show={show}
        centered
        size="lg"
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Information about product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className='flex flex-1 min-w-[40px]'>
              <img 
                className="max-w-[18rem] min-w-[18rem] max-h-[18rem] min-h-[18rem]"
                src={image} 
                alt={title}
              />
              <div className='mr-2 flex-1'>
                <h4 className='text-center pr-12'>{title}</h4>
                <CategoryForModal 
                  text="Price"
                  category={price}
                  difference="$"
                />
                <CategoryForModal 
                  text="Category"
                  category={category}
                  difference={null}
                />
                <div className='flex justify-center'>
                  <ButtonsDivForModal 
                    product={product}
                    handle={handleClose}
                    btn1ClassName={`${btn1ClassName} mt-4 mr-3 px-4  py-2` }
                    btn2ClassName={`${btn2ClassName} mt-4 ml-3`}
                    addToTheCart={addToTheCart}
                    changeQuantities={changeQuantities}
                    title1="Close"
                    title2="Add to the cart"
                  />
                </div>
              </div>
            </div>
            <Description description={description}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
    