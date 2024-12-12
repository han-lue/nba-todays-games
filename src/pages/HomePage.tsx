import { useEffect, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Game from "../components/GameComponent"
import '../styles/HomePage.css'

import dayjs, { Dayjs } from 'dayjs'
import customParseFormat from "dayjs/plugin/customParseFormat.js";
dayjs.extend(customParseFormat);

function Games() {
  // Get todays date
  const todaysDate = dayjs(); 

  const [games, setGames] = useState<Array<any> | null>(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(todaysDate);

  // Get API key and URL from .env file
  const apiGamesUrl = import.meta.env.VITE_API_GAMES_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  // Fetch games of today or the selected date
  useEffect(() => {
    fetch(apiGamesUrl + "/?dates[]=" + selectedDate!.format("YYYY-MM-DD"), {
      method: 'GET',
      headers: { "Authorization" : apiKey }
    })
    .then(response => response.json())
    .then(response => setGames(response.data.slice()))
    .catch(error => console.error(error));
     
  }, [selectedDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='home-page'> 
        <div className='home-page__container'>

          <div >
            <DatePicker 
            label="Date"
            value={selectedDate}
            onAccept={(newDate) => setSelectedDate(newDate)} // onAccept is fired whenever the date is fully selected, 
            //in contrast to onChange, which is fired even when you change month or year.
            views={['year', "month", "day"]}
            />  
          </div> 
          
          <div className='home-page__container__grid'>
            { 
            games === null 
            ? 
            // If waiting for API response, show loading animation
            <Box sx={{ display: 'flex', justifySelf: "center" }}>
              <CircularProgress />
            </Box>
            : 
              games.length === 0 
              ? 
              // If there's no games on the selected date, show no games text
              <p className='home-page__text--no-games'>There are no games today</p>
              : 
              // If there are games on the selected date, show the games
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
                    conference: game.home_team.conference 
                  },
                  awayTeam: {
                    id: game.visitor_team.id,
                    name: game.visitor_team.name,
                    abbreviation: game.visitor_team.abbreviation,
                    score: game.visitor_team_score,
                    conference: game.visitor_team.conference,
                  }
                }} 
                />
              )
            }
          </div>
        </div>
      </div>
    </LocalizationProvider>
  )
}

export default Games
