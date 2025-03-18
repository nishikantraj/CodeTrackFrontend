import { Button } from "@/components/ui/Button";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Typed from "typed.js";

export default function Installation() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Getting Started with CodeChamp", "Install Codetracker", "Track your coding", "Compete with others"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="min-h-screen w-full py-8 mt-20 overflow-hidden text-white px-4 md:px-6 lg:px-8 bg-[#171717] pb-20">

      <div className="px-4 sm:px-6 md:px-12 flex flex-col gap-6">
        {/* Title */}
        <div className="flex flex-col justify-center items-center pt-10 py-5">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span ref={typedRef}></span>
          </h2>
          <p className="text-center text-[#D1D5DB] w-full sm:w-4/5 md:w-3/5 pt-4 text-base md:text-lg">Follow these simple steps to start tracking your coding time and join our global leaderboard.</p>
        </div>

        {/* steps */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center py-6">

            <div className="bg-[#262626] w-full md:w-5/12 lg:w-1/3 rounded-xl flex flex-col gap-4 py-6">
              <div className="flex justify-center">
                <span className="font-bold text-2xl bg-[#2463EB] w-14 h-14 rounded-full flex justify-center items-center">1</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="text-xl font-semibold text-center px-4">Sign Up & Get Your Session Key</h3>
                <p className="text-center w-4/5 text-[#D1D5DB]">Visit Codechamp and create an account. A unique session key will be generated for you to link your VS Code activity.</p>
                <div className="flex justify-center">
                  <NavLink
                    to={"/signup"}
                  >
                    <Button className="text-white cursor-pointer bg-[#3868e9] hover:bg-[#1C4ED8] text-sm">
                      Sign Up Now
                    </Button>
                  </NavLink>
                </div>
              </div>  
            </div>

            <div className="bg-[#262626] w-full md:w-5/12 lg:w-1/3 rounded-xl flex flex-col gap-4 py-6">
              <div className="flex justify-center">
                <span className="font-bold text-2xl bg-[#2463EB] w-14 h-14 rounded-full flex justify-center items-center">2</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="text-xl font-semibold text-center px-4">Install the VS Code Extension</h3>
                <p className="text-center w-4/5 text-[#D1D5DB]">Open VS Code, search for "CodeTrackerExtension" in the Extensions Marketplace, and install it.</p>
                <div className="flex justify-center">
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=Nishikant.codetrackerextension"
                    target="_blank"
                  >
                    <Button className="text-white cursor-pointer bg-[#404040] hover:bg-[#525252] text-sm">
                      Download Plugin
                    </Button>
                  </a>
                </div>
              </div>  
            </div>
            
            <div className="bg-[#262626] w-full md:w-5/12 lg:w-1/3 rounded-xl flex flex-col gap-4 py-6">
              <div className="flex justify-center">
                <span className="font-bold text-2xl bg-[#2463EB] w-14 h-14 rounded-full flex justify-center items-center">3</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="text-xl font-semibold text-center px-4">Configure the Extension</h3>
                <p className="text-center w-4/5 text-[#D1D5DB]">Open the CodeTracker extension in VS Code and enter your session key to link your activity.</p>
              </div>  
            </div>

            <div className="bg-[#262626] w-full md:w-5/12 lg:w-1/3 rounded-xl flex flex-col gap-4 py-6">
              <div className="flex justify-center">
                <span className="font-bold text-2xl bg-[#2463EB] w-14 h-14 rounded-full flex justify-center items-center">4</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="text-xl font-semibold text-center px-4">Start Coding!</h3>
                <p className="text-center w-4/5 text-[#D1D5DB]">Our extension automatically tracks your coding time while you work on your projects.</p>
              </div>
              <div className="flex justify-center mt-4">
                <NavLink
                  to={"/leaderboard"}
                >
                  <Button className="text-white cursor-pointer bg-[#404040] hover:bg-[#525252] text-sm">
                    View Leaderboard
                  </Button>
                </NavLink>
              </div>
            </div>

        </div>

        <div className="bg-gradient-to-r from-[#1D4DD7] via-[#2C3FBC] to-[#3631A4] flex flex-col justify-center items-center gap-6 py-12 px-4 rounded-xl">
          <h3 className="text-3xl font-bold text-center">Ready to Start Your Coding Journey?</h3>
          <p className="text-[#D1D5DB] text-lg text-center">Join thousands of developers tracking their progress and improving their skills with CodeChamp.</p>
          <NavLink
            to={"/signup"}
          >
            <Button className="cursor-pointer bg-[#FFFFFF] hover:bg-[#EFF6FF] text-[#2463EB] text-lg py-6">Create Free Account</Button>
          </NavLink>
        </div>

      </div>
    </div>
  );
}