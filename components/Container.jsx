import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={cn('max-w-screen-xl mx-auto px-4', className)}>{children}</div>
  )
}

export default Container