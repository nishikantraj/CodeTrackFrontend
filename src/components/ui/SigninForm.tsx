import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import login from '/src/assets/image/login.jpg'
import { useEffect, useRef, useState} from "react";
import Typed from "typed.js";
import BASE_API_URL from "@/utils/config";
import { Github, Twitter } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link} from "react-router-dom";
import ReactGA from 'react-ga4';

const onToast = () => toast('Coming soon...', {
  icon: "⏳",
  style: {
    backgroundColor: "#161B22",
    color: "#3DDC97",
    border: "1px solid #3DDC97",
    padding: "12px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  }
});

export function Signin({ className, ...props }: React.ComponentProps<"div">) {

  ReactGA.event({
    category: 'User',
    action: 'Sign In',
    label: 'Email'
  });

  const [formData, setFormData] = useState({
    email:"",
    password:"",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.post(`${BASE_API_URL}/user/login`, formData,{ withCredentials: true });
      toast.success("Successfully logged in.");
      console.log(response.data);
      
      const {token, user} = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userData",  JSON.stringify(user));
      
      setTimeout(() => {
        const username = response.data.user?.userName;
        
        if (username) {
          window.location.href = `/${username}`;
        } else {
          toast.error("Invalid user. Try again.");
        }
      }, 2000);
      
      
    } catch (err: any) {
  
      if (err.response?.status === 400) {
        const errorMessages = err.response?.data?.message;
  
        if (typeof errorMessages === "object" && errorMessages !== null) {
          if (Array.isArray(errorMessages)) {
            errorMessages.forEach((errMsg) => toast.error(errMsg.message || "Invalid input"));
          } else if (errorMessages.message) {
            toast.error(errorMessages.message); // Extract message from object
          } else {
            toast.error("Invalid input. Please check your form.");
          }
        } else {
          toast.error(errorMessages || "Sign-in failed. Try again.");
        }
      } else {
        toast.error("Something went wrong. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  
  
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(()=>{
    const typed = new Typed(typedRef.current,{
      strings: ["Welcome Back", "वापसी पर स्वागत है"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });
    return ()=> typed.destroy();
  },[]);
  return (
    <div className={cn("flex flex-col gap-6 py-40", className)} {...props}>
      <Card className="w-full overflow-hidden bg-[#262626] text-[#E3E6E8] border-[#1F2937]">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={handleSubmit}
            className="p-6 md:p-8"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold"><span ref={typedRef}></span></h1>
                <p className="text-balance text-gray-400">
                  Login to your Codechamp account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="m@example.com"
                  required
                  className="bg-[#404040] text-white"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <span
                    onClick={onToast}
                    className="ml-auto text-sm text-[#3983F7] underline-offset-2 hover:underline cursor-pointer"
                  >
                    Forgot your password?
                  </span>
                </div>
                <Input id="password" minLength={6} value={formData.password} onChange={handleChange} type="password" required className="bg-[#404040] text-white" />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-[#2463EB] hover:bg-[#1C4ED8] cursor-pointer">
                {loading ? "Signing in..." : "Signin"}
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-[#749fc4]">
                <span className="relative z-10 bg-[#262626] px-2 text-gray-400">
                  Or continue with
                </span>
              </div>
              <div className="flex justify-center items-center gap-4">
              <Button variant="outline" onClick={onToast} className="w-full cursor-pointer border-[#555c59] hover:text-black hover:bg-[#606871] hover:border-[#24292E]">
                    <Github />
                    GitHub
                </Button>
                <Button variant="outline" onClick={onToast} className="w-full cursor-pointer border-[#096894] hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-black">
                    <Twitter/>
                    Twitter
                </Button>
              </div>
              <div className="text-center text-sm text-gray-400">
                Don&apos;t have an account?{' '}
                <Link to={"/signup"} className="underline text-[#1f6cd6] hover:text-[#245edd]">Sign up</Link>
              </div>
            </div>
          </form>
          <div className="relative hidden md:block bg-[#262626]">
            <img
              src={login}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-center text-xs text-gray-400 [&_a]:underline [&_a]:text-[#3983F7] hover:[&_a]:text-[#245edd]">
        By clicking continue, you agree to our <Link to="/privacy">Terms of Service</Link>{' '}
        and <Link to="/privacy">Privacy Policy</Link>.
      </div>
    </div>
  );
}