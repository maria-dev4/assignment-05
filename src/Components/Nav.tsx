
import React, { useState } from "react";

import Logo from "../assets/logo-text.png";

import { GiHamburgerMenu } from "react-icons/gi";



const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg2 px-4 py-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between md:hidden">
          <button
            onClick={() => setMenu(!menu)}
            className="text-2xl text-heading">
                      

            <GiHamburgerMenu />
          </button>

          <img
            src={Logo}
            alt="Dev Stack"
            className="h-10 w-32"/>

                  

          <div className="flex items-center gap-2">
            <button className="text-sm text-slate-300 transition-colors hover:text-white">
              Sign In
            </button>

                      
            <button
              className="rounded-full bg-btn1 px-5 py-2 text-sm font-medium text-white shadow-[0_0_18px_rgba(22,135,255,0.35)] transition-all duration-300 hover:bg-btn2 hover:shadow-[0_0_24px_rgba(22,135,255,0.5)]">
              Sign Up
            </button>
          </div>
        </div>

        {menu && (
          <ul className="mt-4 flex flex-col gap-4 border-t border-border pt-4 text-text md:hidden">
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
            alt="Dev Stack"
            className="h-12 w-36"/>
                  


          <ul className="flex items-center gap-8 text-text">
            <li className="text-btn1">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
                  

          <div className="flex items-center gap-3">
            <button className="text-sm text-slate-300 transition-colors hover:text-white">
              Sign In
            </button>

            <button
                className="rounded-full bg-btn1 px-5 py-2 text-sm font-medium text-white shadow-[0_0_18px_rgba(22,135,255,0.35)] transition-all duration-300 hover:bg-btn2 hover:shadow-[0_0_24px_rgba(22,135,255,0.5)]">
                          


                          
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;