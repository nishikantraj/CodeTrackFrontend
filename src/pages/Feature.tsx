import { Button } from "@/components/ui/Button"
import { Award, ChartNoAxesCombined, Check, Hourglass } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Feature = () => {
    const navigate = useNavigate();

    const handleRoute = ()=>{
        navigate('/installation');
    }
  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-[#171717] via-[#171717] to-[#202020] min-h-screen text-white">
        <div className="px-4 md:px-14">
            {/* Heading */}
            <div className="py-6 md:py-10 flex flex-col justify-center items-center px-4 md:px-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text mb-4 md:mb-6 text-center">
                    Powerful Features for Coders
                </h1>
                <p className="text-center w-full md:w-2/3 lg:w-2/6 tracking-tight text-md sm:text-md text-wrap text-[#D1D5DB] px-2">
                    Track your coding progress, compete with others, and showcase your dedication with our comprehensive toolkit.
                </p>
            </div>

            {/* Features box */}
            <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-around">
                {/* Realtime tracking */}
                <div className="w-full md:w-5/12 lg:w-1/3 bg-[#262626] rounded-lg p-6 py-8 flex flex-col gap-5">
                    <div><ChartNoAxesCombined className="bg-[#2463EB] w-12 h-12 p-1.5 rounded-md"/></div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold tracking-tighter">Real-Time Tracking</h1>
                        <p className="text-[#CCD0D6]">Automatically logs your coding hours across different languages and projects with our IDE integrations.</p>
                    </div>
                    <div className="flex flex-col text-[#CCD0D6] gap-2">
                        <div className="flex gap-1">
                            <span><Check className="text-[#22C55D] w-[18px] stroke-3 flex-shrink-0"/></span>
                            <p>Support for 40+ programming languages</p>
                        </div>
                        <div className="flex gap-1">
                            <span><Check className="text-[#22C55D] w-[18px] stroke-3 flex-shrink-0"/></span>
                            <p>IDE plugin for VSCode</p>
                        </div>
                        <div className="flex gap-1">
                        <span><Check className="text-[#22C55D] w-[18px] stroke-3 flex-shrink-0"/></span>
                        <p>Automatic tracking system</p>
                        </div>
                    </div>
                </div>

                {/* Achievement system */}
                <div className="w-full md:w-5/12 lg:w-1/3 bg-[#262626] rounded-lg p-6 py-8 flex flex-col gap-5">
                    <div><Award className="bg-[#16A34A] w-12 h-12 p-1.5 rounded-md"/></div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold tracking-tighter">Achievement System</h1>
                        <p className="text-[#CCD0D6]">Earn badges, ranks, and achievements as you hit milestones in your coding journey.</p>
                    </div>
                    <div className="flex flex-col text-[#CCD0D6] gap-2">
                        <div className="flex gap-1">
                            <span><Check className="text-[#22C55D] w-[18px] stroke-3 flex-shrink-0"/></span>
                            <p>Prestigious ranking system</p>
                        </div>
                        <div className="flex gap-1">
                            <span><Check className="text-[#22C55D] w-[18px] stroke-3 flex-shrink-0"/></span>
                            <p>Unique badges for special achievements</p>
                        </div>
                        <div className="flex gap-1">
                        <span><Hourglass className="text-[#b2c522] w-[18px] stroke-3 flex-shrink-0"/></span>
                        <p>Shareable achievement cards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-center py-12">
            <Button className="cursor-pointer bg-[#2463EB] hover:bg-[#1C4ED8] py-6 text-md font-bold"
                onClick={handleRoute}
            >Get Started with CodeChamp</Button>
        </div>
    </div>
  )
}

export default Feature