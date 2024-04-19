import React from 'react'
import Link from 'next/link'


const Navbar = () => {
    return (
        <header  className="text-gray-600 body-font shadow-md sticky top-0 left-0 right-0 z-[1000] bg-white ">
            <div  className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link  href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl text-indigo-600">WEB TECHNOLOGY</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {/* <Link href={'/Home'} className="mr-5 hover:text-gray-900"><li className='list-none text-stone-900 font-sans'>Home</li></Link > */}
                    <Link href={'/about_us'} className="mr-5 "><li className='list-none text-stone-900 font-sans hover:bg-indigo-600 hover:text-white p-[6px] rounded-sm'>About Us</li></Link >
                    <Link href={'/our_service'} className="mr-5 hover:text-gray-900"><li className='list-none text-stone-900 font-sans  hover:bg-indigo-600 hover:text-white p-[6px] rounded-sm'>Services</li></Link >
                    <Link href={'/portfolio'} className="mr-5 hover:text-gray-900"><li className='list-none text-stone-900 font-sans hover:bg-indigo-600 hover:text-white p-[6px] rounded-sm'>Portfolio</li></Link >
                    <Link href={'/careers'} className="mr-5 hover:text-gray-900"><li className='list-none text-stone-900 font-sans hover:bg-indigo-600 hover:text-white p-[6px] rounded-sm'>Careers</li></Link >
                    <Link href={'/contact'} className="mr-5 hover:text-gray-900"><li className='list-none text-stone-900 font-sans hover:bg-indigo-600 hover:text-white p-[6px] rounded-sm'>Contact Us</li></Link >
                    <Link href={'/get_in_touch'} className="mr-5 hover:text-gray-900"><li className='list-none text-stone-900 font-sans hover:bg-indigo-600 hover:text-white p-[6px] rounded-sm'>Get in Touch</li></Link >
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Here Blog
                </button>
            </div>
        </header>
    )
}

export default Navbar