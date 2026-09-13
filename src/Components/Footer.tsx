
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={Logo} alt="Dev Stack" className="h-10 w-auto" />

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Build your developer stack with the right technologies and tools
              for your journey.
            </p>

            <div className="mt-5 flex gap-4">
              <FaGithub className="text-xl text-gray-500" />
              <FaTwitter className="text-xl text-gray-500" />
              <FaLinkedin className="text-xl text-gray-500" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Product</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>Technologies</li>
              <li>Projects</li>
              <li>Features</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Company</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Legal</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500 md:flex md:items-center md:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="mt-3 flex justify-center gap-5 md:mt-0">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;