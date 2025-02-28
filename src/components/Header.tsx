import { Button } from "./ui/Button"
import logo from '../assets/image/codetracker-Photoroom.png'
import { Link, NavLink } from "react-router-dom"


const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-md">
      <div className="cursor-pointer">
        <Link to={""}>
          <img src={logo} alt="CodeTracker" className="cursor-pointer" width={150} height={125} />
        </Link>
      </div>

      <div className="flex">
        <ul className="flex gap-10 justify-center items-center text-lg">
          <NavLink to={""} className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-300")}>Home</NavLink>
          <NavLink to={"about"} className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-300")}>About</NavLink>
          <NavLink to={"installation"} className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-300")}>Installation</NavLink>
          <NavLink to={"faq"} className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-300")}>FAQ's</NavLink>
        </ul>
      </div>

      <div className="flex gap-4">
        <NavLink to={"signin"}>
          <Button className="bg-green-500 text-black hover:bg-green-600 cursor-pointer">Signin</Button>
        </NavLink>
        
        <NavLink to={"signup"}>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer">Signup</Button>
        </NavLink>
        
      </div>
    </div>
  );
};

export default Header;