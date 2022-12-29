import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const portfolio = () => {
  return (
    <div>
      <section className='our_service mt-20 mb-12'>
        <div className='container'>
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium text-center title-font mb-1">WEB TECHNOLOGY</h2>

          <h2 className='font-bold text-3xl text-center mb-4'>Project We Deliverd</h2>
          <hr className='w-20 h-1 bg-indigo-500 m-auto mt-0' />
          <p className='mt-2 m-12 font-serif'>Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished various web and mobile apps related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented reality, action sports, finance and sharing economy.</p>
        </div>
      </section>
      <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Link href={'/'}><Image src='/bank.jpg' alt='Codeswear' width={500} height={180}></Image></Link>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Web Development
              </h1>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Bank Managemnt System
              </h1>
              <p className="mb-8 leading-relaxed"></p>

            </div>
          </div>
      </section>
      <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Web Development
              </h1>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Campus Managemnt System
              </h1>
              <p className="mb-8 leading-relaxed"></p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Link href={'/'}><Image src='/campus.png' alt='Codeswear' width={500} height={180}></Image></Link>
            </div>
          </div>
      </section>
      <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Link href={'/'}><Image src='/inven.png' alt='Codeswear' width={500} height={180}></Image></Link>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Web Development
              </h1>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Inventory Managemnt System
              </h1>
              <p className="mb-8 leading-relaxed"></p>

            </div>
          </div>
      </section>
    </div>
  )
}

export default portfolio