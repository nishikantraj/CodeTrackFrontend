import { useEffect, useRef } from "react";
import LandingPage from "./LandingPage";
import Leaderboard from "./Leaderboard";
import Feature from "./Feature";

const Home = () => {
  const leaderboardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const handleScrollToLeaderboard = () => {
      if (leaderboardRef.current && headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const offset = headerHeight + 100;
        const topPosition = leaderboardRef.current.getBoundingClientRect().top + window.scrollY - offset;
        
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    };

    const handleScrollToFeature = () => {
      if (featureRef.current && headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const offset = headerHeight + 40;
        const topPosition = featureRef.current.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    };

    window.addEventListener("scrollToLeaderboard", handleScrollToLeaderboard);
    window.addEventListener("scrollToFeature", handleScrollToFeature);

    return () => {
      window.removeEventListener("scrollToLeaderboard", handleScrollToLeaderboard);
      window.removeEventListener("scrollToFeature", handleScrollToFeature); // Cleanup
    };
  }, []);

  return (
    <div>
      <div ref={headerRef} />

      <LandingPage />

      <div ref={leaderboardRef}>
        <Leaderboard />
      </div>

      {/* Attach ref to Feature */}
      <div ref={featureRef}>
        <Feature />
      </div>
    </div>
  );
};

export default Home;
