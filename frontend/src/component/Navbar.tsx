import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex justify-between items-center h-24 px-4">
            <div className="flex justify-between items-center gap-2">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
              <span className="text-2xl font-bold">ProjectFlow</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
            <Link to='/' className="text-xl font-medium hover:text-primary">
              Features
            </Link>
            <Link to='/' className="text-xl font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link to='' className="text-xl font-medium hover:text-primary">
              Pricing
            </Link>
            <Link to='/' className="text-xl font-medium hover:text-primary">
              Blog
            </Link>
          </nav>
           <div className="flex items-center gap-4">
            <Link to='/' className="hidden md:block text-xl font-medium hover:text-primary">
              Sign In
            </Link>
            <button className="text-xl text-white bg-purple-700 px-2 py-3 font-semibold rounded-md">Get Started</button>
          </div>
            </div>
        </header>
    </>
  );
};

export default Navbar;
