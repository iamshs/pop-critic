import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-neutral-800 mt-10 grid place-items-center p-6">
      <div className="flex items-center justify-between lg:w-[15%] w-[60%] ">
        <Link to={'/'} className="text-white hover:text-amber-400 ">
          <FaTiktok size={25} />
        </Link >
        <Link to={'/'} className="text-white hover:text-amber-400 ">
          <FiInstagram size={30} />
        </Link >
        <Link to={'/'} className="text-white hover:text-amber-400 ">
          <AiOutlineFacebook size={30} />
        </Link >
        <Link to={'/'} className="text-white hover:text-amber-400 ">
          <AiOutlineLinkedin size={30} />
        </Link >
        <Link to={'/'} className="text-white hover:text-amber-400 ">
          <FiTwitter size={30} />
        </Link >
      </div>
      <div className="text-2xl my-10 text-white  grid lg:grid-cols-5 md:grid-cols-4 gap-4 underline" >
       
          <ExternalLink className='hover:text-blue-500' href="https://play.google.com/store/apps/details?id=com.imdb.mobile" >Get the App</ExternalLink>
          <Link to={'/'} className='hover:text-blue-500' >Help</Link>
          <Link to={'/'} className='hover:text-blue-500'>About Us</Link>
          <Link to={'/'} className='hover:text-blue-500'>Contact</Link>
          <Link to={'/'} className='hover:text-blue-500'>Developer</Link>
          <Link to={'/'} className='hover:text-blue-500'>Press Room</Link>
          <Link to={'/'} className='hover:text-blue-500'>Privacy Policy</Link>
          <Link to={'/'} className='hover:text-blue-500'>Conditions of Use</Link>
          
       
      </div>
      <div className=" text-white text-center ">
        Copyright <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> {year}
        <span className=" font-bold text-amber-400 text-xl mx-2 ">PopCritic</span>
      </div>
    </footer>
  );
};

export default Footer;
