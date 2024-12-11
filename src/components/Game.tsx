import { GameType } from '../types/Game.type'

import '../styles/Game.css'

interface Props {
    game: GameType,
}

const Game:React.FC<Props> = ({game}) => {

  let fullDate:string = "";
  let localTime:string = "";

  let inProcess: boolean;

  if (game.time === "1st Qtr" ||
    game.time === "2nd Qtr" ||
    game.time === "Halftime" ||
    game.time === "3rd Qtr" ||
    game.time === "4th Qtr" ||
    game.time === "Final") {
        
    inProcess = true;
    localTime = game.time;
  
  } else {
    inProcess = false;
    const gameDate = new Date(game.time); 

    //console.log(gameDate) 

    fullDate = ("0" + gameDate.getDate().toString()).slice(-2) + "-" + ("0" + (gameDate.getMonth() + 1).toString()).slice(-2) + "-" + gameDate.getFullYear().toString()
    //console.log(fullDate)

    localTime = ("0" + gameDate.getHours().toString()).slice(-2) + ":" + ("0" + gameDate.getMinutes().toString()).slice(-2)
    //console.log(localTime)

  }
  

  return (
    <div className='game-container'>  

      <div className='team-left-container'>
        <p>{game.homeTeam.name}</p>
        <div className='image-container'>
          <img src={`./src/assets/logos/${game.homeTeam.abbreviation}.svg`} alt={`NBA team ${game.homeTeam.name}'s logo`}/>
        </div>
      </div>


      {
      inProcess ? 
      (
        <div className='inprocess-game-container'>
          <div className='score-container'>
            <p id='homeTeamScore' 
            className={(Number(game.homeTeam.score) < Number(game.awayTeam.score)) ? "loser-score" : ""}>{game.homeTeam.score}</p>
            <p>:</p>
            <p id='awayTeamScore'
            className={(Number(game.homeTeam.score) > Number(game.awayTeam.score)) ? "loser-score" : ""}>{game.awayTeam.score}</p>
          </div>
          <p className='game-status'>{localTime}</p>
        </div>
      ) 
      :
      (
        <div className='date-time-container'>
          <p className='time-text'>{localTime}</p>
          <p className='date-text'>{fullDate}</p>
        </div>
      )
      }


      <div className='team-right-container'>
        <p>{game.awayTeam.name}</p>
        <div className='image-container'>
          <img src={`./src/assets/logos/${game.awayTeam.abbreviation}.svg`} alt={`NBA team ${game.awayTeam.name}'s logo`}/>
        </div>
      </div>
      
      
    </div>
  )
}

export default Game
