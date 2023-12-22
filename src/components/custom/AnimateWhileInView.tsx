'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const AnimateUpWhileInView = ({
  children,
  className,
  delay
}: {
  children: ReactNode
  className?: string
  delay?: Number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView='inView'
      variants={{
        inView: {
          y: 0,
          opacity: 1
        }
      }}
      transition={{
        duration: 0.5,
        type: 'spring',
        //@ts-ignore
        delay: delay || 0
      }}
      viewport={{ once: true, amount: 0.5 }}
      className={cn('', className)}
    >
      {children}
    </motion.div>
  )
}

export default AnimateUpWhileInView
