import React, { useContext } from 'react';
import { TrendingContext } from '../../context/TrendingContext';
import TrendingCard from '../showing/TrendingCard';

export default function Home() {
    const trendingList = useContext(TrendingContext);


    return <>
        <section className="relative bg-cover bg-center h-[300px] flex items-center justify-center text-center px-6">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white">
                <p className="font-mono text-2xl pb-6">
                    The Greatest Wealth Is <span className="text-green-400">Health</span>
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="bg-green-500 hover:bg-green-600 p-3 px-6 text-white font-mono  shadow-lg transition">
                        View More
                    </button>
                    <button className="p-3 px-6 border border-white hover:border-green-400 text-white font-mono transition">
                        Learn More
                    </button>
                </div>
            </div>
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

        <div className="mt-20 text-center">
            <div>
                <p className="font-mono text-2xl">What's Trending</p>
                <p className="text-green-600 text-lg">Be Healthy, Eat Organic Food</p>
            </div>
            <div className="mt-10 px-6">
                <div className="flex flex-wrap justify-center gap-6">
                    {trendingList && trendingList.map((item, index) => (
                        <TrendingCard key={index} object={item} />
                    ))}
                </div>
            </div>
        </div>


        <div className="mt-20 px-6">
            <div className="text-center mb-10">
                <p className="font-mono text-2xl">Welcome to our Organic Food Society</p>
                <p className="font-mono text-green-600 text-lg">Be healthy eat organic food</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <div className="text-center">
                    <img
                        src="https://th.bing.com/th/id/OIP.eBf8oGPles_nlefKgtVzEgHaEn?rs=1&pid=ImgDetMain"
                        alt="Best Quality Product"
                        className="hover:scale-95 transition-transform duration-300 rounded-lg w-full object-cover h-60"
                    />
                    <p className="font-bold pb-2 pt-4 text-lg">Best Quality Product</p>
                    <p className="text-gray-700 px-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat dolores porro laudantium possimus cupiditate ipsam inventore modi culpa blanditiis.
                    </p>
                </div>
                <div className="text-center">
                    <img
                        src="https://th.bing.com/th/id/OIP.G-H0COExmgz6OvhrpLPHMgHaEg?w=724&h=440&rs=1&pid=ImgDetMain"
                        alt="Organic Food"
                        className="hover:scale-95 transition-transform duration-300 rounded-lg w-full object-cover h-60"
                    />
                    <p className="font-bold pb-2 pt-4 text-lg">Organic Food</p>
                    <p className="text-gray-700 px-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, quisquam dolores voluptatum debitis earum labore, repudiandae cum quae dolore deserunt fugit.
                    </p>
                </div>
                <div className="text-center">
                    <img
                        src="https://betterme.world/articles/wp-content/uploads/2020/10/Frame-5444-1024x577.png"
                        alt="Natural Food"
                        className="hover:scale-95 transition-transform duration-300 rounded-lg w-full object-cover h-60"
                    />
                    <p className="font-bold pb-2 pt-4 text-lg">Natural Food</p>
                    <p className="text-gray-700 px-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut fuga iusto eaque repudiandae voluptatum odit sed velit corporis nemo.
                    </p>
                </div>
            </div>
        </div >



        <div className="mt-20 mb-10 px-6">
            <div className="text-center">
                <p className="font-mono text-2xl">Contact Us</p>
                <p className="text-green-500">Always Be In Touch With Us</p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <div className="space-y-4 text-center md:text-left">
                    <p className="font-mono text-lg">LOCATION</p>
                    <p className="text-gray-700 mb-3">New York 0911 DC</p>

                    <p className="font-mono text-lg">Phone</p>
                    <p className="text-gray-700 mb-3">03444-242472874</p>

                    <p className="font-mono text-lg">Email</p>
                    <p className="text-gray-700">mail@gmail.com</p>
                </div>
                <div className="space-y-4 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            className="bg-gray-200 rounded-md p-2 w-full"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="bg-gray-200 rounded-md p-2 w-full"
                            placeholder="Last Name"
                        />
                    </div>

                    <textarea
                        name="info"
                        id="_info"
                        className="bg-gray-200 rounded-md p-2 w-full h-32"
                        placeholder="Enter Message"
                    ></textarea>

                    <button className="w-full sm:w-auto px-5 py-2.5 bg-green-400 text-white hover:bg-green-700 font-mono rounded-xl">
                        Submit
                    </button>
                </div>
            </div>
        </div>

    </>
}
