import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return <>
        <footer className='bg-black mt-35 pb-8'>
            <div className='text-center'>
                <p className='font-mono bro text-white pt-10'>Join Our Society</p>
            </div>
            <div className='flex justify-center align-middle'>
                <input type="text" className='border border-white mt-5 ya pe-5 ps-2' placeholder='Your Email' />
                <button className='btn ps-5 pe-6 pt-2.5 pb-2.5 bg-white hover:bg-gray-300 font-mono cen2'>Submit</button>
            </div>
            <div className='mt-15'>
                <div className='grid grid-cols-4'> 
                    <div className='grid-rows-4'>
                        <p className='text-white font-bold ps-10 mb-5'>CUSTOMER CARE</p>
                        <p className='text-white font-light ps-10'>Regular</p>
                        <p className='text-white font-light ps-10'>On Time</p>
                        <p className='text-white font-light ps-10'>Always Care</p>
                    </div>
                    <div className='grid-rows-4'>
                        <p className='text-white font-bold  mb-5'>FAQ'S</p>
                        <p className='text-white font-light '>No E-Chargers</p>
                        <p className='text-white font-light'>Shoping&Delivery</p>
                        <p className='text-white font-light '>Always Care</p>
                    </div>
                    <div className='grid-rows-4'>
                        <p className='text-white font-bold  mb-5'>OUR COMPANION</p>
                        <p className='text-white font-light '>About</p>
                        <p className='text-white font-light'>No Food</p>
                        <p className='text-white font-light '>Product</p>
                    </div>
                    <div className='grid-rows-2'>
                        <p className='text-white font-bold  mb-5'>SOCIAL MEDIA</p>
                        <div className='grid-cols-4'>
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
