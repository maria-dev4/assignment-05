
import React from "react";
import BannerImg from "../assets/banner-stack.png";



const Banner = () => {
  return (
    <div className="bg-bg2">
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">


        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

          <div className="w-full text-center md:w-1/2 md:text-left">

            <h1 className="text-4xl font-bold leading-tight text-heading md:text-5xl lg:text-6xl">
              Build Your Ideal
              <br />
              <span className="whitespace-nowrap bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            
            <p className="mt-5 text-base leading-7 text-text md:text-lg">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>


            <div className="mt-7 flex justify-center gap-3 md:justify-start">

              <button className="w-44 rounded-full bg-gradient-to-r from-btn1 via-pink to-purple px-4 py-3 text-sm font-semibold text-white shadow-[0_0_18px_rgba(22,135,255,0.35)] transition-all duration-300 hover:shadow-[0_0_24px_rgba(22,135,255,0.5)]">
                Explore Technologies
              </button>

              

              <button className="w-44 rounded-full border border-blue px-4 py-3 text-sm font-semibold text-heading transition-all duration-300 hover:bg-blue/10">
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

