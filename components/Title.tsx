import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'

const Title = () => {
  return (
    <div className='pt-10 z-10 opacity-80'>
        <Image src={logo} alt='logo' priority/>
    </div>
  )
}

export default Title
