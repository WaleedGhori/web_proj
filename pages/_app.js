import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
return ( <>
 <Navbar/>
 <Component {...pageProps} />
 <Footer/>
 </> )
}