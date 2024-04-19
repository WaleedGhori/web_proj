import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const about_us = () => {
  return (
    <div>
      <section className='our_service mt-12 mb-10'>
        <div className='container'>
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium text-center title-font mb-1">WEB TECHNOLOGY</h2>

          <h2 className='font-bold text-3xl text-center mb-4'>About Us</h2>
          <hr className='w-20 h-1 bg-indigo-500 m-auto mt-0' />
          <div className='flex m-4 md:flex-row flex-col'>
            <p className='p-8 font-medium font-serif'>
              Web Technology is a technology consulting organization that connects strategy, design and engineering services into a seamless workflow devised to support clients every step of the way.
              <br/>
              <br/>
              Founded in 2010, Web Technology rapidly became a large team of like-minded professionals with a shared vision for their company. The team is passionate about creating valuable products and helping other businesses climb the ladder of technological development.
              <br/>
              <br/>
              Over the past 10 years, we have designed and built a diverse range of high-quality products from scratch. Our specialists have expertise in a wide variety of spheres including real estate, e-learning, healthcare, e-commerce, advertising, augmented reality, finance, sharing economy, and many more.
              <br/>
              <br/>
              After 11 years of experience and a team of 280+ people, we stand more convinced than ever in our core expertise. Trusted by the leading companies. We have completed 300+ projects with 250+ clients. The thing we are most proud of is winning the confidence of our clients.z
            </p>
          </div>
        </div>
      </section>


      <section className='our_service mt-4 mb-12'>
          <div  className='container'>
            <div className='flex m-4 md:flex-row flex-col space-x-20 items-center justify-center'>
              <div>
                <h1 className='text-2xl'><bold className="text-3xl font-bold">15</bold> years</h1>
              </div>
              <div>
                <h1 className='text-2xl'><bold className="text-3xl font-bold">10</bold> countries</h1>
              </div>
              <div>
                <h1 className='text-2xl'><bold className="text-3xl font-bold">5000</bold> people</h1>
              </div>
              <div>
                <h1 className='text-2xl'><bold className="text-3xl font-bold">1500</bold> projects</h1>
              </div>
            </div>
          </div>
        </section>


      <section className='our_service mt-20 mb-12'>
        <div className=''>
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium text-center title-font mb-1">WEB TECHNOLOGY</h2>

          <h2 className='font-bold text-3xl text-center mb-4'>Our Team Members</h2>
          <hr className='w-20 h-1 bg-indigo-500 m-auto mt-0' />
          <div className='flex m-4 md:flex-row flex-col'>
            <div className='border-solid border-2 border-indigo-200 m-4 p-4 hover:bg-indigo-600 rounded hover:text-white '>
              <h2 className='text-2xl font-semibold text-center mt-2 mb-4'>Waleed</h2>
              <p className='text-base text-center font-serif font-medium '>Well Done job by team web technology the quality of product is awsome and the project is very user friendly...</p>
            </div>
            <div className='border-solid border-2 border-indigo-200 m-4 p-4 hover:bg-indigo-600 rounded hover:text-white  '>
              <h2 className='text-2xl font-semibold text-center mt-2 mb-4'>Kunzal</h2>
              <p className='text-base text-center font-serif font-medium '>Well Done job by team web technology the quality of product is awsome and the project is very user friendly...</p>
            </div>
            <div className='border-solid border-2 border-indigo-200 m-4 p-4 hover:bg-indigo-600 rounded hover:text-white'>
              <h2 className='text-2xl font-semibold text-center mt-2 mb-4'>Asad</h2>
              <p className='text-base text-center font-serif font-medium '>Well Done job by team web technology the quality of product is awsome and the project is very user friendly...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default about_us