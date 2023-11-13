import { ReactNode } from 'react'

function ErrorMessage ({ children }: { children: ReactNode }) {
  return <div className='text-sm text-red-600'>{children}</div>
}

export default ErrorMessage
