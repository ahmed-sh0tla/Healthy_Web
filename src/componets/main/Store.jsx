import React, { useContext } from 'react';
import { RecipyContext } from '../../context/RecipyContext';
import Stores from '../showing/Stores'

export default function Store() {
    const recipesList = useContext(RecipyContext)
    return <>

        <div id="_sec2" className="relative bg-cover bg-center h-[350px] flex flex-col items-center justify-center text-center px-6">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white">
                <p className="font-mono text-3xl pb-4">Store</p>
                <p className="font-mono text-lg max-w-lg mx-auto">
                    A collection of recipes to support your health goals
                </p>
            </div>
        </div>
        <div className="mt-20 text-center">
            <p className="font-mono text-2xl">Our Store</p>
            <p className="text-green-600 text-lg">Be Healthy, Eat Organic Food</p>
        </div>

        <div className='grid grid-cols-3 gap-8  mt-30'>
            {recipesList && recipesList.map((item) => <Stores object={item} />)}
        </div>

    </>
}

