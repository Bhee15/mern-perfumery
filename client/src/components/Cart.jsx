import React from 'react'

const Cart = () => {
  return (
    <>
    <main className='cart-container border border-1px d-flex flex-column justify-content-center gap-4'>
        <h1 className='cart'>My Cart Preview</h1>
        <div className='row gap-3 py-0 my-0 align-items-center'>
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
        </div>

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
          <button className='checkout-btn'>Confirm Order</button>
        </div>
    </main>
    </>
  )
}

export default Cart