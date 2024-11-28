import { useEffect } from 'react'
import './App.css'

function App() {

  const gamesUrl = import.meta.env.VITE_API_GAMES_URL
  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {

    fetch(gamesUrl + "/?dates[]=2024-11-29", {
      method: 'GET',
      headers: {
          "Authorization": apiKey,
      }
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.error(error));
  }, [])

  return (
    <>

    </>
  )
}

export default App
