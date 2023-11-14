import CustomTypewriterComponent from '@/components/custom/CustomTypewritterComponent'
import UnderLineAnimationtext from '@/components/custom/UnderlineAnimationText'
import SideNav from '@/components/custom/SideNav'
import Profile from '@/components/custom/Profile'
import ProjectCard from '@/components/custom/ProjectCard'
import AnimateUpWhileInView from '@/components/custom/AnimateWhileInView'
import { projects } from '@/constants/projects'
import { skills } from '@/constants/techs'
import Image from 'next/image'
import SkillCard from '@/components/custom/SkillCard'
import ContactMe from '@/components/custom/ContactMe'
import Link from 'next/link'

export default function Home () {
  return (
    <main className=''>
      {/* <SideNav /> */}
      <section className='flex flex-col-reverse md:flex-row items-center justify-evenly gap-4 py-10'>
        <div className='lg:text-5xl md:text-4xl text-3xl md:w-1/2 flex flex-col items-center justify-between text-center'>
          <p className='mb-2'>Hi I am</p>
          <UnderLineAnimationtext className='bg-clip-text font-semibold text-transparent bg-gradient-to-r from-pink-200 to-pink-500'>
            Debargha Saha
          </UnderLineAnimationtext>
          <UnderLineAnimationtext className='bg-clip-text font-semibold text-transparent bg-gradient-to-r from-pink-200 to-pink-500'>
            <CustomTypewriterComponent />
          </UnderLineAnimationtext>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <Profile />
        </div>
      </section>
      <section className='my-[150px] px-5'>
        <AnimateUpWhileInView className='lg:text-5xl md:text-4xl text-3xl mb-[100px] text-center flex justify-center items-center'>
          <UnderLineAnimationtext className=''>
            My Creative <span className='text-[#ee2995b4]'>Portfolio </span>
            Section
          </UnderLineAnimationtext>
        </AnimateUpWhileInView>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 relative gap-4 gap-y-10'>
          {projects.map((project, index) => (
            <AnimateUpWhileInView key={index}>
              <ProjectCard project={project} />
            </AnimateUpWhileInView>
          ))}
        </div>
      </section>
      <section className='my-[150px] px-5'>
        <AnimateUpWhileInView className='text-5xl mb-[80px] flex justify-center items-center'>
          <UnderLineAnimationtext>
            My <span className='text-[#ee2995b4]'>Skills</span>
          </UnderLineAnimationtext>
        </AnimateUpWhileInView>
        <div className='flex justify-center items-center flex-wrap gap-4'>
          {skills.map((skill, index) => (
            <AnimateUpWhileInView
              delay={index * 0.02}
              className='h-fit w-fit'
              key={index}
            >
              <SkillCard key={skill.title} title={skill.title}>
                <div
                  key={skill.title}
                  className='bg-muted h-[90px] w-[90px] flex justify-center items-center rounded-full'
                >
                  <Link
                    href={skill.link ?? ''}
                    target={skill.link ? '_blank' : '_self'}
                  >
                    <Image src={skill.image} alt={skill.title} height={40} />
                  </Link>
                </div>
              </SkillCard>
            </AnimateUpWhileInView>
          ))}
        </div>
      </section>
      <section className='my-[150px] px-5'>
        <AnimateUpWhileInView className='text-5xl mb-[50px] flex justify-center items-center'>
          <UnderLineAnimationtext>
            <span className='text-[#ee2995b4]'>Contact </span>Me
          </UnderLineAnimationtext>
        </AnimateUpWhileInView>
        <ContactMe />
      </section>
    </main>
  )
}
