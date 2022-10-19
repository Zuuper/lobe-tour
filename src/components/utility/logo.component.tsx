import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo.svg'

export default function LogoComponent(props: {className?: string}) {
  return (
    <div className={`flex flex-row items-center text-gray-800 gap-2 ${ props.className}`}>
      <p className='font-bold text-3xl'>Lobe</p>
      <Image src={Logo} alt="lobe's logo" width={16} height={16}/>
    </div>
  )
}
