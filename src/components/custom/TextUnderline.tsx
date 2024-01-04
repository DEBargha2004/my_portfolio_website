import React from 'react'

function TextUnderline({children}:{children?:React.ReactNode}) {
  return (
    <div className='inline-block relative'>
      {children}
      <div className='absolute bottom-1 w-full h-[3px] rounded bg-gradient-to-r from-lime-300 to-green-600'/>
    </div>
  )
}

export default TextUnderline
