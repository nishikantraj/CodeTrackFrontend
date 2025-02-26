const fetchData = async ()=>{
    const response = await fetch("https://codetrackbackend.onrender.com/api/leaderboard/board");
    if(!response.ok)
        throw new Error("Failed to fetch data")

    const data = await response.json();

    //Sort the data 
    const sortedLeaderboard = data.leaderboard.map((person:any)=>({
        ...person,
        totalMinutes: person.languages.reduce((sum:number, lang:{minutes:string})=> sum + parseFloat(lang.minutes),0)
    })).sort((a:any, b:any)=> b.totalMinutes - a.totalMinutes)

    return sortedLeaderboard;
}

export default fetchData;