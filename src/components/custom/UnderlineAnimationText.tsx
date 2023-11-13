'use client'

import { cn } from '@/lib/utils'
import { ReactNode, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const UnderLineAnimationtext = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  const [hovering, setHovering] = useState(false)
  const textRef = useRef(null)
  return (
    <div
      className='w-fit flex flex-col items-start justify-between '
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div ref={textRef} className={cn('py-1 text-primary', className)}>
        {children}
      </div>

      <motion.div
        layout
        className={cn(
          'h-1 bg-gradient-to-r from-lime-300 to-green-600 my-[2px] transition-all ease-in-out duration-500'
        )}
        style={{ width: hovering ? '100%' : '0%' }}
      ></motion.div>
    </div>
  )
}

export default UnderLineAnimationtext
