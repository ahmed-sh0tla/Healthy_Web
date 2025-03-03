import React from 'react'
import { Link } from 'react-router'

export default function TrendingCard({ object }) {

    const { product_name, image,product_nutrition_info, price ,product_code} = object

    return <>
        <div class="max-w-sm rounded overflow-hidden shadow-lg mb-15">
            <img class="shape ms-25 rounded-3xl" src={image} alt="food"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-lg mb-2">{product_name}</div>
                    <p class="text-gray-700 text-base">
                    {product_nutrition_info.slice(0,110)}..
                    </p>
                    
                </div>
                <Link to={'/store-info:product_code'}><button className='btn rounded-xl ps-5 pe-6 pt-2.5 pb-2.5 bg-green-400 text-white hover:bg-green-700 font-mono ms-35'>Order</button></Link>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Healthy</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Natural</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Organic</span>
                </div>
                
        </div>
    </>
}