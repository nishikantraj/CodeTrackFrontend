import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Button } from "@/components/ui/Button";
import { Card} from "@/components/ui/Card";
import { CheckCircle, LineChart, Users, Clock } from "lucide-react";
// import codingImg from "../assets/coding.png";
import person from '../assets/language/person.png'

export default function About() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Track Your Code", "Analyze Your Progress", "Compete & Improve"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="bg-[#102A26] text-[#F4E285] min-h-screen px-6 py-12 rounded-lg">
      
      {/* Hero Section with Typed.js */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-[#A7D7C5]">
          <span ref={typedRef}></span>
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Codetracker helps developers track their coding activity, analyze time spent per language, and stay motivated by competing with others.
        </p>
        <img src={person} alt="Codetracker Overview" className="mx-auto mt-6 w-24 rounded-lg shadow-lg" />
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <Card className="bg-[#1B4332] border-none shadow-md p-6 text-center">
          <Clock className="text-[#A7D7C5] w-12 h-12 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Automated Tracking</h3>
          <p className="text-gray-300 mt-2">Codetracker automatically records your coding time and activity inside VS Code.</p>
        </Card>

        <Card className="bg-[#1B4332] border-none shadow-md p-6 text-center">
          <LineChart className="text-[#A7D7C5] w-12 h-12 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Detailed Insights</h3>
          <p className="text-gray-300 mt-2">Monitor your most-used programming languages and analyze coding trends.</p>
        </Card>

        <Card className="bg-[#1B4332] border-none shadow-md p-6 text-center">
          <Users className="text-[#A7D7C5] w-12 h-12 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Leaderboard Competition</h3>
          <p className="text-gray-300 mt-2">Compare your coding stats with developers worldwide and climb the leaderboard.</p>
        </Card>

        <Card className="bg-[#1B4332] border-none shadow-md p-6 text-center">
          <CheckCircle className="text-[#A7D7C5] w-12 h-12 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Stay Consistent</h3>
          <p className="text-gray-300 mt-2">Track daily, weekly, and monthly progress to maintain coding consistency.</p>
        </Card>

      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <a href="https://marketplace.visualstudio.com/items?itemName=Nishikant.codetrackerextension" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#A7D7C5] text-[#102A26] font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-[#8CC3B3] transition cursor-pointer">
            Install Codetracker Extension 🚀
          </Button>
        </a>
      </div>

    </div>
  );
}
