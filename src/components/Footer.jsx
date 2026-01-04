import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-nikeGray py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Nike AI Rebrand. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <span className="hover:text-white cursor-pointer transition">
            Privacy
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Terms
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Contact
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
