'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import profile from '../../../public/me.png'

const Profile = () => {
  return (
    <motion.div
      layout
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className='w-fit h-fit rounded-full overflow-hidden profile relative bg-white dark:bg-[#020817] duration-1000 ease-out'
    >
      <Image src={profile} height={400} width={400} alt='me' priority={true} />
    </motion.div>
  )
}

export default Profile
