import { Button } from "@/components/ui/Button";
import { ChartPie, Globe, ShieldCheck, Zap, UsersRound, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Typed from "typed.js";

export default function About() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["About CodeChamp"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="min-h-screen w-full py-8 mt-20 overflow-hidden text-white px-4 md:px-6 lg:px-8 bg-[#171717]">

      <div className="px-4 sm:px-6 md:px-12">
        {/* Title */}
        <div className="flex flex-col justify-center items-center pt-10 py-5">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span ref={typedRef}></span>
          </h2>
          <p className="text-center text-[#D1D5DB] w-full sm:w-4/5 md:w-3/5 pt-4 text-base md:text-lg">Codechamp helps developers track their coding activity, analyze time spent per language, and stay motivated by competing with others.</p>
        </div>
        {/* Story and mission */}
        <div className="flex flex-col lg:flex-row py-10 gap-8 lg:gap-12">
          {/* story */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 py-4">
            <h3 className="text-2xl font-semibold">Our Story</h3>
            <div className="flex flex-col gap-4 text-sm md:text-base">
              <p>CodeChamp was born from a simple question: "How can we help developers understand and improve their coding habits?" We realized that while there were tools to track productivity, nothing really captured the dedication and consistency that great coders demonstrate day after day.</p>
              <p>Founded in 2025, CodeChamp grew from a simple tracking tool to a comprehensive platform celebrating coding excellence through objective metrics and healthy competition. This was accomplished by me, with constant helpful advice and suggestions from a friend.</p>
              <p>Today, our community includes over 50+ active developers who use CodeChamp to track their progress, set goals, and connect with like-minded coders around the world.</p>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6">
              {/* 1 */}
              <div className="flex gap-3 justify-center items-center">
                <div className="bg-[#19213A] w-12 h-12 rounded-full flex justify-center items-center">
                  <UsersRound className="text-[#4393f4]"/>
                </div>
                <div>
                  <p className="font-bold">50+</p>
                  <p className="text-[#D1D5DB] text-sm">Active Users</p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex gap-3 justify-center items-center">
                <div className="bg-[#18291E] w-12 h-12 rounded-full flex justify-center items-center">
                  <ChartPie className="text-[#4BDE80]"/>
                </div>
                <div>
                  <p className="font-bold">10k+</p>
                  <p className="text-[#D1D5DB] text-sm">Hours Tracked</p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex gap-3 justify-center items-center">
                <div className="bg-[#2B1939] w-12 h-12 rounded-full flex justify-center items-center">
                  <Globe className="text-[#C085FC]"/>
                </div>
                <div>
                  <p className="font-bold">10+</p>
                  <p className="text-[#D1D5DB] text-sm">countries</p>
                </div>
              </div>
            </div>
          </div>

          {/* mission */}
          <div className="bg-[#262626] w-full lg:w-1/2 rounded-xl py-4 px-6 flex flex-col gap-6">
            <div className="">
              <h1 className="text-2xl font-semibold">Our Mission</h1>
            </div>
            <p className="text-[#D1D5DB] text-sm md:text-base">
              At CodeChamp, we believe that great coding habits lead to exceptional software developers. Our mission is threefold:
            </p>

            <div className="flex gap-6 flex-col">

              <div className="flex gap-3">
                <div className="bg-[#2463EB] w-12 h-12 p-3 rounded-lg flex justify-center items-center"><ShieldCheck/></div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">Visibility & Awareness</h3>
                  <p className="text-[#D1D5DB] text-sm md:text-base">Help developers understand their coding patterns through accurate tracking and insightful analytics.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-[#2463EB] w-12 h-12 p-3 rounded-lg flex justify-center items-center"><Zap/></div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">Motivation & Progress</h3>
                  <p className="text-[#D1D5DB] text-sm md:text-base">Foster healthy competition and goal-setting to encourage consistent improvement and learning.</p>
                </div>   
              </div>

              <div className="flex gap-3">
                <div className="bg-[#2463EB] w-12 h-12 p-3 rounded-lg flex justify-center items-center"><Users/></div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">Community & Recognition</h3>
                  <p className="text-[#D1D5DB] text-sm md:text-base">Build a supportive network of developers and celebrate coding excellence through our ranking system.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-[#262626] flex flex-col justify-center items-center rounded-xl">
          <h1 className="text-2xl font-bold py-8">Our Team</h1>

          <div className="flex flex-col md:flex-row justify-around p-6 gap-8 md:gap-4">
            {/* 1 */}
            <div className="flex flex-col justify-center items-center gap-4 pb-4">
              <div className="bg-gradient-to-r from-[#896ee4] via-[#6724d3] to-[#460195] p-3 rounded-full font-bold w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex justify-center items-center">
                <h4 className="text-2xl sm:text-3xl md:text-4xl">NK</h4>
              </div>
              <div className="flex justify-center flex-col items-center">
                <h3 className="font-bold text-lg">Nishikant</h3>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <p className="text-[#60A5FA]">Founder & CEO</p>
                  <p className="text-center w-full sm:w-2/3 text-sm text-[#D1D5DB]">Full-stack developer with 1+ years of experience in productivity tools.</p>
                </div>
              </div>
            </div>  

            {/* 2 */}
            <div className="flex flex-col justify-center items-center gap-4 pb-4">
              <div className="bg-gradient-to-r from-[#6d97db] via-[#224cc9] to-[#0f19aa] p-3 rounded-full font-bold w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex justify-center items-center">
                <h4 className="text-2xl sm:text-3xl md:text-4xl">AD</h4>
              </div>
              <div className="flex justify-center flex-col items-center">
                <h3 className="font-bold text-lg">Adarsh Patel</h3>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <p className="text-[#60A5FA]">Advisor</p>
                  <p className="text-center w-full sm:w-2/3 text-sm text-[#D1D5DB]">Full-stack developer with 3+ years of experience in productivity tools.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="py-8 flex justify-center">
          <NavLink
            to={"/installation"}
          >
            <Button className="text-white cursor-pointer font-semibold bg-[#3868e9] hover:bg-[#1C4ED8] px-4 py-4 md:py-6 text-base sm:text-lg md:text-xl">
              Learn How to Get Started
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}