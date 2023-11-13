'use client'

import { cn } from '@/lib/utils'
import { Project } from '@/types/project'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { wrap } from 'popmotion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Eye, Github } from 'lucide-react'
import Link from 'next/link'
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '../ui/tooltip'

const ProjectCard = ({ project }: { index?: number; project: Project }) => {
  const [showTopBar, setShowTopBar] = useState(false)
  const [[page, direction], setPage] = useState([0, 0])
  const navigatorRef = useRef(null)

  const imageIndex = wrap(0, project.images?.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      }
    }
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div
      className='relative h-full bg-accent rounded-md z-10'
      onMouseEnter={() => setShowTopBar(true)}
      onMouseLeave={() => setShowTopBar(false)}
      onClick={e => {
        const targetElement = e.target
        const navigator = document.getElementById('navigator')
        //@ts-ignore
        if (!targetElement.contains(navigatorRef.current)) {
          console.log(targetElement, navigator)

          setShowTopBar(!showTopBar)
        }
      }}
    >
      <div className='p-2 bg-accent h-full rounded-md flex flex-col justify-start items-center text-center gap-4'>
        <div className='relative overflow-hidden w-full aspect-[40/19] rounded'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={project.images?.[imageIndex]?.src}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 35 },
                opacity: { duration: 0.2 }
              }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className='w-full absolute top-0 left-0'
            />
          </AnimatePresence>
          <div
            className='z-10 absolute top-1/2 -translate-y-1/2 left-1 h-8 aspect-square flex justify-center items-center rounded-full bg-[#0000006c] cursor-pointer'
            onClick={() => paginate(-1)}
          >
            <ChevronLeft id='navigation' ref={navigatorRef} />
          </div>
          <div
            className='z-10 absolute top-1/2 -translate-y-1/2 right-1 h-8 aspect-square flex justify-center items-center rounded-full bg-[#0000006c] cursor-pointer'
            onClick={() => paginate(1)}
          >
            <ChevronRight id='navigation' ref={navigatorRef} />
          </div>
          <div className='absolute bottom-1 left-1/2 -translate-x-1/2 px-1 py-[2px] bg-[#00000048] flex gap-[6px] z-20 rounded-full'>
            {project.images?.map((image, imageIndexMap) => (
              <div
                key={imageIndexMap}
                className={cn(
                  'h-2 aspect-square rounded-full cursor-pointer border-accent border-[1px]',
                  imageIndex === imageIndexMap ? 'bg-[#00000085]' : 'bg-white'
                )}
                onClick={() => {
                  paginate(imageIndexMap - imageIndex)
                }}
              ></div>
            ))}
          </div>
        </div>
        <h1 className='text-lg font-semibold'>{project.title}</h1>
        <p className='text-sm min-h-[80px]'>{project.description}</p>
        <div className='w-full flex flex-wrap justify-start gap-5 px-2'>
          {project.techStack?.map((tech, index) => (
            <TooltipProvider key={index} delayDuration={0.1}>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    className='h-6 w-fit'
                  />
                </TooltipTrigger>
                <TooltipContent>{tech.title}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
      <div
        className={cn(
          'absolute -z-10 left-1/2 top-0 -translate-x-1/2 bg-muted transition-all h-[10%] w-1/3 rounded flex items-center justify-evenly',
          showTopBar ? '-translate-y-[70%]' : 'translate-y-0'
        )}
      >
        <Link
          href={project.github}
          className={project.github ? 'opacity-100' : 'opacity-50'}
        >
          <Github className='cursor-pointer' />
        </Link>
        <Link
          href={project.website}
          className={project.website ? 'opacity-100' : 'opacity-50'}
        >
          <Eye className='cursor-pointer' />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
