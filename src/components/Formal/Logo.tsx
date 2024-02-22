import React from 'react'
import { LogoSVG } from '@/assects/assects'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

type Props = {
    className?: string
}

const Logo = (props: Props) => {
  return (
    <div className={twMerge("relative w-[140px] h-[45px]", props.className)}><Image src={LogoSVG} alt="Design n Dev" fill /></div>
  )
}

export default Logo