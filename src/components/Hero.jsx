import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-nikeBlack text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-hero font-extrabold leading-tight">
            MOVE WITH
            <span className="text-nikeRed block">POWER</span>
          </h1>

          <p className="mt-6 text-nikeGray max-w-md">
            Experience the future of performance wear. Reimagined by AI. Powered
            by Nike innovation.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-nikeRed px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Shop Now
            </button>
            <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Visual Placeholder */}
        <div className="hidden md:flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-nikeRed to-black rounded-full opacity-80 blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
