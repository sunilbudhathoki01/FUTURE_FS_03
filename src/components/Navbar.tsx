import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-nikeBlack text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">NIKE</div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-nikeRed transition cursor-pointer">Home</li>
          <li className="hover:text-nikeRed transition cursor-pointer">
            Products
          </li>
          <li className="hover:text-nikeRed transition cursor-pointer">
            Innovation
          </li>
          <li className="hover:text-nikeRed transition cursor-pointer">
            Contact
          </li>
        </ul>

        {/* CTA */}
        <button className="hidden md:block bg-nikeRed px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
          Explore
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
