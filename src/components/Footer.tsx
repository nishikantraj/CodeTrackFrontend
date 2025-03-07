import {  NavLink } from 'react-router-dom';
import logo from '../assets/image/codechamp.png'
import { Button } from "./ui/Button"

const Footer = () => {
    return (
      <div className="bg-black text-white px-6 py-6 mt-10 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0 flex flex-col items-center">
            <img src={logo} alt="CodeTracker" className="cursor-pointer w-32 brightness-125 contrast-110 mx-auto md:mx-0" />

            <p className="text-xs mb-5 pl-2">Copyright © 2025</p>
          </div>
  
          <div className="flex flex-col md:flex-row gap-6 text-sm text-center">
            <span className="hover:text-green-300 cursor-pointer">
              <NavLink to={""}><span className="hover:text-green-300 cursor-pointer">Home</span></NavLink>
            </span>
            <span className="hover:text-green-300 cursor-pointer">
              <NavLink to={"installation"}><span className="hover:text-green-300 cursor-pointer">How it works</span></NavLink>
            </span>
            <span className="hover:text-green-300 cursor-pointer">
              <NavLink to={"about"}><span className="hover:text-green-300 cursor-pointer">About us</span></NavLink>
            </span>
            <span className="hover:text-green-300 cursor-pointer">
              <NavLink to={"privacy"}><span className="hover:text-green-300 cursor-pointer">Privacy policy</span></NavLink>
            </span>
          </div>
  
          <NavLink to={"/contact"}>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer mt-4 md:mt-0">Contact us</Button>
          </NavLink>
        </div>
  
        <div className="border-t border-gray-700 mt-6 pt-4 flex justify-center gap-6">
          <a href="https://x.com/CherryNishikant" target='_blank'>
            <svg className="w-6 h-6 text-blue-400 cursor-pointer hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
          </a>

          <a href="https://github.com/nishikantraj" target='_blank'>
            <svg className="w-6 h-6 text-white cursor-pointer hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
          </a>

          <a href="https://www.linkedin.com/in/nishikant6969/" target='_blank'>
            <svg className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
        </div>
      </div>
    );
  };
  
  export default Footer;
