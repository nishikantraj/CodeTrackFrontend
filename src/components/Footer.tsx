import { ChevronUp, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/Button";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const scrollToLeaderboard = () => {
    window.dispatchEvent(new Event("scrollToLeaderboard"));
  };
  const scrollToFeature = () => {
    window.dispatchEvent(new Event("scrollToFeature"));
  };

  return (
    <div className="px-6 md:px-14 bg-gradient-to-b from-[#252525] via-[#0c0c0c] to-[#151414] text-white py-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* About */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <h1 className="text-2xl tracking-tight font-bold">CodeChamp</h1>
            <span className="bg-[#2463EB] px-1.5 rounded-3xl text-center text-xs">Beta</span>
          </div>
          <p className="text-[#9CA3AF]">
            Track your coding time, compete with peers, and showcase your dedication with our global leaderboard system. Join thousands of developers improving their skills through friendly competition.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/nishikantraj" target="_blank">
              <Github className="text-[#9CA3AF] hover:text-white cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/nishikant6969/" target="_blank">
              <Linkedin className="text-[#9CA3AF] hover:text-white cursor-pointer" />
            </a>
            <a href="https://x.com/CherryNishikant" target="_blank">
              <Twitter className="text-[#9CA3AF] hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Quick nav */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between lg:w-2/3 gap-6">
          {/* Quick Links */}
          <div>
            <h1 className="text-lg font-semibold">Quick Links</h1>
            <ul className="text-[#9CA3AF] flex flex-col gap-2 py-5">
              <NavLink
                to={""}
                onClick={scrollToLeaderboard}
              >
                <li className="cursor-pointer hover:text-white">Leaderboard</li>
              </NavLink>

              <NavLink
                to={""}
                onClick={scrollToFeature}
              >
                <li className="cursor-pointer hover:text-white">Features</li>
              </NavLink>

              <NavLink
                to={"/about"}
              >
                <li className="cursor-pointer hover:text-white">About Us</li>
              </NavLink>
              
              <NavLink
                to={"/installation"}
              >
                <li className="cursor-pointer hover:text-white">Installation</li>
              </NavLink>
              
              <NavLink
                to={"/faq"}
              >
                <li className="cursor-pointer hover:text-white">FAQs</li>
              </NavLink>
              
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h1 className="text-lg font-semibold">Resources</h1>
            <ul className="text-[#9CA3AF] flex flex-col gap-2 py-5">
              {/* <li className="cursor-pointer hover:text-white">Documentation</li> */}
              <NavLink
                to={"/contact"}
              >
                <li className="cursor-pointer hover:text-white">Support</li>
              </NavLink>
            </ul>
          </div>
          
          {/* Stay updated */}
          <div>
            <h1 className="text-lg font-semibold">Stay Updated</h1>
            <p className="w-full sm:w-52 text-[#9CA3AF]">Subscribe to our newsletter for the latest updates and features.</p>
            <form 
              onSubmit={(e)=>e.preventDefault()}
            className="flex flex-col gap-2 mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white p-2 text-black rounded-lg border-2 focus:border-[#2463EB] focus:outline-none w-full"
              />
              <Button className="cursor-pointer bg-[#2463EB] hover:bg-[#1C4ED8] py-3 text-lg font-medium">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      {/* User Testimony */}
      <div className="border-t border-[#494848] border-b mt-12 flex flex-col gap-5 justify-center items-center pt-4 text-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-xl font-bold">What Our Users Say</h1>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
        <p className="text-[#D1D5DB] w-full sm:w-2/3 italic text-lg">
          "CodeChamp has completely transformed my coding habits. Being able to track my time across different languages and seeing my rank improve has been incredibly motivating. The leaderboard creates a sense of friendly competition that pushes me to be more consistent with my coding practice."
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pb-4">
          <div className="bg-gradient-to-r from-[#6d97db] via-[#224cc9] to-[#0f19aa] p-3 rounded-full font-bold">AD</div>
          <div>
            <h3 className="font-bold">Adarsh Patel</h3>
            <div className="flex text-sm text-[#D1D5DB] gap-1">
              <p>SDE</p>
              <p>&#8226;</p>
              <p>Morphic</p>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="flex flex-col sm:flex-row text-sm justify-between pt-6 text-center sm:text-left">
        <p className="text-[#9CA3AF]">© 2023 CodeChamp. All rights reserved.</p>
        
        <ul className="text-[#9CA3AF] flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4 sm:mt-0">
          <NavLink
            to={"/privacy"}
          >
            <li className="cursor-pointer hover:text-white">Privacy Policy</li>
          </NavLink>

          <NavLink
            to={"/contact"}
          >
            <li className="cursor-pointer hover:text-white">Contact Us</li>
          </NavLink>

        </ul>
      </div>

      <div className="w-full flex justify-center py-3">
        <div className="bg-[#2d2a2a] p-1 rounded-full w-8 h-8 flex justify-center items-center hover:bg-[#404040]">
          <Link
            to={""} 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <ChevronUp/>
          </Link>
        </div>
        </div>
    </div>
  );
};

export default Footer;
