import { useEffect, useState } from 'react'
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
      </div>

      <div className='team-container'>
      <p>{game.awayTeam.name}</p>
      <p>{game.awayTeam.abbreviation}</p>
      </div>
      
    </div>
  )
}

export default Game
