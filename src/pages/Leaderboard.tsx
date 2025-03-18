import { Search } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/Table";
import crown from "../assets/Logo/crown.png";
import legendary from "../assets/Logo/Legendary.png";
import grandMaster from "../assets/Logo/Grandmaster.png";
import masterCoder from "../assets/Logo/MasterCoder.png";
import coder from "../assets/Logo/Coder.png";
import languages from "@/utils/language";
import { useQuery } from "@tanstack/react-query";
import fetchData from "@/utils/fetchData";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import toast from "react-hot-toast";
// import data from '../utils/dummyData'
interface LanguageUsage {
  language: string;
  minutes: string;
}

interface UserProps {
  name: string;
  totalMinutes: number;
  languages: LanguageUsage[];
  originalRank? : number
}

const onToast = () => toast('Coming soon...', {
  icon: "⏳",
  style: {
    backgroundColor: "#161B22",
    color: "#60A5FA",
    border: "1px solid #60A5FA",
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
export default function Leaderboard() {

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(()=>{
    const handler = setTimeout(()=>{
      setDebouncedQuery(searchQuery);
    },500)
    
    return ()=> clearTimeout(handler);
  },[searchQuery]);

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
      <div className="flex justify-center items-center py-10 min-h-screen bg-[#171717]">
        <div className="flex flex-col items-center space-y-4 bg-[#2683e0] bg-opacity-60 backdrop-blur-lg p-6 rounded-xl shadow-lg">
          {/* Pulsing Crown Icon (For 1st Place) */}
          <div className="w-14 h-14 bg-gradient-to-r from-[#6095be] to-[#ead163] rounded-full animate-pulse"></div>

          {/* Loading Text */}
          <p className="text-xl font-semibold text-[#d0d8d5] animate-fadeIn">Fetching Data...</p>

          {/* Skeleton Bars with Shimmer Animation */}
          <div className="space-y-3 w-72">
            <div className="h-4 w-full bg-[#ABB3C6] rounded-lg animate-shimmer"></div>
            <div className="h-4 w-2/3 bg-[#ABB3C6] rounded-lg animate-shimmer"></div>
          </div>
        </div>
      </div>

    )

  if(error)
    return (
      <p>Error: {error.message}</p>
    )

  const filteredData = data?.map((user:UserProps, index:number)=>({
    ...user,
    originalRank: index + 1,
  })).filter((user:UserProps) => user.name.toLowerCase().includes(debouncedQuery));
  
  return (
    <div className="min-h-screen text-white py-6 bg-[#171717] flex flex-col items-center overflow-auto">
      {/* Title with description */}
      <div className="flex flex-col justify-center items-center px-4 md:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text mb-4 md:mb-6 text-center">
          Global Coding Leaderboard
        </h1>
        <p className="text-center w-full md:w-2/3 tracking-tight text-md sm:text-md text-wrap text-[#D1D5DB] px-2">
          Track your progress against the best coders worldwide. Rankings are updated in real-time based on coding duration and consistency.
        </p>
      </div>

      {/*Button and Search Bar */}
      <div className="w-full mt-6 md:mt-8 mb-4 flex flex-col sm:flex-row justify-between px-4 sm:px-8 md:px-18 gap-4">

        <div className="order-1 sm:order-2 flex justify-center items-center gap-2 sm:gap-3 flex-wrap">
          <Button className="hover:bg-[#1C4ED8] bg-[#2c5de6] cursor-pointer py-2 md:py-6 text-xs sm:text-sm px-2 sm:px-4">Last 24 Hour</Button>
          <Button className="bg-[#262626] border-white/20 border cursor-pointer hover:bg-[#404040] py-2 md:py-6 text-xs sm:text-sm px-2 sm:px-4" onClick={onToast}>This Month</Button>
          <Button className="bg-[#262626] border-white/20 border cursor-pointer hover:bg-[#404040] py-2 md:py-6 text-xs sm:text-sm px-2 sm:px-4" onClick={onToast}>This Week</Button>
        </div>

        <div className="order-2 sm:order-2">
          <div className="flex items-center gap-2 bg-[#262626] px-3 py-2 rounded-lg shadow-md border-2 border-transparent focus-within:border-[#3C82F6] w-full">
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e)=> setSearchQuery(e.target.value.toLowerCase())}
              className="bg-transparent outline-none w-full text-white placeholder-gray-400"
            />
            <Search className="text-gray-300 w-5 h-5" />
          </div>
        </div>

      </div>

      {/* Leaderboard Table */}
      <div className="w-full mt-3 max-w-[80rem] bg-[#262626] p-6 rounded-lg shadow-2xl backdrop-blur-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#404040]">
              <TableHead className="text-center w-[80px]">Rank</TableHead>
              <TableHead className="w-[220px]">Coder</TableHead>
              <TableHead className="w-[150px]">Duration</TableHead>
              <TableHead>Languages</TableHead>
              <TableHead className="w-[180px]">Badge</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((user:UserProps) => (
              <TableRow key={user.originalRank} className="hover:bg-[#708ccc] transition-all duration-300">
                {/* Rank with Crown for 1st Place */}
                <TableCell>
                  <div className="flex justify-center">
                    {user.originalRank === 1 ? (
                      <img src={crown} alt="Crown" className="w-10 h-10 animate-pulse" />
                    ) : (
                      <span className="text-xl font-semibold">{user.originalRank}</span>
                    )}
                  </div>
                </TableCell>

                {/* Coder Name */}
                <TableCell className="font-medium text-white">{user.name}</TableCell>

                {/* Coding Duration */}
                <TableCell className="font-semibold text-[#A7D7C5]">
                  {user.languages
                    .reduce((sum: number, lang: { minutes: string }) => sum + parseFloat(lang.minutes), 0)
                    .toFixed(2)}{" "}
                  min
                </TableCell>

                {/* Languages */}
                <TableCell>
                  <div className="w-[550px] overflow-x-auto flex gap-2 flex-nowrap custom-scrollbar">
                    {user.languages.map(({ language, minutes }: { language: string; minutes: string }) => {
                      const langItem = languages.find((item) => item.language === language);
                      return (
                        <div
                          key={language}
                          className="flex items-center"
                        >
                          {langItem ? (
                            <div className="rounded-full px-3 py-1 flex items-center gap-1 flex-shrink-0 min-w-max bg-opacity-80 border border-black"
                            style={{ backgroundColor: langItem?.color }}>
                              <img src={langItem.image} alt={language} className="w-[30px] h-[30px] object-contain" />
                              <span className="text-[#000000] font-semibold">{Number(minutes).toFixed(2)}</span>
                            </div>  
                          ) : (
                            <div className="rounded-full px-3 py-1 flex items-center gap-1 flex-shrink-0 min-w-max bg-opacity-80 border border-[#aa9090]">
                              <span className="textwhite">{language}</span>
                              <span className="text-[#f9f8f8] font-semibold">{Number(minutes).toFixed(2)}</span>
                            </div>
                          )}
                          
                        </div>
                      );
                    })}
                  </div>
                </TableCell>

                {/* Rank Badge with Animated Glow */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    {user.originalRank === 1 ? (
                      <span className="flex items-center gap-1 animate-glow">
                        <img src={legendary} alt="Legendary" className="w-8 h-8" />
                        Legendary
                      </span>
                    ) : user.originalRank === 2 ? (
                      <span className="flex items-center gap-1 animate-glow">
                        <img src={grandMaster} alt="Grandmaster" className="w-8 h-8" />
                        Grandmaster
                      </span>
                    ) : user.originalRank === 3 ? (
                      <span className="flex items-center gap-1">
                        <img src={masterCoder} alt="Master Coder" className="w-8 h-8" />
                        Master Coder
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <img src={coder} alt="Coder" className="w-8 h-8" />
                        Coder
                      </span>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    
  );
}
