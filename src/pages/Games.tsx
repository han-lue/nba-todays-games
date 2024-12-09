import { useEffect, useState } from 'react'
import '../styles/App.css'

import Game from "../components/Game"

function Games() {
  const [games, setGames] = useState([])

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

    // Fetch todays games from the API
    fetch(apiGamesUrl + "/?dates[]=2024-12-13", {
      method: 'GET',
      headers: { "Authorization" : apiKey }
    })
    .then(response => response.json())
    .then(response => setGames(response.data.slice()))
    .catch(error => console.error(error));
     
  }, [])

  console.log(games)

  return (
    <div className='main-container'>  
      <div className='grid-container'>
        { 
        games.length > 0 ? games.map((game: any) => 
        
        <Game key={game.id}

        game = {{
          id: game.id,
          postSeason: game.postseason,
          time: game.status,
          homeTeam: {
            id: game.home_team.id, 
            name: game.home_team.name, 
            abbreviation: game.home_team.abbreviation, 
            conference: game.home_team.conference },
          awayTeam: {
            id: game.visitor_team.id,
            name: game.visitor_team.name,
            abbreviation: game.visitor_team.abbreviation,
            conference: game.visitor_team.conference,
          }
        }} />) 
        
        : ('loading')
        }
      </div>
    </div>
  )
}

export default Games
