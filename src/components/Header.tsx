import { useState } from "react";
import { Button } from "./ui/Button";
import logo from "../assets/image/codechamp.png";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import profile from "../assets/image/profile.png";
import toast from "react-hot-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/Dropdown";
import axios from "axios";
import BASE_API_URL from "@/utils/config";
import { Copy, Menu, X } from "lucide-react";
import SupportUs from "@/pages/Supportus";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = useAuth();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => toast.success("Session key copied"))
      .catch(() => toast.error("Something went wrong while copying the session key."));
  };

  const handleLogout = async () => {
    try {
      const response = await axios(`${BASE_API_URL}/user/logout`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        toast.success("Successfully Logged out");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } catch (error: any) {
      console.error("Logout failed:", error.response?.data?.message || error.message);
    }
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="w-full overflow-hidden py-2">
        {/* Marquee Banner */}
        <div className="bg-[#FFF7D6] text-[#2C5E1A] p-2 w-full overflow-hidden whitespace-nowrap relative">
          <div className="animate-marquee inline-block">
            <span className="text-lg font-bold">
              🚀 Important Notice: Our backend is fully operational! However, as we're currently on a free-tier Render server, there may be occasional minor delays in API responses. We're working on upgrading to a dedicated server for even better performance. Your support helps keep Codechamp free and growing! ❤️ If you notice any inconsistencies in your tracked timing, please contact us.
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-8 py-4 bg-black text-white shadow-md relative">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="lg:hidden text-white focus:outline-none flex items-center"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <Link to={""} className="flex items-center">
            <img 
              src={logo} 
              alt="CodeTracker" 
              className="cursor-pointer w-32 brightness-125 contrast-110"
            />
          </Link>
        </div>

        <nav 
          className={`
            lg:flex lg:items-center lg:static 
            absolute top-full left-0 w-full 
            bg-black lg:w-auto lg:bg-transparent 
            transition-all duration-300 pl-22
            ${menuOpen ? 'block' : 'hidden'}
          `}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 text-lg p-4 lg:p-0">
            <li>
              <NavLink 
                to={""} 
                className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-300")}
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={"about"} 
                className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-300")}
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={"installation"} 
                className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-300")}
                onClick={closeMobileMenu}
              >
                Installation
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={"faq"} 
                className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-300")}
                onClick={closeMobileMenu}
              >
                FAQ's
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="mr-4">
            <SupportUs/>
          </div>

          {isLoggedIn[0] ? (
            <div className="flex items-center space-x-4">
              <Button 
                className="bg-green-500 text-black hover:bg-green-600 cursor-pointer" 
                onClick={() => handleCopy(isLoggedIn[1]?.sessionKey || "")}
              >
                Session Key
                <span className="pt-1"><Copy/></span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <img 
                    src={profile} 
                    alt={isLoggedIn[1]?.name} 
                    className="w-9 h-9 rounded-full border-2 border-[#3DDC97] cursor-pointer"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-[#0D1117] border border-[#3DDC97] text-white shadow-lg rounded-lg">
                  <DropdownMenuLabel className="text-[#3DDC97] font-semibold">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="border-[#3DDC97]" />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:bg-[#161B22]">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#161B22]">Settings</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#161B22]">Support</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="border-[#3DDC97]" />
                  <DropdownMenuItem 
                    onClick={handleLogout} 
                    className="text-red-500 hover:bg-red-500 cursor-pointer hover:text-black transition"
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <NavLink to={"signin"} onClick={closeMobileMenu}>
                <Button className="bg-green-500 text-black hover:bg-green-600 cursor-pointer">
                  Signin
                </Button>
              </NavLink>
              <NavLink to={"signup"} onClick={closeMobileMenu}>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer">
                  Signup
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;