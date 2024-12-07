import { GameType } from '../types/Game.type'

import '../styles/Game.css'

interface Props {
    game: GameType,
}


const Game:React.FC<Props> = ({game}) => {


  const gameDate = new Date(game.time); 

  console.log(gameDate) 

  const fullDate = gameDate.getDate().toString() + "-" + (gameDate.getMonth() + 1).toString() + "-" + gameDate.getFullYear().toString()
  console.log(fullDate)

  const localTime = ("0" + gameDate.getHours().toString()).slice(-2) + ":" + ("0" + gameDate.getMinutes().toString()).slice(-2)
  console.log(localTime)

  return (
    <div className='game-container'>  
      <p>{fullDate}</p>
      <p>{localTime}</p>
    
      <div className='test'>
        <div className='team-container'>
          <p>{game.homeTeam.name}</p>
            <img height="40" src={`./src/assets/logos/${game.homeTeam.abbreviation}.svg`} alt="Home team NBA logo"/>
        </div>

        <div className='team-container'>
          <p>{game.awayTeam.name}</p>
            <img height="40" src={`./src/assets/logos/${game.awayTeam.abbreviation}.svg`} alt="Home team NBA logo"/>
        </div>
      </div>
      
      
    </div>
  )
}

export default Game
