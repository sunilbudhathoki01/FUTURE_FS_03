import React from "react";

const CTA = () => {
  return (
    <section className="py-24 bg-nikeBlack text-white">
      <div className="max-w-7xl mx-auto px-6 text-center ">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 ">
          Join the future of performance
        </h2>
        <p className="text-nikeGray max-w-2xl mx-auto mb-10">
          Nike's next generation of performance wear is powered by innovation,
          data,and AI-driven design.Be part of the movement.
        </p>
        <button className="bg-nikeRed px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
