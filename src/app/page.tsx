import CustomTypewriterComponent from "@/components/custom/CustomTypewritterComponent";
import UnderLineAnimationtext from "@/components/custom/UnderlineAnimationText";
import Profile from "@/components/custom/Profile";
import ProjectCard from "@/components/custom/ProjectCard";
import AnimateUpWhileInView from "@/components/custom/AnimateWhileInView";
import { projects } from "@/constants/projects";
import { skills } from "@/constants/techs";
import Image from "next/image";
import SkillCard from "@/components/custom/SkillCard";
import ContactMe from "@/components/custom/ContactMe";
import Testimonials from "@/components/custom/Testimonials";
import Highlight from "@/components/custom/Highlight";
import AboutMe from "@/components/custom/AboutMe";


export default function Home() {
  return (
    <main className="main-section">
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 min-h-screen">
        <div className="lg:text-5xl mt-10 md:text-4xl text-3xl md:w-1/2 flex flex-col items-center justify-between text-center">
          <h1 className="mb-2">Hi I am</h1>
          <UnderLineAnimationtext className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-pink-200 to-pink-500">
            <h1>Debargha Saha</h1>
          </UnderLineAnimationtext>
          <UnderLineAnimationtext className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-pink-200 to-pink-500">
            <CustomTypewriterComponent />
          </UnderLineAnimationtext>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Profile />
        </div>
      </section>
      <section className="">
        <AnimateUpWhileInView className="lg:text-5xl md:text-4xl text-3xl mb-[100px] text-center flex justify-center items-center h-full w-full">
          <UnderLineAnimationtext className="">
            <h1>
              <Highlight>About</Highlight> Me
            </h1>
          </UnderLineAnimationtext>
        </AnimateUpWhileInView>
        <div>
          <AnimateUpWhileInView>
            <AboutMe />
          </AnimateUpWhileInView>
        </div>
      </section>
      <section className="my-[150px] px-5 ">
        <AnimateUpWhileInView className="lg:text-5xl md:text-4xl text-3xl mb-[100px] text-center flex justify-center items-center h-full w-full">
          <UnderLineAnimationtext className="">
            <h1>
              My Creative <Highlight>Portfolio </Highlight>
              Section
            </h1>
          </UnderLineAnimationtext>
        </AnimateUpWhileInView>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 relative gap-4 gap-y-10">
          {projects.map((project, index) => (
            <AnimateUpWhileInView key={index} delay={index * 0.02}>
              <ProjectCard project={project} />
            </AnimateUpWhileInView>
          ))}
        </div>
      </section>
      <section className="my-[150px] px-5  min-h-screen flex flex-col justify-start items-center">
        <AnimateUpWhileInView className="text-5xl mb-[80px] flex justify-center items-center ">
          <UnderLineAnimationtext>
            <h1>
              My <Highlight>Skills</Highlight>
            </h1>
          </UnderLineAnimationtext>
        </AnimateUpWhileInView>
        <div className="flex justify-center items-center flex-wrap gap-4">
          {skills.map((skill, index) => (
            <AnimateUpWhileInView
              delay={index * 0.02}
              className="h-fit w-fit"
              key={index}
            >
              <SkillCard key={skill.title} title={skill.title}>
                <div
                  key={skill.title}
                  className="bg-muted h-[90px] w-[90px] flex justify-center items-center rounded-full"
                >
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    height={40}
                    className="parallax-up"
                  />
                </div>
              </SkillCard>
            </AnimateUpWhileInView>
          ))}
        </div>
      </section>
      <section className="my-[150px] px-5 min-h-screen">
        <AnimateUpWhileInView className="text-5xl mb-[50px] flex justify-center items-center">
          <UnderLineAnimationtext>
            <h1>
              <Highlight>Testimonials</Highlight>
            </h1>
          </UnderLineAnimationtext>
        </AnimateUpWhileInView>
        <Testimonials />
      </section>
      <section className="my-[150px] px-5">
        <AnimateUpWhileInView className="text-5xl mb-[50px] flex justify-center items-center">
          <UnderLineAnimationtext>
            <h1>
              <Highlight>Contact </Highlight>Me
            </h1>
          </UnderLineAnimationtext>
        </AnimateUpWhileInView>
        <ContactMe />
      </section>
    </main>
  );
}
