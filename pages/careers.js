import React from 'react'

const careers = () => {
  return (
    <div>
      <section className='our_service mt-20 mb-12'>
        <div className='container'>
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium text-center title-font mb-1">WEB TECHNOLOGY</h2>

          <h2 className='font-bold text-3xl text-center mb-4'>Make`s Your Careers With Us</h2>
          <hr className='w-20 h-1 bg-indigo-500 m-auto mt-0' />
          <p className='mt-2 text-center m-12 font-serif'>Let’s boost your skill together</p>
          <div className='flex justify-center items-center'>
            <table class="table-auto border-solid border-2 border-indigo-200">
              <thead className='bg-indigo-200'>
                <tr>
                  <th className='pl-7 pr-7'>Job Title</th>
                  <th className='pl-7 pr-7'>Location</th>
                </tr>
              </thead>
              <tbody className='pl-6 pr-6 border-solid border-2 border-indigo-200'>
                <tr className='border-solid border-2 border-indigo-200'>
                  <td className='pl-7 pr-7'>Mern Developer</td>
                  <td className='pl-7 pr-7'>Karachi, Pakistan</td>
                </tr>
                <tr className='border-solid border-2 border-indigo-200'>
                  <td className='pl-7 pr-7'>ASP.Net Developer</td>
                  <td className='pl-7 pr-7'>Karachi, Pakistan</td>
                </tr>
                <tr className='border-solid border-2 border-indigo-200'>
                  <td className='pl-7 pr-7'>Java Developer</td>
                  <td className='pl-7 pr-7'>Karachi, Pakistan</td>
                </tr>
                <tr className='border-solid border-2 border-indigo-200'>
                  <td className='pl-7 pr-7'>Machine Learning</td>
                  <td className='pl-7 pr-7'>Karachi, Pakistan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className='flex justify-center items-center mt-8 mb-8'>
      <label className='font-semibold text-xl text-center mb-4'>Upload Your Resume Here: </label>
      <input className='ml-2' type="file" id="myfile" name="myfile"/>
      </section>
    </div>
  )
}

export default careers