import { GameType } from '../types/Game.type'

import '../styles/Game.css'

interface Props {
    game: GameType,
}


const Game:React.FC<Props> = ({game}) => {

  return (
    <div className='game-container'>  
    
      <div className='team-container'>
        <p>{game.homeTeam.name}</p>
        <p>{game.homeTeam.abbreviation}</p>
        <img src={`./src/assets/logos/${game.homeTeam.abbreviation}.svg`} alt="Home team NBA logo"/>
      </div>

      <div className='team-container'>
        <p>{game.awayTeam.name}</p>
        <p>{game.awayTeam.abbreviation}</p>
        <img src={`./src/assets/logos/${game.awayTeam.abbreviation}.svg`} alt="Away team NBA logo"/>
      </div>
      
    </div>
  )
}

export default Game
