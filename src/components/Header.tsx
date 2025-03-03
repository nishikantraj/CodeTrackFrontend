import { Button } from "./ui/Button"
import logo from '../assets/image/codetracker-Photoroom.png'
import { Link, NavLink } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth";
import profile from '../assets/image/profile.png'
import toast from "react-hot-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/Dropdown";
import axios from "axios";
import BASE_API_URL from "@/utils/config";

const Header = () => {
  const isLogeedIn =  useAuth();
  console.log(typeof isLogeedIn[1]);
  
  const handleCopy = (text: string)=>{
    navigator.clipboard.writeText(text)
    .then(()=>toast.success("Session key copied"))
    .catch(()=>toast.error("Something went wrong while copying the session key."))
  }

  const handleLogout = async ()=>{
    try {
      const response = await axios(`${BASE_API_URL}/user/logout`,{
        withCredentials:true,
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
      if (response.status === 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        toast.success("Successfully Logged out");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      
    } catch (error:any) {
      console.error("Logout failed:", error.response?.data?.message || error.message);
    }
  }

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

      {isLogeedIn[0] ? (
        <div className="flex gap-10 justify-center items-center">
          <div>
            <Button 
              className="bg-green-500 text-black hover:bg-green-600 cursor-pointer" 
              onClick={()=>handleCopy(isLogeedIn[1]?.sessionKey || "")}>  
                Session Key
            </Button>  
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img
                  src={profile}
                  alt={isLogeedIn[1]?.name}
                  className="w-[35px] rounded-full border-2 border-[#3DDC97] cursor-pointer hover:opacity-80 transition"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-[#0D1117] border border-[#3DDC97] text-white shadow-lg rounded-lg">
                <DropdownMenuLabel className="text-[#3DDC97] font-semibold">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="border-[#3DDC97]" />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="hover:bg-[#161B22]">
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#161B22]">
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#161B22]">Support</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="border-[#3DDC97]" />
                <DropdownMenuItem onClick={handleLogout} className="text-red-500 hover:bg-red-500 cursor-pointer hover:text-black transition">
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </div>
      ) : (
        <div className="flex gap-4">
        <NavLink to={"signin"}>
          <Button className="bg-green-500 text-black hover:bg-green-600 cursor-pointer">Signin</Button>
        </NavLink>
        
        <NavLink to={"signup"}>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer">Signup</Button>
        </NavLink>
        </div>
      )}

    </div>
  );
};

export default Header;