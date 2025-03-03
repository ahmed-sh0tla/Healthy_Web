import React, { useContext } from 'react';
import { RecipyContext } from '../../context/RecipyContext';
import Recipes from '../showing/Recipes'

export default function Rec() {

    const recipesList = useContext(RecipyContext)
    return <>
        <div id='_section'>
            <div className='overlay2'></div>
            <div className='quote2'>
                <p className='font-mono pb-6 text-white'>Recipes</p>

            </div>
            <p className='font-mono pb-6 text-white quote3'>A collection of recipes to support your health goals</p>
        </div>

        <div className='mt-30 text-center'>
            <div>
                <p className='font-mono bro'>Our Recipes</p>
                <p className='text-green-600'>Be Healthy Organic Food</p>
            </div>
        </div>

        <div>
            {recipesList && recipesList.map((item) => <Recipes object={item} />)}
        </div>

    </>
}
