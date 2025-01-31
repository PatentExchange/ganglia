import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const WhoAreWe = () => {
  return (
    <div>
      <div className="relative flex flex-col md:flex-row">
        <img
          src="/assets/images/emp1.jpeg"
          className="w-full sm:w-[100%] md:w-[50%] lg:w-[50%] min-h-[50vh] mb-4"
        />

        <h2 className="absolute left-0  top-56  text-4xl lg:text-6xl md:text-5xl sm:text-5xl font-bold text-white mb-8 ml-4">Who Are We?</h2>

        <div className="relative text-left mt-10  lg:mt-30 md:mt-30   w-[90%] lg:w-full md:w-full">
          <div className="absolute  left-10 lg:-left-10  md:-left-10 -top-30 lg:top-0 md:top-0 p-6 lg:p-20 md:p-16 text-base lg:text-xl md:text-xl bg-gray-100 rounded-md shadow-xl">
            At Ganglia Technologies, we are a team focused on creating innovative and affordable solutions in healthcare and technology.
            We combine AI and engineering to develop products that improve lives and make operations more efficient. Our goal is to make advanced technology accessible and impactful for everyone.
            <p className="text-base mt-2 text-blue-950">
              Join us as we continue our journey to make advanced solutions accessible and affordable for everyone.
              </p>
              <button className="w-full rounded mt-2 bg-neutral-900 px-4 py-3 text-lg text-white transition-colors hover:scale-105 md:w-fit group">
  Learn more
  <FiArrowUpRight className="inline transition-transform duration-300 group-hover:rotate-45" />
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
