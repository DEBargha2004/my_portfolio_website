import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import insta from '../../../public/instagram.png'

const ThemeToggler = dynamic(() => import('./ThemeToggler'), { ssr: false })
const Cursor = dynamic(() => import('./Cursor'), { ssr: false })

const Navbar = () => {
  return (
    <>
      {/* <Cursor /> */}
      <div className='w-full navbar fixed left-0 top-0 px-5 py-4 flex items-center justify-between z-40 '>
        <Link href={'https://www.instagram.com/debargha6203/'}>
          <Image src={insta} alt='instagram' height={20} />
        </Link>
        <ThemeToggler />
      </div>
    </>
  )
}

export default Navbar
