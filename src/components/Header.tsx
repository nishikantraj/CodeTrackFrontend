import { Button } from "./ui/Button"
import logo from '../assets/image/codetracker-Photoroom.png'
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="cursor-pointer">
        <Link to={""}><img src={logo} alt="CodeTracker" className="cursor-pointer" width={150} height={125}/></Link>
      </div>

    <div className="flex">
      <ul className="flex gap-14 justify-center items-center">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300 underline" : "hover:text-yellow-200"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-300 underline" : "hover:text-yellow-200"}>
          About
        </NavLink>
        <NavLink to="/installation" className={({ isActive }) => isActive ? "text-yellow-300 underline" : "hover:text-yellow-200"}>
          Installation
        </NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? "text-yellow-300 underline" : "hover:text-yellow-200"}>
          FAQ's
        </NavLink>
      </ul>
    </div>

      <div className="flex gap-4 justify-center items-center">
        <Button 
        variant={"default"}
        className="bg-blue-400 cursor-pointer"
        >
          Signin
        </Button>

        <Button 
        variant={"default"}
        className="bg-orange-400 cursor-pointer"
        >
          Signup
        </Button>
      </div>
    </div>
  )
}

export default Header