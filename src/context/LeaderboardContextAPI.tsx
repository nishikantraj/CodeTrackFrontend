import { createContext, memo, useContext, ReactNode } from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import fetchData from "@/utils/fetchData";


type LeaderboardData = any; // Replace with actual type

const LeaderboardContext = createContext<UseQueryResult<LeaderboardData, Error> | null>(null);

type LeaderboardProviderProps = {
  children: ReactNode;
};

export const LeaderboardProvider = memo(({ children }: LeaderboardProviderProps) => {
  const leaderboardQuery = useQuery<LeaderboardData, Error>({
    queryKey: ["leaderboard"],
    queryFn: fetchData,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  return (
    <LeaderboardContext.Provider value={leaderboardQuery}>
      {children}
    </LeaderboardContext.Provider>
  );
});

export const useLeaderboard = () => {
  const context = useContext(LeaderboardContext);
  if (!context) throw new Error("useLeaderboard must be used within a LeaderboardProvider");
  return context;
};
