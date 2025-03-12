import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { ChevronRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full py-14 mt-20 overflow-hidden text-white px-4 md:px-4">
      {/* Top card */}
      <div className="flex flex-wrap flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 h-auto md:h-[25rem] flex flex-col">
          <div>
            <h1 className="text-white text-4xl md:text-6xl font-bold w-full lg:w-5/6">
              Track Your Coding Progress with <span className="text-[#FDE047]">CodeChamp</span>
            </h1>
          </div>

          <p className="text-white mt-4 w-full md:w-4/5 tracking-tight text-lg md:text-xl">
            Monitor your coding hours, compare with others, and earn prestigious badges based on your dedication and skill level.
          </p>

          <div className="mt-5 flex flex-col md:flex-row gap-3 items-center">
            <Button className="text-white cursor-pointer font-bold bg-[#3868e9] hover:bg-[#1C4ED8] px-6 md:px-9 py-4 md:py-6 hover:-translate-y-0.5 transition duration-300">
              View Leaderboard
            </Button>
            <Button className="text-white cursor-pointer font-bold hover:bg-[#FFFFFF] border border-white hover:text-[#1C4ED8] px-6 md:px-9 py-4 md:py-6 hover:-translate-y-0.5 transition duration-300">
              Get Started
            </Button>
          </div>

          <div className="flex mt-8 items-center flex-col md:flex-row text-center md:text-left">
            <div className="flex">
              <div className="border-2 font-semibold text-xs border-white w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#60A5FA] flex items-center justify-center">NS</div>
              <div className="relative font-semibold text-xs right-2 border-2 border-white w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#22C55D] flex items-center justify-center">AD</div>
              <div className="relative font-semibold text-xs right-4 border-2 border-white w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#EBB309] flex items-center justify-center">TD</div>
              <div className="relative font-semibold text-xs right-6 border-2 border-white w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#EF4444] flex items-center justify-center">RK</div>
            </div>
            <p className="mt-4 md:mt-0 md:ml-4">
              Join <span className="font-bold">50+</span> developers tracking their coding time
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-1/2 mt-6 md:mt-0 flex justify-end items-end">
          {/* Gradient Wrapper - Clipped to Card Size */}
          <div className="absolute inset-0 overflow-visible pointer-events-none">
            <div className="absolute top-0 left-40 w-72 h-72 bg-gradient-to-br from-yellow-300 via-transparent to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-blue-500 via-transparent to-transparent rounded-full blur-3xl"></div>
          </div>

          {/* Main Card */}
          <Card className="relative w-[450px] bg-[#262626] border-none overflow-hidden">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between">
                  <h1 className="font-bold">Top Coders This Week</h1>
                  <span className="text-xs bg-[#2c3c73] px-3 py-0.5 rounded-md text-[#84ace1]">LIVE</span>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-5 relative z-10">
              {/* Top Coder 1 */}
              <div className="h-15 bg-[#404040] rounded-lg flex justify-between gap-2 px-3 items-center">
                <div className="w-11 h-11 rounded-full bg-[#2463EB] flex justify-center items-center font-bold">1</div>
                <div className="flex-1 h-3/4">
                  <div>
                    <div className="flex gap-2 items-center">
                      <h1 className="text-lg font-bold">Nishikant</h1>
                      <span className="text-sm bg-[#533F2F] text-[#FDE047] px-2 rounded-md text-center">Legendary</span>
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
              <div className="h-15 bg-[#404040] rounded-lg flex justify-between gap-2 px-3 items-center">
                <div className="w-11 h-11 rounded-full bg-[#3C82F6] flex justify-center items-center font-bold">2</div>
                <div className="flex-1 h-3/4">
                  <div>
                    <div className="flex gap-2 items-center">
                      <h1 className="text-lg font-bold">Adarsh</h1>
                      <span className="text-sm bg-[#2C3656] text-[#a7bcfe] px-2 rounded-md text-center">GrandMaster</span>
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
              <div className="h-15 bg-[#404040] rounded-lg flex justify-between gap-2 px-3 items-center">
                <div className="w-11 h-11 rounded-full bg-[#60A5FA] flex justify-center items-center font-bold">3</div>
                <div className="flex-1 h-3/4">
                  <div>
                    <div className="flex gap-2 items-center">
                      <h1 className="text-lg font-bold">Truptiman</h1>
                      <span className="text-sm bg-[#2A4131] text-[#87EFAC] px-2 rounded-md text-center">MasterCoder</span>
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

            <CardFooter className="flex justify-center items-center">
              <div className="flex items-center border-t border-t-white/30 text-[#4698f0] pt-2.5 w-full justify-center hover:text-[#92C5FD] cursor-pointer text-sm">
                <p>See Full Leaderboard</p>
                <ChevronRight className="h-[15px] w-[15px]" />
              </div>
            </CardFooter>
          </Card>
        </div>

      </div>

      {/* Down card */}
      <div className="flex h-auto justify-center mt-10 py-10 gap-15">
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