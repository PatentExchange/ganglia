import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import myImage from "/assets/images/background.jpeg"
import WhoAreWe from "./WhoAreWe";
import OurTeam from "./OurTeam";
export const Home = () => {   
  return (
    <div className="flex flex-col gap-2">
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={myImage}
        heading="Ganglia Technologies "
        subheading="Unsatisfied with existing technology!"
      >
        <ExampleContent />
      </TextParallaxContent>
      
      
    </div>
    <WhoAreWe/>
    
    <OurTeam/>
    
    </div>
  );
};

const IMG_PADDING = 0;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "cover",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden "
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{opacity,}}
      />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent top-0 left-0 sm:w-1/4 w-3/4 h-full" />

    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-start ml-4 justify-center text-white"
    >
      <p className="mb-2 text-left text-2xl font-bold  md:mb-4 md:text-5xl  ">{heading}<span className="text-lg">PVT. LMD.</span></p>
      <p className="text-left text-xl lg:text-4xl italic md:text-2xl">
        {subheading}
      </p>
      
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h1 className="col-span-1 text-5xl font-bold md:col-span-4 my-auto">
      Our Story
    </h1>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
      Founded with the vision to innovate and simplify complex industries, 
      Ganglia Technologies has grown into a leader in healthcare technology and AI-driven solutions. 
      Our journey began with a passion for making technology more accessible, and today,
       we’re proud to deliver products that improve lives and enhance business operations.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint. */}
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);