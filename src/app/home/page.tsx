import React from 'react'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import bg from '../../../public/FQF2024-2.jpg'

function Home() {
  return (
    <div className="mx-auto min-h-screen overscroll-none">
      <Image
        alt='French Quarter in New Orleans'
        src={bg}
        placeholder='blur'
        quality={100}
        fill
        sizes='100vw'
        style={{objectFit: 'cover', backgroundAttachment: 'scroll'}}
      />

      <NavBar />

      <div className='container mx-auto hero bg-base-200'>
        <div className='hero-content text-center'>
          <div className='max-w-md mx-auto rounded-xl bg-gray-600/35'>
            <p className='py-10 text-2xl text-black font-bold'>
              welcome to a new experience... one that shows you my life from a
            </p>
            <h1 className='text-5xl font-bold text-red-500 py-10'> very$ubtle </h1>
            <p className='py-10 text-2xl font-bold text-black'>
              perspective...
            </p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
