import React from 'react'
import Link from 'next/link'
import Image from "next/image";

const Navbar = () => {
    return (
        <header class="text-gray-600 body-font shadow-md">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span class="ml-3 text-xl text-indigo-600">WEB TECHNOLOGY</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={'/about_us'} className="mr-5 hover:text-gray-900"><li className='list-none text-stone-900 font-sans'>About Us</li></Link >
                    <Link href={'/our_service'} className="mr-5 hover:text-gray-900"><li className='list-none text-stone-900 font-sans'>Services</li></Link >
                    <Link href={'/portfolio'} className="mr-5 hover:text-gray-900"><li className='list-none text-stone-900 font-sans'>Portfolio</li></Link >
                    <Link href={'/careers'} className="mr-5 hover:text-gray-900"><li className='list-none text-stone-900 font-sans'>Careers</li></Link >
                    <Link href={'/contact'} className="mr-5 hover:text-gray-900"><li className='list-none text-stone-900 font-sans'>Contact Us</li></Link >
                    <Link href={'/get_in_touch'} className="mr-5 hover:text-gray-900"><li className='list-none text-stone-900 font-sans'>Get in Touch</li></Link >
                </nav>
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Here Blog
                </button>
            </div>
        </header>
    )
}

export default Navbar