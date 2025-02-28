import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import signup from '/src/assets/image/signup.jpg'
import { Github, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function Signup({ className, ...props }: React.ComponentProps<"div">) {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(()=>{
    const typed = new Typed(typedRef.current,{
      strings: ["Welcome Boss", "स्वागत है बॉस"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });
    return ()=> typed.destroy();
  },[]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden bg-[#0D1117] text-[#E3E6E8] border-[#1F2937]">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-[#3DDC97]"><span ref={typedRef}></span></h1>
                <p className="text-balance text-gray-400">
                  Signup to your Codetracker account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  className="bg-[#161B22] border-[#3DDC97] text-white"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="username"
                  required
                  className="bg-[#161B22] border-[#3DDC97] text-white"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="bg-[#161B22] border-[#3DDC97] text-white"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required className="bg-[#161B22] border-[#3DDC97] text-white" />
              </div>
              <Button type="submit" className="w-full cursor-pointer bg-[#3DDC97] text-black hover:bg-[#32c386]">
                Signup
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-[#3DDC97]">
                <span className="relative z-10 bg-[#0D1117] px-2 text-gray-400">
                  Or continue with
                </span>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="w-full cursor-pointer border-[#3DDC97] text-[#3DDC97] hover:text-black hover:bg-[#606871] hover:border-[#24292E]">
                    <Github />
                    GitHub
                </Button>
                <Button variant="outline" className="w-full cursor-pointer border-[#3DDC97] text-[#3DDC97] hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-black">
                    <Twitter/>
                    Twitter
                </Button>
              </div>
            </div>
          </form>
          <div className="relative hidden md:block bg-[#161B22]">
            <img
              src={signup}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-center text-xs text-gray-400 [&_a]:underline [&_a]:text-[#3DDC97] hover:[&_a]:text-[#32c386]">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{' '}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}