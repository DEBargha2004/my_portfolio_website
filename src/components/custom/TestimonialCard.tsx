import { cn } from '@/lib/utils'
import React from 'react'

function TestimonialCard ({
  className,
  content,
  name,
  designation,
  ...props
}: {
  name: string
  className?: string
  designation?: string
  content: string
} & React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn(
        `p-8 text-accent-foreground rounded-lg bg-slate-200 dark:bg-accent shadow-md shrink-0`,
        className
      )}
      {...props}
    >
      <p
        className='font-light h-[150px] overflow-clip'
        style={{ fontFamily: 'cursive' }}
      >
        {content}
      </p>
      <div className='w-full h-[1px] bg-slate-500 dark:bg-slate-200 my-4' />
      <h1 className='font-semibold text-lg'>{name}</h1>
      <p className=' text-sm'>{designation}</p>
    </div>
  )
}

export default TestimonialCard
