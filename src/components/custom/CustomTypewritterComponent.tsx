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
            .typeString('A_React_JS_Developer.tsx')
            .pauseFor(2000)
            .deleteChars(22)
            .typeString('Problem_Solver.ts')
            .pauseFor(2000)
            .deleteChars(17)
            .typeString('Student.js')
            .pauseFor(2000)
            .start()
        }}
      />
    </div>
  )
}

export default CustomTypewriterComponent
