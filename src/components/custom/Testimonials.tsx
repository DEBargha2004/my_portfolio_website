'use client'

import React, { useRef } from 'react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    id: crypto.randomUUID(),
    content: `Brother, it seems that you have all the skills needed to be 
    a great developer. The portfolio you designed shows your competence as 
    a developer. I wish you all the best for your future and hope that you 
    find yourself in a position you dream of soon.`,
    name: 'Sagnik Datta',
    title: 'Student'
  },
  {
    id: crypto.randomUUID(),
    content: `Hello,I really liked the website.The UI design of the website 
    is very good.The performance of the website is also up to the mark.Great 
    work👍👍. Keep going!!`,
    name: 'Himel Choudhury',
    title: 'Student'
  },
  {
    id: crypto.randomUUID(),
    content: `Good work . I am very impressed with your work and delivering the 
    work within time . Looking forward for our next project.`,
    name: 'Arijit Das',
    title: 'Student'
  }
]

function Testimonials () {
  const testimonialsRef = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={testimonialsRef}
      className='w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'
    >
      {testimonials.map((testimonialial, index) => (
        <TestimonialCard
          key={testimonialial.id}
          content={testimonialial.content}
          name={testimonialial.name}
          designation={testimonialial.title}
        />
      ))}
    </div>
  )
}

export default Testimonials
