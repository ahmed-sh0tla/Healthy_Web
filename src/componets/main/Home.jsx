import React, { useContext } from 'react';
import { TrendingContext } from '../../context/TrendingContext';
import TrendingCard from '../showing/TrendingCard';

export default function Home() {
    const trendingList = useContext(TrendingContext);


    return <>
        <section>
            <div className='quote'>
                <p className='font-mono pb-6'>The Greates Wealth Is <span className='text-green-400'>Health</span></p>
            </div>
            <button className='btn rounded-3xl p-3 button_qt bg-green-400 text-white hover:bg-green-700 font-mono'>View More</button>

        </section>


        <div className='mt-40 flex text-center justify-center align-middle gap-20 mb-3 '>
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

        <div className='mt-30 text-center'>
            <div>
                <p className='font-mono bro'>What's Trending</p>
                <p className='text-green-600'>Be Healthy Organic Food</p>
            </div>
        </div>
        <div>
            <div className='px-4 '>
                <div className=' flex text-center justify-center align-middle gap-10'>
                    {trendingList && trendingList.map((item) => <TrendingCard object={item} />)}

                </div>
            </div>
        </div>

        <div className='mt-35 mb-10' id='sec5'>
            <div className='overlay'></div>
            <div className='word1'>
                <p className='font-bold text-white sizee'>Unlock Your Potential With</p>
                <p className='font-extralight text-white sizee'>Good Nutrion </p>
            </div>
            <p className='font-medium text-white word2'>Be Healthy Organic food</p>
            <button className='btn word3 rounded-xl p-3 button_qt bg-green-400 text-white hover:bg-green-700 font-mono'>More From Us</button>
        </div>


        <div className='mt-35 ms-6 pt-5 mb-5'>
            <div className='text-center mb-15'>
                <p className='font-mono bro'>Welcome to our organic food sociaty</p>
                <p className='font-mono text-green-500'>Be healthy organic food</p>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                <div>
                    <img src="https://th.bing.com/th/id/OIP.eBf8oGPles_nlefKgtVzEgHaEn?rs=1&pid=ImgDetMain" alt="pic" width={350} />
                    <p className='font-bold pb-5 pt-4'>Best Quality Product</p>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat dolores porro laudantium possimus cupiditate ipsam inventore modi culpa blanditiis.</p>
                </div>
                <div >
                    <img src="https://th.bing.com/th/id/OIP.G-H0COExmgz6OvhrpLPHMgHaEg?w=724&h=440&rs=1&pid=ImgDetMain" alt="pic" width={350} />
                    <p className='font-bold pb-5 pt-4 '>Organic Food</p>
                    <p className='text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, quisquam dolores voluptatum debitis earum labore, repudiandae cum quae dolore deserunt fugit. Eaque officiis accusamus sunt!</p>
                </div>

                <div >
                    <img src="https://betterme.world/articles/wp-content/uploads/2020/10/Frame-5444-1024x577.png" alt="pic" width={400} />
                    <p className='font-bold pb-5 pt-4'>Naturale Food</p>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut fuga iusto eaque repudiandae voluptatum odit sed velit corporis nemo, quibusdam maxime id, autem ex dolorum! Accusamus, neque!</p>
                </div>
            </div>
        </div>


        <div className='mt-35 mb-10'>
            <div className='text-center'>
                <p className='font-mono size2'>Contact Us </p>
                <p className='text-green-500'>Always Be In Touch With Us</p>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-8 ms-40 '>
                    <div className='grid-rows-6'>
                        <p className='font-mono size1'>LOCATION</p>
                        <p className='text-gray-700 mb-3'>New York 0911 DC </p>
                        <p className='font-mono size1'>Phone</p>
                        <p className='text-gray-700 mb-3'>03444-242472874</p>
                        <p className='font-mono size1'>Email</p>
                        <p className='text-gray-700'>mail@gmail.com</p>
                    </div>
                    <div className='grid grid-cols-6 ms-40 '>
                        <div className='grid-rows-6'>
                            <input type="text" className='bg-gray-200 rounded-xs p-1.5' placeholder='First Name' />
                            <textarea name="info" id="_info" className='bg-gray-200 rounded-xs mt-10 ps-1' placeholder='Enter Message' rows={7} cols={56}></textarea>
                        </div>
                    </div>
                    <div className='grid grid-cols-6 ms-40 '>
                        <div className='grid-rows-1'>
                            <input type="text" className='bg-gray-200 rounded-xs p-1.5 ms-25' placeholder='Last Name' />
                        </div>
                    </div>                    
                </div>
                <button className='btn rounded-xl ps-5 pe-6 pt-2.5 pb-2.5 bg-green-400 text-white hover:bg-green-700 font-mono cen'>Submit</button>
            </div>
        </div>
        
    </>
}
