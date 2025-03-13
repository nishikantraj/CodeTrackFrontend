import { useEffect, useRef } from "react";
import LandingPage from "./LandingPage";
import Leaderboard from "./Leaderboard";

const Home = () => {
  const leaderboardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null); // Reference to the header

  useEffect(() => {
    const handleScrollToLeaderboard = () => {
      if (leaderboardRef.current && headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight; // Get header height
        const offset = headerHeight + 100; // Add padding (adjust as needed)
        
        const topPosition = leaderboardRef.current.getBoundingClientRect().top + window.scrollY - offset;
        
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    };

    window.addEventListener("scrollToLeaderboard", handleScrollToLeaderboard);
    return () => {
      window.removeEventListener("scrollToLeaderboard", handleScrollToLeaderboard);
    };
  }, []);

  return (
    <div>
      {/* Add ref to the header (optional, if you want to get its height dynamically) */}
      <div ref={headerRef} />

      <LandingPage />

      {/* Attach ref to Leaderboard */}
      <div ref={leaderboardRef}>
        <Leaderboard />
      </div>
    </div>
  );
};

export default Home;
