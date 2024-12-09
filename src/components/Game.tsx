import { GameType } from '../types/Game.type'

import '../styles/Game.css'

interface Props {
    game: GameType,
}


const Game:React.FC<Props> = ({game}) => {

  let fullDate:string = "";
  let localTime:string = "";

  console.log(game.time);

  if (game.time === "1st Qtr" ||
      game.time === "2nd Qtr" ||
      game.time === "Halftime" ||
      game.time === "3rd Qtr" ||
      game.time === "4th Qtr" ||
      game.time === "Final") {
    localTime = game.time;
  
  } else {
    const gameDate = new Date(game.time); 

    console.log(gameDate) 

    fullDate = gameDate.getDate().toString() + "-" + (gameDate.getMonth() + 1).toString() + "-" + gameDate.getFullYear().toString()
    console.log(fullDate)

    localTime = ("0" + gameDate.getHours().toString()).slice(-2) + ":" + ("0" + gameDate.getMinutes().toString()).slice(-2)
    console.log(localTime)

  }
  

  return (
    <div className='game-container'>  

      <div className='team-left-container'>
        <p>{game.homeTeam.name}</p>
        <div className='image-container'>
          <img src={`./src/assets/logos/${game.homeTeam.abbreviation}.svg`} alt="Home team NBA logo"/>
        </div>
      </div>


      <div className='date-time-container'>
        <p className='time-text'>{localTime}</p>
        <p className='date-text'>{fullDate}</p>
      </div>


      <div className='team-right-container'>
        <p>{game.awayTeam.name}</p>
        <div className='image-container'>
          <img src={`./src/assets/logos/${game.awayTeam.abbreviation}.svg`} alt="Away team NBA logo"/>
        </div>
      </div>
      
      
    </div>
  )
}

export default Game
