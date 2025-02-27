import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle, Download, UserPlus } from "lucide-react";
import code from '../assets/language/code.png'
import geek from '../assets/language/geek.png'
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Installation() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Install Codetracker", "Track your coding", "Compete with others"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="bg-[#102A26] text-[#F4E285] min-h-screen px-6 py-12 rounded-lg">

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-[#A7D7C5]">
          <span ref={typedRef}></span>
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Follow these steps to set up and start using CodeTracker.
        </p>
        <img src={geek} alt="CodeTracker Extension" className="mx-auto mt-6 w-24 rounded-lg shadow-lg" />
      </div>

      {/* Installation Steps */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <Card className="bg-[#1B4332] border-none shadow-md p-6 text-center">
          <UserPlus className="text-[#A7D7C5] w-12 h-12 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Step 1: Sign Up & Get Your Session Key</h3>
          <p className="text-gray-300 mt-2">Visit CodeTracker and create an account. A unique session key will be generated for you to link your VS Code activity.</p>
        </Card>

        <Card className="bg-[#1B4332] border-none shadow-md p-6 text-center">
          <Download className="text-[#A7D7C5] w-12 h-12 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Step 2: Install the VS Code Extension</h3>
          <p className="text-gray-300 mt-2">Open VS Code, search for "CodeTrackerExtension" in the Extensions Marketplace, and install it.</p>
        </Card>

        <Card className="bg-[#1B4332] border-none shadow-md p-6 text-center">
          <img src={code} alt="Session Key Setup" className="w-16 h-16 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Step 3: Configure the Extension</h3>
          <p className="text-gray-300 mt-2">Open the CodeTracker extension in VS Code and enter your session key to link your activity.</p>
        </Card>

        <Card className="bg-[#1B4332] border-none shadow-md p-6 text-center">
          <CheckCircle className="text-[#A7D7C5] w-12 h-12 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Step 4: Start Coding</h3>
          <p className="text-gray-300 mt-2">Your activity will be tracked automatically. Visit the CodeTracker leaderboard to check your stats, compare with others, and analyze your coding habits.</p>
        </Card>

      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <a
          href="https://marketplace.visualstudio.com/items?itemName=Nishikant.codetrackerextension"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#A7D7C5] text-[#102A26] font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-[#8CC3B3] transition cursor-pointer">
            Install CodeTracker Extension 🚀
          </Button>
        </a>
      </div>

    </div>
  );
}
