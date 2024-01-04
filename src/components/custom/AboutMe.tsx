import React from "react";
import Highlight from "./Highlight";
import handcrossedme from "../../../public/me_hand_crossed.jpg";
import Image from "next/image";
import TextUnderline from "./TextUnderline";

function AboutMe() {
  return (
    <div className="flex md:flex-row md:items-start flex-col px-5 items-center justify-center gap-10 max-h-screen">
      <div className="rounded-full overflow-hidden profile duration-1000 ease-out shrink-0 w-1/2 max-w-[400px]">
        <Image src={handcrossedme} height={400} width={400} alt="me-about-me" priority={true} />
      </div>
      <div className="md:w-4xl leading-loose text-center md:text-left">
        Hi there! 👋 I'm <Highlight>Debargha Saha </Highlight>from
        <Highlight> Agartala, Tripura</Highlight>. I'm passionate about crafting
        immersive <Highlight>web applications</Highlight> and diving into
        self-challenging problems. With over <Highlight>two years</Highlight> of
        experience in <Highlight>web development</Highlight>, I thrive on
        creating efficient, user-friendly solutions. My journey into the world
        of development began with a fascination for technology and a drive to
        solve problems creatively. I'm constantly exploring new technologies and
        frameworks to expand my skill set and deliver robust, innovative
        solutions. When I'm <TextUnderline>not coding</TextUnderline>, you'll
        likely find me <Highlight>exploring new tech trends</Highlight> or
        watching a movie with the componay of myself. I believe in the power of
        continuous learning and strive to grow both personally and
        professionally every day.
      </div>
    </div>
  );
}

export default AboutMe;
