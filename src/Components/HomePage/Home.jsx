import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import content from "../../../content.json";
import OurTeam from "./OurTeam";
import WhoAreWe from "./WhoAreWe";
import myImage from "/assets/images/landingPage.jpeg";
export const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white">
        <TextParallaxContent
          imgUrl={myImage}
          heading={content.home.companyName}
          tagline={content.home.heroTagline}
          description={content.home.description}
        >
          <ExampleContent />
        </TextParallaxContent>
      </div>
      <WhoAreWe />

      <OurTeam />
    </div>
  );
};

const IMG_PADDING = 0;

const TextParallaxContent = ({
  imgUrl,
  tagline,
  heading,
  description,
  children,
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[100vh] md:h-[150vh] lg:h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy
          heading={heading}
          tagline={tagline}
          description={description}
        />
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
        style={{ opacity }}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent top-0 left-0 sm:w-1/4 w-3/4 h-full" /> */}
    </motion.div>
  );
};

const OverlayCopy = ({ tagline, heading, description }) => {
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
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-start pl-4 justify-center text-white overflow-x-clip"
    >
      <img src="/assets/images/GANGLIA_text.png" className="mb-10 sm:h-auto h-20" style={{ fontFamily: "'Montserrat', sans-serif"}}></img>
      {/* <div>
        <h1 className="text-7xl font-bold font-[Montserrat]" style={{ fontFamily: "'Montserrat', sans-serif"}}>{content.logo.titlePrimary}</h1>
        <h3 className="text-[27px] -mt-1 mb-6 pl-2 font-semibold">{content.logo.titleSecondary}</h3>
      </div> */}
      <p className="text-left text-2xl lg:text-5xl md:text-4xl mb-4">
        {tagline}
      </p>
      <p className="text-md lg:text-xl max-w-5/6">
        {content.home.description}
      </p>
      <Link
        to="/services"
        className="w-1/2 md:w-64 lg:w-64  rounded mt-10 bg-white px-4 py-3 text-lg text-black transition-colors hover:scale-105  group flex items-center justify-center no-underline"
      >
        Our Services  
        <FiArrowUpRight className="inline transition-transform duration-300 group-hover:rotate-45" />
      </Link>
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
        {content.home.ourStory}
      </p>

      <Link
        to="/ourproducts"
        className="w-full rounded mt-2 bg-neutral-900 px-4 py-3 text-lg text-white transition-colors hover:scale-105 md:w-fit group flex items-center justify-center no-underline"
      >
        Learn more
        <FiArrowUpRight className="inline transition-transform duration-300 group-hover:rotate-45" />
      </Link>
    </div>
  </div>
);
