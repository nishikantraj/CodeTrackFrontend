import { Button } from "./ui/Button"


const Header = () => {
  return (
    <div className="p-5 flex justify-between">
      <div className="px-10">
        <h1 className="text-3xl font-semibold" style={{fontFamily: 'Merienda'}}>CodeTracker</h1>
      </div>

      <div className="flex gap-4">
        <Button 
        variant={"default"}
        className="bg-blue-400 cursor-pointer"
        >
          Login
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