import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#292929] text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <p className="mt-2 text-center md:text-left">
              Design made by Shaquille Ndunda.
              <a
                href="https://www.linkedin.com/in/shaquille-ndunda-b13a95107/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FaLinkedin size={30} />
              </a>
            </p>
          </div>
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-lg font-semibold text-white">My Socials:</h4>
            <ul className="flex flex-wrap md:space-x-4">
              <li>
                <a
                  href="https://linkedin.com/in/joaquin-manzanares-320615239"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/JoaquinManz"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#141414] py-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-center md:text-left">
            &copy;{" "}
            <a href="#" className="text-white">
              Joaquin Manzanares, 2023. All rights reserved.
            </a>
          </p>

          <div className="footer-menu mt-4 md:mt-0">
            <ul className="flex flex-wrap md:space-x-4">
              <li>
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
