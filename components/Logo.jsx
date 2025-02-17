import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({className,title,subTitle}) => {
  return (
    <div className='text-2xl group'><Link href={"/"}>
        <h2 className={cn('font-semibold tracking-wide hover:text-hoverColor hoverEffect')}>{title}{" "} <span className='text-lightSky group-hover:text-white hoverEffect'>{subTitle}</span></h2>
    </Link>
        </div>
  )
}

export default Logo