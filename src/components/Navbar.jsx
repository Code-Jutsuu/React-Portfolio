import React from 'react';
import { DiCssdeck } from 'react-icons/di'; 
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="w-4/5 px-1 flex justify-start items-center no-underline sm:px-0">
        <a className="flex items-center text-white mb-5 cursor-pointer">
          <DiCssdeck size="3rem" />
          <span className="ml-2">Portfolio</span> 
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white"> 
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaTwitter /> 
      </div>
    </nav>
  );
}

export default Navbar;
