import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const LandingPage = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
      const typed = new Typed(typedRef.current, {
        strings: ['Track Your Coding Progress with <span style="color: #FDE047;">CodeChamp</span>',
      'Level Up Your Coding Skills with <span style="color: #FDE047;">CodeChamp</span>',
      'Track. Compete. Dominate. <span style="color: #FDE047;">CodeChamp</span> Awaits.'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
      });
  
      return () => typed.destroy();
    }, []);
  return (
    <div className="min-h-screen w-full py-8 mt-20 overflow-hidden text-white px-4 md:px-6 lg:px-8">
      {/* Top card */}
      <div className="flex flex-wrap flex-col lg:flex-row items-center md:items-center lg:justify-center lg:items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col text-center md:text-center lg:justify-center ">
          <div className="h-44 md:h-[16rem] lg:h-[16.5rem] flex items-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-full lg:w-5/6">
              <span ref={typedRef}></span>
            </h1>
          </div>

          <p className="text-white mt-4 w-full md:w-4/5 tracking-tight text-base sm:text-lg md:text-xl">
            Monitor your coding hours, compare with others, and earn prestigious badges based on your dedication and skill level.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3 items-center sm:items-start md:items-start md:justify-start justify-center w-full">
            <Button className="w-full sm:w-auto text-white cursor-pointer font-bold bg-[#3868e9] hover:bg-[#1C4ED8] px-6 md:px-9 py-3 md:py-4 lg:py-6 hover:-translate-y-0.5 transition duration-300">
              View Leaderboard
            </Button>
            <Button className="w-full sm:w-auto text-white cursor-pointer font-bold hover:bg-[#FFFFFF] border border-white hover:text-[#1C4ED8] px-6 md:px-9 py-3 md:py-4 lg:py-6 hover:-translate-y-0.5 transition duration-300">
              Get Started
            </Button>
          </div>

          <div className="flex mt-6 md:mt-8 flex-col sm:flex-row text-center sm:text-left items-center sm:items-center md:items-center md:justify-start justify-center w-full lg:items-center">
            <div className="flex">
              <div className="border-2 font-semibold text-xs border-white w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#60A5FA] flex items-center justify-center">NS</div>
              <div className="relative font-semibold text-xs right-2 border-2 border-white w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#22C55D] flex items-center justify-center">AD</div>
              <div className="relative font-semibold text-xs right-4 border-2 border-white w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#EBB309] flex items-center justify-center">TD</div>
              <div className="relative font-semibold text-xs right-6 border-2 border-white w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#EF4444] flex items-center justify-center">RK</div>
            </div>
            <div className="flex justify-center items-center">
              <p className="mt-3 sm:mt-0 sm:ml-4 text-sm sm:text-base text-white">
                Join <span className="font-bold">50+</span> developers tracking their coding time
              </p>
            </div>
          </div>
        </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 py-8 md:py-0 flex justify-center md:justify-end p-4 md:p-6">
        <div className="absolute inset-0 overflow-visible pointer-events-none">
          <div className="absolute top-0 left-1/4 sm:left-40 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-br from-yellow-300 via-transparent to-transparent rounded-full blur-3xl"></div>
          {/* Made gradient positioning and size responsive */}
          <div className="absolute bottom-0 right-0 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-tl from-blue-500 via-transparent to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Main Card */}
        <Card className="relative w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#262626] border-none overflow-hidden">
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-base sm:text-lg">Top Coders This Week</h1>
                <span className="text-xs bg-[#2c3c73] px-2 sm:px-3 py-0.5 rounded-md text-[#84ace1]">LIVE</span>
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-4 sm:gap-5 relative z-10 px-3 sm:px-6">
            {/* Top Coder 1 */}
            <div className="h-auto py-2 sm:py-3 bg-[#404040] rounded-lg flex justify-between gap-2 px-2 sm:px-3 items-center">
              {/* Added padding and made height auto with padding instead */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#2463EB] flex justify-center items-center font-bold text-sm sm:text-base">1</div>
              {/* Adjusted size for smaller screens and text size */}
              <div className="flex-1 h-3/4">
                <div>
                  <div className="flex gap-1 sm:gap-2 items-center flex-wrap">
                    {/* Added flex-wrap and adjusted gap */}
                    <h1 className="text-base sm:text-lg font-bold">Nishikant</h1>
                    {/* Adjusted text size */}
                    <span className="text-xs sm:text-sm bg-[#533F2F] text-[#FDE047] px-1 sm:px-2 rounded-md text-center">Legendary</span>
                    {/* Adjusted padding and text size */}
                  </div>
                  <div className="flex mb-1 text-[#989FAB] text-xs gap-0.5 items-center font-medium">
                    <p>JavaScript</p>
                    <p>&#8226;</p>
                    <p>148 hours this week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Coder 2 */}
            <div className="h-auto py-2 sm:py-3 bg-[#404040] rounded-lg flex justify-between gap-2 px-2 sm:px-3 items-center">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#3C82F6] flex justify-center items-center font-bold text-sm sm:text-base">2</div>
              <div className="flex-1 h-3/4">
                <div>
                  <div className="flex gap-1 sm:gap-2 items-center flex-wrap">
                    <h1 className="text-base sm:text-lg font-bold">Adarsh</h1>
                    <span className="text-xs sm:text-sm bg-[#2C3656] text-[#a7bcfe] px-1 sm:px-2 rounded-md text-center">GrandMaster</span>
                  </div>
                  <div className="flex mb-1 text-[#989FAB] text-xs gap-0.5 items-center font-medium">
                    <p>TypeScript</p>
                    <p>&#8226;</p>
                    <p>140 hours this week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Coder 3 */}
            <div className="h-auto py-2 sm:py-3 bg-[#404040] rounded-lg flex justify-between gap-2 px-2 sm:px-3 items-center">
              {/* Added padding and made height auto with padding instead */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#60A5FA] flex justify-center items-center font-bold text-sm sm:text-base">3</div>
              {/* Adjusted size for smaller screens and text size */}
              <div className="flex-1 h-3/4">
                <div>
                  <div className="flex gap-1 sm:gap-2 items-center flex-wrap">
                    {/* Added flex-wrap and adjusted gap */}
                    <h1 className="text-base sm:text-lg font-bold">Truptiman</h1>
                    {/* Adjusted text size */}
                    <span className="text-xs sm:text-sm bg-[#2A4131] text-[#87EFAC] px-1 sm:px-2 rounded-md text-center">MasterCoder</span>
                    {/* Adjusted padding and text size */}
                  </div>
                  <div className="flex mb-1 text-[#989FAB] text-xs gap-0.5 items-center font-medium">
                    <p>Python</p>
                    <p>&#8226;</p>
                    <p>100 hours this week</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center items-center px-3 sm:px-6 pb-3 sm:pb-4">
            <div className="flex items-center border-t border-t-white/30 text-[#4698f0] pt-2 sm:pt-2.5 w-full justify-center hover:text-[#92C5FD] cursor-pointer text-xs sm:text-sm">
              <p>See Full Leaderboard</p>
              <ChevronRight className="h-[12px] w-[12px] sm:h-[15px] sm:w-[15px]" />
            </div>
          </CardFooter>
        </Card>
      </div>
      </div>

      {/* Down card */}
      <div className="flex flex-wrap h-auto justify-center mt-auto py-6 gap-15 ">
        <div className="flex flex-col bg-[#2A2A2A] justify-center items-center p-5 rounded-lg">
          <h1 className="text-4xl font-bold">50+</h1>
          <p className="text-white/50">Active Users</p>
        </div>

        <div className="flex flex-col bg-[#2A2A2A] justify-center items-center p-5 rounded-lg">
          <h1 className="text-4xl font-bold">40+</h1>
          <p className="text-white/50">Programming Languages</p>
        </div>

        <div className="flex flex-col bg-[#2A2A2A] justify-center items-center p-5 rounded-lg">
          <h1 className="text-4xl font-bold">10k+</h1>
          <p className="text-white/50">Hours Tracked</p>
        </div>

        <div className="flex flex-col bg-[#2A2A2A] justify-center items-center p-5 rounded-lg">
          <h1 className="text-4xl font-bold">99%</h1>
          <p className="text-white/50">Accuracy Rate</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;