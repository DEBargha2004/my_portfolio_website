// import ThemeToggler from './ThemeToggler'

import { Github, Instagram } from 'lucide-react'
import dynamic from 'next/dynamic'

const ThemeToggler = dynamic(() => import('./ThemeToggler'), { ssr: false })

const SideNav = () => {
  return (
    <div
      className='fixed flex justify-start items-center gap-2 p-3 bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-10 bg-primary rounded-full -translate-y-1/2 z-30'
      style={{ boxShadow: '0 0 10px 1px rgba(253, 67, 169, 0.656)' }}
    >
      <ThemeToggler />
      <Github className='h-8 text-primary-foreground' />
      <Instagram className='h-8 text-primary-foreground' />
    </div>
  )
}

export default SideNav
