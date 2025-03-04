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
// import data from '../utils/dummyData'
interface LanguageUsage {
  language: string;
  minutes: string;
}

interface UserProps {
  name: string;
  totalMinutes: number;
  languages: LanguageUsage[];
}

export default function Leaderboard() {
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
      <div className="flex justify-center items-center py-10 min-h-screen">
        <div className="flex flex-col items-center space-y-4 bg-[#1B4332] bg-opacity-60 backdrop-blur-lg p-6 rounded-xl shadow-lg">
          {/* Pulsing Crown Icon (For 1st Place) */}
          <div className="w-14 h-14 bg-gradient-to-r from-[#A7D7C5] to-[#F4E285] rounded-full animate-pulse"></div>

          {/* Loading Text */}
          <p className="text-xl font-semibold text-[#A7D7C5] animate-fadeIn">Fetching Data...</p>

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
  return (
    <div className="min-h-screen py-6 px-4 bg-[#0D1B1E] rounded-lg flex flex-col items-center">
      {/* Title with Gradient Effect */}
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#A7D7C5] to-[#F4E285] text-transparent bg-clip-text mb-6">
        Codechamp Leaderboard 🏆
      </h1>

      {/* Search Bar */}
      <div className="w-full max-w-3xl mb-4">
        <div className="flex items-center gap-2 bg-[#142B2E] px-3 py-2 rounded-lg shadow-md">
          <Search className="text-gray-300 w-5 h-5" />
          <input
            type="text"
            placeholder="Search name..."
            className="bg-transparent outline-none w-full text-white placeholder-gray-400"
          />
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="w-full max-w-5xl bg-[#1B4332] p-6 rounded-lg shadow-2xl backdrop-blur-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#102A26]">
              <TableHead className="text-center w-[80px]">Rank</TableHead>
              <TableHead className="w-[220px]">Coder</TableHead>
              <TableHead className="w-[150px]">Duration</TableHead>
              <TableHead>Languages</TableHead>
              <TableHead className="w-[180px]">Badge</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((user:UserProps, key: number) => (
              <TableRow key={key} className="hover:bg-[#235C4B] transition-all duration-300">
                {/* Rank with Crown for 1st Place */}
                <TableCell>
                  <div className="flex justify-center">
                    {key === 0 ? (
                      <img src={crown} alt="Crown" className="w-10 h-10 animate-pulse" />
                    ) : (
                      <span className="text-xl font-semibold">{key + 1}</span>
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
                          className="rounded-full px-3 py-1 flex items-center gap-1 flex-shrink-0 min-w-max bg-opacity-80 border border-black"
                          style={{ backgroundColor: langItem?.color }}
                        >
                          {langItem ? (
                            <img src={langItem.image} alt={language} className="w-[30px] h-[30px] object-contain" />
                          ) : (
                            language
                          )}
                          <span className="text-black font-semibold">{Number(minutes).toFixed(2)}</span>
                        </div>
                      );
                    })}
                  </div>
                </TableCell>

                {/* Rank Badge with Animated Glow */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    {key === 0 ? (
                      <span className="flex items-center gap-1 animate-glow">
                        <img src={legendary} alt="Legendary" className="w-8 h-8" />
                        Legendary
                      </span>
                    ) : key === 1 ? (
                      <span className="flex items-center gap-1 animate-glow">
                        <img src={grandMaster} alt="Grandmaster" className="w-8 h-8" />
                        Grandmaster
                      </span>
                    ) : key === 2 ? (
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
