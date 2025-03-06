
import { Route, Routes } from "react-router-dom"
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

ReactGA.initialize("G-4D3805M3RW");

function App() {

  useEffect(() => {
    // Send pageview with the current location's path
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Home Page"});
  }, []);

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Leaderboard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/installation" element={<Installation/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/signin" element={<SigninForm/>}/>
          <Route path="/signup" element={<SignupForm/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
