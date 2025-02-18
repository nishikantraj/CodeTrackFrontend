import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/Table"


const Leaderboard = () => {
  const [refinedData, setRefinedData] = useState<any[]>([]);
  async function fetchData(){
    const response = await fetch("https://codetrackbackend.onrender.com/api/leaderboard/board");
    const data = await response.json();
    // console.log(data);
    setRefinedData(data.leaderboard);
  }
  useEffect(()=>{
    fetchData();
  }, []);
  console.log(refinedData);
  return (
    <div className="h-screen px-15">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Dev Lord</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead className="text-right">Language</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            refinedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.languages.reduce((acc: number, lang: { minutes: string }) => acc + Number(lang.minutes), 0)} min</TableCell>
                <TableCell className="text-right">
                  <span>
                    {
                      item.languages.map(({language, minutes}:{language: string, minutes: string})=> `${language}: ${Number(minutes)}`).join(", ")
                    }
                  </span>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default Leaderboard