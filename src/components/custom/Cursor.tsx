'use client'

import { useEffect, useRef } from 'react'

function Cursor () {
  const cursorRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleCursorMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.pageY - 20}px`
        cursorRef.current.style.left = `${e.pageX - 20}px`
        if (['h1', 'p', 'span', 'div'].includes(e.target.localName)) {
          //   console.log(e)
          cursorRef.current.style.transform = 'scale(1.5)'
        }
      }
    }
    window.addEventListener('mousemove', handleCursorMove)

    return () => {
      window.removeEventListener('mousemove', handleCursorMove)
    }
  }, [])
  return (
    <div
      ref={cursorRef}
      className='h-10 aspect-square rounded-full border border-[#fd5b99] absolute bg-transparent z-50'
      //   style={{
      //     boxShadow: '0 0 10px 1px #fd5b99'
      //   }}
    />
  )
}

export default Cursor
