import { useEffect, useRef } from "react";
import LandingPage from "./LandingPage";
import Feature from "./Feature";

const Home = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {

    const handleScrollToFeature = () => {
      if (featureRef.current && headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const offset = headerHeight + 40;
        const topPosition = featureRef.current.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    };
    window.addEventListener("scrollToFeature", handleScrollToFeature);

    return () => {
      window.removeEventListener("scrollToFeature", handleScrollToFeature); // Cleanup
    };
  }, []);

  return (
    <div>
      <div ref={headerRef} />
        <LandingPage />

      {/* Attach ref to Feature */}
      <div ref={featureRef}>
        <Feature />
      </div>
    </div>
  );
};

export default Home;
