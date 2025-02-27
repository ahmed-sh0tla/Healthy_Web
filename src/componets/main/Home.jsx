import React, { useContext } from 'react';
import { TrendingContext } from '../../context/TrendingContext';
import TrendingCard from '../showing/TrendingCard';

export default function Home() {
    const trendingList = useContext(TrendingContext);
    return <>
        <section>
            <div className='quote'>
                <p className='font-mono pb-6'>The Greates Wealth Is <span className='text-green-300'>Health</span></p>
            </div>
            <button className='btn rounded-3xl p-3 button_qt bg-green-300 text-white hover:bg-green-700 font-mono'>View More</button>

        </section>


        <div className='mt-16 flex text-center justify-center align-middle gap-20 mb-3 '>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/025/548/357/original/single-one-line-drawing-fruits-concept-continuous-line-draw-design-graphic-illustration-vector.jpg" width={180} alt="fruit" />
                <p className='font-mono'>NATURAL</p>
            </div>
            <div>
                <img src="https://img.freepik.com/premium-vector/single-one-line-drawing-fruits-concept-continuous-line-draw-design-graphic-vector-illustration_612079-2528.jpg?w=2000" width={180} alt="fruit" />
                <p className='font-mono'>ORGANIC</p>
            </div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/025/548/280/original/single-one-line-drawing-fruits-concept-continuous-line-draw-design-graphic-illustration-vector.jpg" width={180} alt="fruit" />
                <p className='font-mono'>HEALTH</p>
            </div>
        </div>

        <div className='mt-32 text-center'>
            <div>
                <p className='font-mono bro'>What's Trending</p>
                <p className='text-green-600'>Be Healthy Organic Food</p>
            </div>
            <div>

            </div>
        </div>

        <div>
            <div className='container px-4'>
                <h2 className='text-black text-4xl font-bold my-3'>Trending list</h2>
                <div className='grid grid-cols-4 gap-4'>
                    {trendingList&&trendingList.map((info) =><TrendingCard key={info.product_code} object={info}/>)}
                </div>
            </div>
        </div>

    </>
}
