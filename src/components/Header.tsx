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
import { Menu, X } from "lucide-react";

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
          window.location.reload();
        }, 1000);
      }
    } catch (error: any) {
      console.error("Logout failed:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-md relative">
      <div className="flex items-center gap-4">
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <Link to={""}>
          <img src={logo} alt="CodeTracker" className="cursor-pointer w-32 brightness-125 contrast-110" />
        </Link>
      </div>

      <nav className={`lg:flex lg:items-center lg:static absolute top-full left-0 w-full bg-black lg:w-auto lg:bg-transparent transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10 text-lg items-center p-4 lg:p-0">
          <NavLink to={""} className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-300")}>Home</NavLink>
          <NavLink to={"about"} className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-300")}>About</NavLink>
          <NavLink to={"installation"} className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-300")}>Installation</NavLink>
          <NavLink to={"faq"} className={({ isActive }) => (isActive ? "text-green-400" : "hover:text-green-300")}>FAQ's</NavLink>
        </ul>
      </nav>

      <div className="flex items-center gap-6">
        {isLoggedIn[0] ? (
          <>
            <Button className="bg-green-500 text-black hover:bg-green-600" onClick={() => handleCopy(isLoggedIn[1]?.sessionKey || "")}>Session Key</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img src={profile} alt={isLoggedIn[1]?.name} className="w-9 rounded-full border-2 border-[#3DDC97] cursor-pointer" />
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
                <DropdownMenuItem onClick={handleLogout} className="text-red-500 hover:bg-red-500 cursor-pointer hover:text-black transition">Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <div className="flex gap-4">
            <NavLink to={"signin"}><Button className="bg-green-500 text-black hover:bg-green-600 cursor-pointer">Signin</Button></NavLink>
            <NavLink to={"signup"}><Button className="bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer">Signup</Button></NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
