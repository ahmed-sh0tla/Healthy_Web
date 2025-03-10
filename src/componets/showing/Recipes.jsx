import React from 'react'

export default function TrendingCard({ object }) {

  const { product_name, image, product_ingredients } = object

  return <>
    <div className="mt-5 mb-5 p-5 text-center">
      <img
        src={image}
        alt="meals"
        className="rounded-3xl mx-auto w-64 h-64 object-cover"
      />
      <p className="font-mono text-xl mt-5">{product_name}</p>
      <p className="font-mono text-lg text-green-600 mt-3">Ingredients</p>
      <p className="text-gray-600 text-sm max-w-md mx-auto">{product_ingredients}</p>
    </div>
  </>
}