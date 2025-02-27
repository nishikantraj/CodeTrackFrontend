import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    answer: "Yes, you need to sign up to get a unique session key that links your VS Code activity to your Codetracker profile.",
  },
  {
    question: "Is Codetracker free to use?",
    answer: "Yes! Codetracker is completely free, and you can start using it right away.",
  },
  {
    question: "Where can I see my coding stats?",
    answer: "You can view your stats and leaderboard ranking on the Codetracker website after logging in.",
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
    <div className="bg-[#102A26] text-[#F4E285] min-h-screen px-6 py-12 rounded-lg">
      
      {/* Hero Section with Typed.js */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-[#A7D7C5]">
          <span ref={typedRef}></span>
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Have questions about Codetracker? Here are the answers to some common queries.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-12 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#1B4332] border-none shadow-md p-6 rounded-lg">
            <button
              className="flex justify-between items-center w-full text-left text-lg font-semibold text-[#A7D7C5]"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
            {openIndex === index && <p className="text-gray-300 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <a href="https://marketplace.visualstudio.com/items?itemName=Nishikant.codetrackerextension" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#A7D7C5] text-[#102A26] font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-[#8CC3B3] transition cursor-pointer">
            Get Started with Codetracker 🚀
          </button>
        </a>
      </div>

    </div>
  );
}
