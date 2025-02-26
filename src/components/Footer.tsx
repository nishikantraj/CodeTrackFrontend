import logo from '../assets/image/codetracker-Photoroom.png'
import { Button } from "./ui/Button"

const Footer = () => {
  return (
    <>
        <div className="flex gap-10">
            <div>
                <img src={logo} alt="CodeTracker" width={120} height={100}/>
                <div className="relative left-8 bottom-8">
                <p className="text-xs tracking-tight">Copyright © 2025</p>
                <p className="text-xs tracking-tight">Code.Track.Improve</p>
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <div>
                <div className="flex items-center gap-3">
                    <div className="w-2/3 flex items-end flex-col pr-15">
                    <div className="flex gap-30">
                        <span>Home</span>
                        <span>How it works</span>
                    </div>
                    <div className="flex gap-24">
                        <span>About us</span>
                        <span>Privacy policy</span>
                    </div>
                    </div>
                    <div className="flex flex-1 justify-end">
                    <Button variant={"default"} className="bg-orange-400">Contact us</Button>
                    </div>
                </div>
                </div>

                <div className="border-t-1 m-1 h-full">
                <div className="flex justify-end items-center h-full">
                    <ul className="flex gap-3 justify-center items-center">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#01A9F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3E77BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A69C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </li>
                    </ul>
                </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer