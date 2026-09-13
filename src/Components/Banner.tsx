import React from 'react';
import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div>

      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">


          <div className="w-full text-center md:w-1/2 md:text-left">

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Build Your Ideal
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row md:justify-start">

              <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white">
                Explore Technologies
              </button>

              <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700">
                Learn More
              </button>

            </div>

          </div>

          <div className="w-full md:w-1/2">
            <img
              src={BannerImg}
              alt="Developer technology stack"
              className="mx-auto w-full max-w-lg"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Banner;