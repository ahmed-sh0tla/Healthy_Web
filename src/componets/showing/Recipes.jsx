import React from 'react'

export default function TrendingCard({ object }) {

  const { product_name, image, product_ingredients ,product_nutrition_info } = object

  return <>
    <div className='mt-5 mb-5 '>
      <div className='p-5 flex'>
        <img src={image}  alt="meals" className='rounded-3xl shape' />
        <p className='font-mono bro ms-5 mt-15' >{product_name}</p>
      </div>
      <p className='ms-5 font-mono bro2 mb-3'>Ingredients </p>
      <p className='text-gray-600 ps-5 mb-1'>{product_ingredients}</p>
      <p className='ms-5 font-mono bro2 mb-5'>Nutrition Info</p>
      <p className='text-gray-600 ps-5 '>{product_nutrition_info}</p>
    </div>
    <hr />
  </>
}