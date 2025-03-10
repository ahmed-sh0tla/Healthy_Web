import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return <>
        <footer className="bg-black mt-30 pb-8 px-6">
            <div className="text-center">
                <p className="font-mono text-white pt-10 text-lg">Join Our Society</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">
                <input
                    type="text"
                    className="border border-white p-2 w-full sm:w-80 text-black rounded-md"
                    placeholder="Your Email"
                />
                <button className="px-5 py-2 bg-white hover:bg-gray-300 font-mono rounded-md">
                    Submit
                </button>
            </div>

            <div className="mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
                    <div>
                        <p className="text-white font-bold mb-3">CUSTOMER CARE</p>
                        <p className="text-white font-light">Regular</p>
                        <p className="text-white font-light">On Time</p>
                        <p className="text-white font-light">Always Care</p>
                    </div>
                    <div>
                        <p className="text-white font-bold mb-3">FAQ'S</p>
                        <p className="text-white font-light">No E-Chargers</p>
                        <p className="text-white font-light">Shopping & Delivery</p>
                        <p className="text-white font-light">Always Care</p>
                    </div>
                    <div>
                        <p className="text-white font-bold mb-3">OUR COMPANION</p>
                        <p className="text-white font-light">About</p>
                        <p className="text-white font-light">No Food</p>
                        <p className="text-white font-light">Product</p>
                    </div>

                    <div className="text-center">
                        <p className="text-white font-bold mb-3">SOCIAL MEDIA</p>
                        <div className="flex justify-center gap-4">
                            <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-facebook" className='text-white size1 pe-4'/></a>
                            <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-instagram" className='text-white size1 pe-4' /></a>
                            <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-twitter" className='text-white size1 pe-4' /></a>
                            <a href="#"><FontAwesomeIcon icon="fa-brands fa-google" className='text-white size1 ' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;
