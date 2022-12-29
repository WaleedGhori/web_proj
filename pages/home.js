import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
      <section className="min-h-screen">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Link href={'/'}><Image src='/hero.jpg' alt='Codeswear' width={500} height={180}></Image></Link>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Manifesting The Technology
                <br className="hidden lg:inline-block" />For Your Future
              </h1>
              <p className="mb-8 leading-relaxed">Committed to meet deadlines, our deep software engineering and product expertise offer the best solutions to your business needs.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Check Project Estimation</button>
              </div>
            </div>
          </div>
        </section>
        <section className='our_service'>
            <div className='container'>
              <h2 className='font-bold text-3xl text-center mb-2'>Our Key Values</h2>
              <hr className='w-20 h-1 bg-indigo-500 m-auto mt-0'/>
              <div className='flex m-4'>
              <div className='border-solid border-2 border-indigo-500 m-4 p-4 hover:bg-indigo-600 hover:text-white '>
                  <h2 className='text-2xl font-semibold text-center mt-2 mb-4'>Dedication</h2>
                  <p className='text-base text-center font-serif font-medium '>Ethical Values towards both the team members and clients, no matter what.</p>
                </div>
                <div className='border-solid border-2 border-indigo-500 m-4 p-4 hover:bg-indigo-600 hover:text-white  '>
                  <h2 className='text-2xl font-semibold text-center mt-2 mb-4'>Sincerity</h2>
                  <p className='text-base text-center font-serif font-medium '>Quality Deliverance of work and sincerity to client and Organization.</p>
                </div>
                <div className='border-solid border-2 border-indigo-500 m-4 p-4 hover:bg-indigo-600 hover:text-white'>
                  <h2 className='text-2xl font-semibold text-center mt-2 mb-4'>Results</h2>
                  <p className='text-base text-center font-serif font-medium '>Time Deliverance of work according to client need.</p>
                </div>
        
              </div>
            </div>

        </section>
      </section>
    </div>
  )
}

export default Home