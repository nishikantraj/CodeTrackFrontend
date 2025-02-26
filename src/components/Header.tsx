import { Button } from "./ui/Button"
import logo from '../assets/image/codetracker-Photoroom.png'

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <img src={logo} alt="CodeTracker" width={150} height={125}/>
      </div>

    <div className="flex">
      <ul className="flex gap-8 justify-center items-center">
        <li>About</li>
        <li>Installation</li>
        <li>FAQ's</li>
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