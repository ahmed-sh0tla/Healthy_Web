import React from 'react'

export default function TrendingCard({object}) {

  const {product_code,product_name,price,image } = object
  return <>
  
  <div className="movie-card w-70 px-9">
    <div className="top-card w-full relative">
        <img src={image} alt="pic"/>
        <div className='absolute top-3 px-3 w-full flex justify-between'>
            <span className='bg-gray-50/50 p-1 rounded-full'>TV series</span>
        </div>
        <div className="detials">
            <span className='text-xs font-bold text-gray-400 mb-3'>{product_name}</span>
            <h2 className='text-xl font-bold text-gray-900 mb-2'>{price} $</h2>
        </div>
    </div>
  </div>
  
  </>
}