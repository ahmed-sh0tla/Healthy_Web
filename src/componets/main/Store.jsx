import React, { useContext } from 'react';
import { RecipyContext } from '../../context/RecipyContext';
import Stores from '../showing/Stores'

export default function Store(){
    const recipesList = useContext(RecipyContext)
    return <>

    <div id='_sec2'>
        <div className='overlay2'></div>
        <div className='quote2'>
                <p className='font-mono pb-6 text-white'>Store</p>

            </div>
            <p className='font-mono pb-6 text-white quote3'>A collection of recipes to support your health goals</p>
    </div>

    <div className='mt-30 text-center'>
            <div>
                <p className='font-mono bro'>Our Store</p>
                <p className='text-green-600'>Be Healthy Organic Food</p>
            </div>
        </div>

    <div className='grid grid-cols-3 gap-8  mt-30'>
        {recipesList && recipesList.map((item) => <Stores object={item} />)}
    </div>
    
    </>
}

