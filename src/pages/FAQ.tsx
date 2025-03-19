import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    question: "What is Codetracker?",
    answer: "Codetracker is a VS Code extension that helps developers track their coding activity, monitor time spent per language, and compete on a leaderboard.",
  },
  {
    question: "How does Codetracker track my coding time?",
    answer: "Codetracker logs your active coding time within VS Code by detecting file edits and activity duration.",
  },
  {
    question: "Is my data private?",
    answer: "Yes! Codetracker only tracks the time spent coding—it does not store or access your code files. Your session key ensures only you can access your coding activity.",
  },
  {
    question: "Do I need to create an account?",
    answer: "Yes, you need to sign up to get a unique session key that links your VS Code activity to your Codechamp profile.",
  },
  {
    question: "Is Codetracker free to use?",
    answer: "Yes! Codetracker is completely free, and you can start using it right away.",
  },
  {
    question: "Where can I see my coding stats?",
    answer: "You can view your stats and leaderboard ranking on the Codechamp website after logging in.",
  },
];

export default function FAQ() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frequently Asked Questions", "Get Answers Instantly"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full py-12 mt-20 overflow-hidden text-white px-4 md:px-6 lg:px-8 bg-[#171717] pb-20">
      
      {/* Hero Section with Typed.js */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          <span ref={typedRef}></span>
        </h1>
        <p className="text-base md:text-lg text-[#D1D5DB] mt-4 px-2">
        Find answers to common questions about CodeChamp and how it helps track your coding journey.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-8 md:mt-12 space-y-4 md:space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#262626] border-none shadow-md p-4 md:p-6 rounded-lg">
            <button
              className="flex justify-between items-center w-full text-left text-base md:text-lg font-semibold cursor-pointer pb-1"
              onClick={() => toggleFAQ(index)}
            >
              <span className="pr-2">{faq.question}</span>
              {openIndex === index ? <ChevronUp className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />}
            </button>
            {openIndex === index && <p className="text-gray-300 mt-2 pt-2 border-t border-[#404040] text-sm md:text-base">{faq.answer}</p>}
          </div>
        ))}

        <div className="bg-[#181D2E] flex flex-col justify-center items-center gap-3 md:gap-4 py-4 px-3 md:px-4 rounded-xl mt-6 md:mt-8">
          <h3 className="text-lg md:text-xl font-bold text-center">Still Have Questions?</h3>
          <p className="text-[#D1D5DB] text-base md:text-lg text-center">Can't find the answer you're looking for? Please contact our friendly support team.</p>
          <NavLink
            to={"/contact"}
          >
            <Button className="cursor-pointer bg-[#2463EB] hover:bg-[#1C4ED8] text-sm py-4 md:py-6 mt-1">Contact Support</Button>
          </NavLink>
        </div>
      </div>
      
    </div>
  );
}