import { useState } from "react";
import { Button } from "./ui/Button";
import logo from "../assets/image/codechampfinal.png";
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
    <div className="fixed w-full z-50">
      <div className="flex justify-between items-center px-6 md:px-15 py-4 bg-[#171717] text-white shadow-md relative">
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
              className="cursor-pointer w-24 brightness-125 contrast-110"
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
          <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-6 text-lg p-4 lg:p-0">
          <li>
              <NavLink 
                to={""} 
                className={({ isActive }) => (isActive ? "text-[#5DA0F1]" : "hover:text-[#5DA0F1]")}
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={""}
                onClick={closeMobileMenu}
              >
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={""}
                onClick={closeMobileMenu}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={""}
                onClick={closeMobileMenu}
              >
                Ranking
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={"about"} 
                className={({ isActive }) => (isActive ? "text-[#5DA0F1]" : "hover:text-[#5DA0F1]")}
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={"installation"} 
                className={({ isActive }) => (isActive ? "text-[#5DA0F1]" : "hover:text-[#5DA0F1]")}
                onClick={closeMobileMenu}
              >
                Installation
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={"faq"} 
                className={({ isActive }) => (isActive ? "text-[#5DA0F1]" : "hover:text-[#5DA0F1]")}
                onClick={closeMobileMenu}
              >
                FAQs
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
                <Button className="text-[#60A5FA] hover:bg-[#3C82F6] hover:text-white cursor-pointer border border-[#60A5FA]">
                  Signin
                </Button>
              </NavLink>
              <NavLink to={"signup"} onClick={closeMobileMenu}>
                <Button className="bg-[#4279f0] text-white hover:bg-[#2463EB] cursor-pointer">
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