
import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import Leaderboard from "./pages/Leaderboard"
import About from "./pages/About"
import Installation from "./pages/Installation"
import FAQ from "./pages/FAQ"
import SigninForm from "./pages/SigninForm"
import SignupForm from "./pages/SignupForm"
import Contact from "./pages/Contact"
import ReactGA from 'react-ga4';
import { useEffect } from "react"
import ScrollTop from "./components/ScrollTop"
import PrivacyPolicy from "./pages/PrivacyPolicy"

ReactGA.initialize("G-4D3805M3RW");

function App() {

  const location = useLocation();
  
  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search,
      title: document.title
    });
  }, [location]);

  return (
    <div>
      <Layout>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<Leaderboard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/installation" element={<Installation/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/signin" element={<SigninForm/>}/>
          <Route path="/signup" element={<SignupForm/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/privacy" element={<PrivacyPolicy/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
