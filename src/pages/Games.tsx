import { useEffect, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs'
import customParseFormat from "dayjs/plugin/customParseFormat.js";
dayjs.extend(customParseFormat);


import '../styles/Games.css'

import Game from "../components/Game"

function Games() {
  const todaysDate = dayjs();
  //console.log(todaysDate.format('YYYY-MM-DD') )

  const [games, setGames] = useState<Array<any> | null>(null)
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(todaysDate)

  const apiGamesUrl = import.meta.env.VITE_API_GAMES_URL
  const apiKey = import.meta.env.VITE_API_KEY

  /*
  useEffect(() => {
    const date: Date = new Date() // Get todays date
    const todaysDate = date.toISOString().split('T')[0] // Convert the date into YYY-MM-DD format

    // Fetch todays games from the API
    fetch(apiGamesUrl + "/?dates[]=" + todaysDate, {
      method: 'GET',
      headers: { "Authorization" : apiKey }
    })
    .then(response => response.json())
    .then(response => setGames(response.data. slice()))
    .catch(error => console.error(error));
     
  }, []) */

  //test with random date
  useEffect(() => {

    console.log("useEffect is called")
    console.log(games)
    console.log(selectedDate)

    // Fetch todays games from the API
    fetch(apiGamesUrl + "/?dates[]=" + selectedDate!.format("YYYY-MM-DD"), {
      method: 'GET',
      headers: { "Authorization" : apiKey }
    })
    .then(response => response.json())
    .then(response => setGames(response.data.slice()))
    .catch(error => console.error(error));
     
  }, [selectedDate])

  //console.log(games)
  //console.log(selectedDate)

  console.log(games)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='main-container'> 
        <div className='container'>

          <div >
            <DatePicker 
            label="Date"
            value={selectedDate}
            onAccept={(newDate) => setSelectedDate(newDate)} // onAccept is fired whenever the date is fully selected, 
            //in contrast to onChange, which is fired even when you change month or year.
            views={['year', "month", "day"]}
            />  
          </div> 
          
          <div className='grid-container'>
            { 

            games === null ? ("loading") : 
            
            games.length === 0 ? ("no games today") :

            
            games.map((game: any) => 
            
            <Game key={game.id}

            game = {{
              id: game.id,
              postSeason: game.postseason,
              time: game.status,
              homeTeam: {
                id: game.home_team.id, 
                name: game.home_team.name, 
                abbreviation: game.home_team.abbreviation, 
                score: game.home_team_score,
                conference: game.home_team.conference },
              awayTeam: {
                id: game.visitor_team.id,
                name: game.visitor_team.name,
                abbreviation: game.visitor_team.abbreviation,
                score: game.visitor_team_score,
                conference: game.visitor_team.conference,
              }
            }} />)

            }
          </div>
        </div>
      </div>
    </LocalizationProvider>
  )
}

export default Games
