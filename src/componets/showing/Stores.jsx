import React from 'react'
import { Link } from 'react-router'

export default function TrendingCard({ object }) {

    const { product_name, image, product_nutrition_info, product_code } = object

    return <>
        <div className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-lg mb-10 bg-white p-4">
            <img className="rounded-3xl mx-auto w-full max-w-80 h-64 object-cover" src={image} alt="food" />
            <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2 text-center">{product_name}</div>
                <p className="text-gray-700 text-sm">
                    {product_nutrition_info.slice(0, 110)}...
                </p>
            </div>
            <div className="text-center">
                <Link to={`/product/info/${product_code}`}>
                    <button className="btn rounded-xl px-6 py-2.5 bg-green-400 text-white hover:bg-green-700 font-mono mt-2">
                        Order
                    </button>
                </Link>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-wrap justify-center">
                {["Healthy", "Natural", "Organic"].map((tag) => (
                    <span key={tag} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    </>
}