import { Search } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/Table"
import crown from '../assets/Logo/crown.png'
import legendary from '../assets/Logo/Legendary.png'
import grandMaster from '../assets/Logo/Grandmaster.png'
import masterCoder from '../assets/Logo/MasterCoder.png'
import coder from '../assets/Logo/Coder.png'
import languages from "@/utils/language"
import { useQuery } from "@tanstack/react-query"
import fetchData from "@/utils/fetchData"
import { Skeleton } from "./ui/Skeleton"


interface LanguageUsage{
  language: string,
  minutes: string,
}


interface UserProps{
  name: string,
  sessionKey: string,
  totalMinutes: number,
  languages: LanguageUsage[]
}
const Leaderboard = () => {
  const { data, isLoading, error} = useQuery({
    queryKey: ["leaderboard"],
    queryFn: fetchData,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  if(isLoading)
    return (
      <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
    )

    if(error)
      return (
        <p>Error: {error.message}</p>
      )
      console.log(data);
      
  return (
    <div className="h-auto min-h-screen py-3">
      <div className="flex justify-end mb-2">
        <div className="flex gap-2 justify-center items-center px-2 bg-[#1B1A1D] rounded-lg">
          <span className="pt-1">
            <Search className="w-[18px] h-[18px]" />
          </span>
          <input
            type="text"
            placeholder="Search name..."
            autoFocus={true}
            onClick={e => e.stopPropagation()} // Prevents click from closing the dropdown
            onKeyDown={e => e.stopPropagation()} // Prevents keypress from affecting dropdown focus
            className="w-34 h-8 outline-none"
          />
        </div>
      </div>

      <div className="bg-[#1B1A1D] h-full p-5 rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#242327]">
              <TableHead className="w-[100px] text-center">Place</TableHead>
              <TableHead className="w-[200px]">Coder</TableHead>
              <TableHead className="w-[150px]">Duration</TableHead>
              <TableHead>Languages</TableHead>
              <TableHead className="w-[150px]" >Rank</TableHead>
            </TableRow>
          </TableHeader>
        <TableBody>
          {data && (
            data.map((user:UserProps,key:number)=>(
              <TableRow key={key}>
                <TableCell>
                  <div className="flex justify-center">
                    {key===0 ? <img src={crown} alt="Icon" className="w-10 h-10" /> : key+1}
                  </div>
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell className="font-semibold text-sm">{(user.totalMinutes).toFixed(2)} min</TableCell>
                <TableCell>
                  <div className="w-[550px] overflow-x-auto flex gap-1 flex-nowrap custom-scrollbar">
                    {
                      user.languages.map(({ language, minutes }: { language: string; minutes: string }) =>{
                        const langItem = languages.find((item)=> item.language === language);
                        
                        return (
                          <div key={language} className="rounded-full px-2 py-1 flex items-center gap-1 flex-shrink-0 min-w-max"
                            style={{backgroundColor:langItem?.color}}
                          >
                            {langItem ? (
                                <img src={langItem.image} alt={language} className="w-[40px] h-[32px] object-contain" />
                              ) : language
                            }
                            <span className="text-black font-semibold tracking-tight">
                              {Number(minutes).toFixed(2)}
                            </span>
                          </div>
                        )
                      })
                    }
                  </div>
                </TableCell>
                <TableCell>
                  {key=== 0 ? <span className="flex items-center gap-1"><img src={legendary} alt="Legendary" className="w-8 h-8"/>Legendary</span> : 
                    key === 1 ? <span className="flex items-center gap-1"><img src={grandMaster} alt="Grandmaster" className="w-8 h-8"/>Grandmaster</span> : 
                    key===2 ? <span className="flex items-center gap-1"><img src={masterCoder} alt="Master Coder" className="w-8 h-8"/>Master Coder</span> : 
                    <span className="flex items-center gap-1"><img src={coder} alt="Coder" className="w-8 h-8"/>Coder</span>}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      </div>

    </div>
  )
}

export default Leaderboard