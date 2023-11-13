'use client'

import TypewriterComponent from 'typewriter-effect'

const CustomTypewriterComponent = () => {
  return (
    <div className='flex'>
      <TypewriterComponent
        options={{
          loop: true,
          cursor: '|',
          cursorClassName: 'blink-cursor'
        }}
        onInit={typewriter => {
          typewriter
            .typeString('A React JS Developer')
            .pauseFor(2000)
            .deleteChars(18)
            .typeString('Problem Solver')
            .pauseFor(2000)
            .deleteChars(14)
            .typeString('Student')
            .pauseFor(2000)
            .start()
        }}
      />
    </div>
  )
}

export default CustomTypewriterComponent
