'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Moon, SunDim } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeToggler = () => {
  const { setTheme, theme } = useTheme()
  return (
    <div className='flex justify-between items-center gap-3'>
      <div
        className={cn(
          'w-12 h-6 rounded-full p-[2px] flex transition-all items-center cursor-pointer dark:justify-end dark:bg-stone-700 justify-start bg-stone-200'
        )}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <motion.div
          layout
          style={{ transitionDuration: '20ms' }}
          className='h-full aspect-square transition-all ease-linear rounded-full bg-primary-foreground flex flex-col justify-center items-center'
        >
          {theme === 'dark' ? (
            <Moon className='h-5 w-5 p-[2px]' />
          ) : (
            <SunDim className='h-5 w-5 p-[2px]' />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ThemeToggler
