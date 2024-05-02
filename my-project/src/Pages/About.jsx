import React from "react";
import Section from "../components/Section";
import Header from "../components/Header";
import { Gradient } from "../components/design/Hero";
import { BackgroundCircles } from "../components/design/Header";
import { BottomLine } from "../components/design/Hero";
import { curve } from "../assets";
import NewsLetter from "../components/NewsLetter";
import { motion } from "framer-motion";
import  Typewriter  from "typewriter-effect";
import MyFooter from "../components/MyFooter";
const About = () => {
  return (
    <>
      <Section className="px-0 py-10">
        <Header />

        <div className="relative top-15 mr-4 ml-4 flex-col md:mx-auto lg:mx-auto justify-center gap-14 w-[24.4rem] h-[29rem] md:w-[70rem] md:h-[20rem] lg:w-[70rem] lg:h-[30rem] md:text-wrap">
          <div className="flex-col md:flex-col">
            <div className="text-center text-[1.5rem] md:text-[4rem] pb-10 md:pb-10 lg:h-16 lg:font-bold">
              BRAINWAVE
            </div>
            <img
              src={curve}
              className="left-0 w-auto xl:-mt-2 mb-4 "
              width={6}
              height={28}
              alt="curve"
            />
            <div className="text-center text-[1.5rem] md:text-[3rem] md:text-center md:h-auto wx-auto">
              A SOLUTION BY BRAINSTORMERS.
            </div>
          </div>
          <BottomLine />
          <div className="absolute top-175 mt-6 text-white-200 ml-12 py-10 text-neutral-500 backdrop-blur-md border text-center border-t-1 text-lg md:text-[2rem] md:h-[15rem] lg:h-[10rem] lg:text-center mx-30 sm:px-6">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "WE are a team of highly skilled and professional AI Engineers that are eager to provide you with the best of the AI solutions."
                  ) // Replace this with your desired text
                  .start();

              }}
              options = {{
                delay:50,
              }}
            />
          </div>
        </div>
        <NewsLetter />
        <BackgroundCircles />
      </Section>

      <MyFooter/>
    </>
  );
};

export default About;
