import { StaticImageData } from 'next/image'

export type Project = {
  title: string
  github: string
  website: string
  description: string
  images: StaticImageData[]
  techStack?: { image: string; title: string }[]
}
