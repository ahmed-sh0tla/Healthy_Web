import React from 'react'

export default function TrendingCard({ object }) {

  const { product_name, image, price } = object

  return <>
    <div className='mt-5 mb-3 bigcir'>
      <div className='p-5'>
        <img src={image} alt="meals" className='rounded-3xl shape' />
      </div>
      <p className='font-mono'>{product_name}</p>
      <p className='circle pt-2'>${price}</p>
    </div>
  </>
}