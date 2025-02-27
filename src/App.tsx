
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Leaderboard from "./pages/Leaderboard"
import About from "./pages/About"
import Installation from "./pages/Installation"
import FAQ from "./pages/FAQ"

function App() {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Leaderboard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/installation" element={<Installation/>}/>
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
