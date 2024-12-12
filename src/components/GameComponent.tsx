import { GameType } from '../types/Game.type'

import '../styles/Game.css'

interface Props {
    game: GameType,
}

const Game:React.FC<Props> = ({game}) => {

  let fullDate:string = "";
  let localTime:string = "";

  let hasStarted: boolean;

  // Check if the game has started and set either current state or start date & time
  if (game.time === "1st Qtr" ||
    game.time === "2nd Qtr" ||
    game.time === "Halftime" ||
    game.time === "3rd Qtr" ||
    game.time === "4th Qtr" ||
    game.time === "Final") {
        
    hasStarted = true;
    localTime = game.time;
  
  } else {
    hasStarted = false;
    const gameDate = new Date(game.time); 

    // Format game's date
    fullDate = ("0" + gameDate.getDate().toString()).slice(-2) + "-" + 
    ("0" + (gameDate.getMonth() + 1).toString()).slice(-2) + "-" + 
    gameDate.getFullYear().toString()

    // Format game's time
    localTime = ("0" + gameDate.getHours().toString()).slice(-2) + ":" + 
    ("0" + gameDate.getMinutes().toString()).slice(-2)
  }
  

  return (
    <div className='game'>  

      <div className='game__team'>
        <p>{game.homeTeam.name}</p>
        <div className='game__team__image'>
          <img src={`/assets/logos/${game.homeTeam.abbreviation}.svg`} alt={`NBA team ${game.homeTeam.name}'s logo`}/>
        </div>
      </div>

      {
      hasStarted ? 
      ( // Game has started, showing scores instead of time
        <div className='game--has-started'>
          <div className='game--has-started__scores'>
            <p id='homeTeamScore' 
            className={(Number(game.homeTeam.score) < Number(game.awayTeam.score)) ? "game--has-started__scores--loser" : ""}>{game.homeTeam.score}</p>
            <p>:</p>
            <p id='awayTeamScore'
            className={(Number(game.homeTeam.score) > Number(game.awayTeam.score)) ? "game--has-started__scores--loser" : ""}>{game.awayTeam.score}</p>
          </div>
          <p className='game--has-started__status'>{localTime}</p>
        </div>
      ) 
      : 
      ( // Game hasn't started, showing date and time
        <div className='game--hasnt-started__status'>
          <p className='game--hasnt-started__status__time'>{localTime}</p>
          <p className='game--hasnt-started__status__date'>{fullDate}</p>
        </div>
      )
      }

      <div className='game__team'>
        <p>{game.awayTeam.name}</p>
        <div className='game__team__image'>
          <img src={`/assets/logos/${game.awayTeam.abbreviation}.svg`} alt={`NBA team ${game.awayTeam.name}'s logo`}/>
        </div>
      </div>
      
    </div>
  )
}

export default Game
