import React, { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ConfirmOrder from './ConfirmOrder';
import products from "../product.json";
import CartContext from '../context/CartContext';

// const Cart = ({cart,removeItem,calcTotalPrice,handleIncreaseQuantity,handleDecreaseQuantity}) => {}
const Cart = () => {
  const {cart,removeItem,calcTotalPrice,handleIncreaseQuantity,handleDecreaseQuantity} = useContext(CartContext);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
    <main className='cart-container d-flex flex-column justify-content-center gap-2'>
        <h2 className='cart'>My Cart Preview</h2>
        <div>
          {cart.length === 0 && (
            <div>
            <h3 className='fs-2 fst-italic fw-bolder text-danger'>No item(s) in the cart</h3>
            <p className='fw-bolder text-success fs-4'>Keep shopping...</p>
            </div>
            
          )}
        </div>
        {cart.map((cartItem) => {
          const { id, title, price, button, image } = cartItem;
          return (
            <div
              className='row gap-3 align-items-center py-0 my-0 mb-3'
              key={id}
            >
              <div className='item-img'>
                <img className='item-img' src={image} alt='product image' />
              </div>
              <div className='col item-detail d-flex flex-column m-0 p-0 ps-3'>
                <h4 className='item-title fw-bold'>{title}</h4>
                <div className='d-flex align-items-center'>
                  <button className='subtract-item-btn' onClick={()=>handleDecreaseQuantity(id)}>-</button>
                  <p className='item-number'> {cartItem.quantity} </p>
                  <button className='add-item-btn' onClick={()=>handleIncreaseQuantity(id)}>+</button>
                </div>
                <div className='d-flex gap-4 m-0 mt-1'>
                  <p className='item-price'>N{price}</p>
                  <button className='remove-btn' onClick={()=>removeItem(id)}>remove</button>
                </div>
              </div>
            </div>
          );
        })}

        {cart.length === 0 ? (
          ""
        ) : (
          <>
        <div className='checkout-container'>
          <div className='checkout d-flex justify-content-between'>
            <p className='checkout-head'>Sub Total</p>
            <p className='checkout-price'>{calcTotalPrice.toLocaleString()} </p>
          </div>
          <div className='checkout d-flex justify-content-between'>
            <p className='checkout-head'>Delivery</p>
            <p className='checkout-price'>8,000</p>
          </div>
          <div className='checkout d-flex justify-content-between'>
            <p className='checkout-head'>Total</p>
            <p className='checkout-price'> N {calcTotalPrice.toLocaleString()} </p>
          </div>
        </div>
        <button className='w-100 checkout-btn' onClick={() => setModalShow(true)}>
          Confirm Order{' '}
        </button>
          </>
        )}
        <ConfirmOrder show={modalShow} onHide={() => setModalShow(false)} />
        {/* < */}

        {/* Tobi */}
        {/* <main className='cart-container d-flex flex-column justify-content-center gap-2'>
        <h2>My Cart Preview</h2>
        {carts.map((cart) => {
          const { id, title, price, button, image } = cart;
          return (
            <div
              className='cart-details d-flex gap-5 gap-lg-3 align-items-center cart py-0 my-0'
              key={id}
            >
              <div className='cart-1'>
                <img className='cart-img' src={image} alt='product image' />
              </div>
              <div className='cart-2 d-flex flex-column m-0 p-0'>
                <h4 className='cart-title'>{title}</h4>
                <div className='d-flex gap-2 align-items-center'>
                  <button className='subtract-cart'>-</button>
                  <p className='pt-3 cart-number'>1</p>
                  <button className='add-cart text-center'>+</button>
                </div>
                <div className='d-flex justify-content-between m-0'>
                  <p className='cart-price'>N{price}</p>
                  <button className='remove-cart'>{button}</button>
                </div>
              </div>
            </div>
          );
        })}
        <div className='checkout-container'>
          <div className='checkout'>
            <p className='checkout-title'>Sub Total</p>
            <p className='checkout-price'>18,000</p>
          </div>
          <div className='checkout'>
            <p className='checkout-title'>Delivery</p>
            <p className='checkout-price'>8,000</p>
          </div>
          <div className='checkout'>
            <p className='checkout-title'>Total</p>
            <p className='checkout-price'>36,000</p>
          </div>
        </div>
        <button className='w-100 checkout-button' onClick={() => setModalShow(true)}>
          Confirm Order{' '}
        </button>

        <ConfirmOrder show={modalShow} onHide={() => setModalShow(false)} />
      </main> */}


      {/* bhee */}
        {/* <ConfirmOrder show={modalShow} onHide={() => setModalShow(false)} /> */}

            {/* <main className='cart-container border border-1px d-flex flex-column justify-content-center gap-4'> */}
            {/* {cart.map((cartItem)=> {
              const {id, title, price, button, image } = cartItem;
              return(

              )
            })} */}
        {/* <div className='row gap-3 py-0 my-0 align-items-center'>
          <div className='item-img'>
          <img src="https://res.cloudinary.com/dsa7z1rtg/image/upload/v1727623441/perfume_1_utlw66.png" alt="perfume-1" className='item-img'/>
          </div>
          <div className='col item-detail d-flex flex-column m-0 p-0 ps-3'>
          <h4 className='item-title fw-bold'>Ralph Lauren Perfume</h4>
          <div className='d-flex gap-2 align-items-center'>
          <button className='subtract-item-btn'>-</button>
          <p className='item-number'>1</p>
          <button className='add-item-btn'>+</button>
          </div>
          <div className='col d-flex gap-5'>
          <p className='item-price'>N6,000</p>
          <button className='remove-btn border border-danger border-1px'>Remove</button>
          </div>
          </div>
        </div>

        <div className='row gap-3 py-0 my-0 align-items-center'>
          <div className='item-img'>
          <img src="https://res.cloudinary.com/dsa7z1rtg/image/upload/v1727623444/perfume_2_apy5ep.png" alt="perfume-2" className='item-img'/>
          </div>
          <div className='col item-detail d-flex flex-column m-0 p-0 ps-3'>
          <h4 className='item-title fw-bold'>Oud Touch Franck Oliver</h4>
          <div className='d-flex gap-2 align-items-center'>
          <button className='subtract-item-btn'>-</button>
          <p className='item-number'>1</p>
          <button className='add-item-btn'>+</button>
          </div>
          <div className='col d-flex gap-5'>
          <p className='item-price'>N6,000</p>
          <button className='remove-btn border border-danger border-1px'>Remove</button>
          </div>
          </div>
        </div>

        <div className='row gap-3 py-0 my-0 align-items-center'>
          <div className='item-img'>
          <img src="https://res.cloudinary.com/dsa7z1rtg/image/upload/v1727623466/perfume_6_rfnxbr.png" alt="perfume-6" className='item-img'/>
          </div>
          <div className='col item-detail d-flex flex-column m-0 p-0 ps-3'>
        <h4 className='item-title fw-bold'>Asad Mousouff</h4>
        <div className='d-flex gap-2 align-items-center'>
          <button className='subtract-item-btn'>-</button>
          <p className='item-number'>1</p>
          <button className='add-item-btn'>+</button>
        </div>
          <div className='col d-flex gap-5'>
          <p className='item-price'>N6,000</p>
          <button className='remove-btn border border-danger border-1px'>Remove</button>
          </div>
          </div>
        </div>

        <div className='row gap-3 py-0 my-0 align-items-center'>
          <div className='item-img'>
          <img src="https://res.cloudinary.com/dsa7z1rtg/image/upload/v1727795026/perfume_7_xa7mqm.png" alt="perfume-3" />
          </div>
          <div className='col item-detail d-flex flex-column m-0 p-0 ps-3'>
        <h4 className='item-title fw-bold'>Elegance Essence</h4>
        <div className='d-flex gap-2 align-items-center'>
          <button className='subtract-item-btn'>-</button>
          <p className='item-number'>1</p>
          <button className='add-item-btn'>+</button>
        </div>
          <div className='col d-flex gap-5'>
          <p className='item-price'>N6,000</p>
          <button className='remove-btn border border-danger border-1px'>Remove</button>
          </div>
          </div>
        </div> */}
{/* 
        <div className='checout-container'>
          <div className='checkout d-flex justify-content-between'>
          <p className='checkout-head'>Sub Total</p>
          <p className='checkout-price'>50,000</p>
          </div>
        <div className='checkout d-flex justify-content-between '>
          <p className='checkout-head'>Delivery</p>
          <p className='checkout-price'>2,000</p>
        </div>
        <div className='checkout d-flex justify-content-between'>
          <p className='checkout-head'>Total</p>
          <p className='checkout-price'>52,000</p>
        </div>
        </div>
        <div className='checkout-btn'>
          <button className='checkout-btn' onClick={() => setModalShow(true)}>Confirm Order</button>
        </div>
        <Button className='checkout-btn' onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
        <ConfirmOrder show={modalShow} onHide={() => setModalShow(false)}/> */}

    </main>
    </>
  )
}

export default Cart