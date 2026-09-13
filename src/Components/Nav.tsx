import React, { useState } from "react";
import Logo from "../assets/logo-text.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="container mx-auto border-b border-green-500 px-4 py-4">

      <div className="flex items-center justify-between md:hidden">
              <button
        onClick={() => setMenuOpen(!menuOpen)}          className="text-2xl">
          <GiHamburgerMenu />
        </button>

        <img
          src={Logo}
          alt="Logo"
          className="h-10 w-24"
        />

        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-green-500 px-3 py-1">
            Sign In
          </button>

          <button className="rounded-3xl bg-pink-500 px-3 py-1 text-white">
            Sign Up
          </button>
        </div>
          </div>
          
          {menuOpen && (
        <ul className="mt-4 flex flex-col gap-4 border-t border-gray-200 pt-4 md:hidden">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}

  
      <div className="hidden items-center justify-between md:flex">
        <img
          src={Logo}
          alt="Logo"
          className="h-12 w-[104px]"
        />

        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-green-500 px-5 py-2">
            Sign In
          </button>

          <button className="rounded-3xl bg-pink-500 px-5 py-2 text-white">
            Sign Up
          </button>
        </div>
      </div>

    </nav>
  );
};

export default Nav;