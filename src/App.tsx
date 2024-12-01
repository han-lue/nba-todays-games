import { useEffect, useState } from 'react'
import './App.css'

import Game from "./components/Game"
import { GameType } from './types/Game.type'

function App() {


  const [games, setGames] = useState([])

  const apiGamesUrl = import.meta.env.VITE_API_GAMES_URL
  const apiKey = import.meta.env.VITE_API_KEY

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
     
  }, [])

  console.log(games)

  return (
    <>  
      { games.length > 0 ? games.map((game : GameType) => <Game 
      
      game={game}/>) : ('loading')}
    </>
  )
}

export default App
