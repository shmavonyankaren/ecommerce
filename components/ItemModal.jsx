import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from './Button.jsx';
import { useState } from 'react';

export default function ItemModal({id, title, price, category, description, image, addToTheCart, changeQuantities, btn1ClassName, btn2ClassName }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Button 
            className={btn1ClassName}
            onClick={handleShow}
            title="More"
        />
        <Button
            className={btn2ClassName}
            onClick={(e) =>{
              e.preventDefault();
              changeQuantities();
              addToTheCart({
                id,
                title,
                price,
                category,
                description,
                image
              });
            }}
            title="Add to the cart"
        />
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
          <div

          >
            <div className='flex'>
              <img 
                className="max-w-[18rem] min-w-[18rem] max-h-[18rem] min-h-[18rem"
                src={image} 
                alt={title}
              />
              <div className='mr-2'>
                <h4>{title}</h4>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                      <label 
                          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                          for="inline-full-name"
                      >
                          Price :
                      </label>
                  </div>
                  <div className="md:w-2/3">
                    <h3>{price} $</h3>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                      <label 
                          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                          for="inline-full-name"
                      >
                          Categpory :
                      </label>
                  </div>
                  <div className="md:w-2/3">
                    <h3>{category}</h3>
                  </div>
                </div> 
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
                          addToTheCart({
                            id,
                            title,
                            price,
                            category,
                            description,
                            image,
                          });
                          handleClose();
                        }}
                        title="Add to the cart"
                  />
                </div>        
              </div>
            </div>
            <div>
              <label 
                  className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" 
                  for="inline-full-name"
              >
                  Description
              </label>
              <h6>
              {description}
              </h6>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
    