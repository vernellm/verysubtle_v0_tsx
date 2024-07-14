import React from 'react'
import Video from 'next-video';
import BackgroundVideo from 'next-video/background-video';
import spinnerLogo from '../../../videos/0001-0250.mp4'
import Link from 'next/link'

export default function SpinnerLogo() {
  return (
    <div className='w-full items-center'>
        <Link href="/home" className='cursor-default'>
          <BackgroundVideo className='h-screen w-screen' src={spinnerLogo}/>
        </Link>
      </div>
  )
}
