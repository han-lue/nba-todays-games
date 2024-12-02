import { useEffect, useState } from 'react'
import { GameType } from '../types/Game.type'
import { TeamType } from '../types/Team.type'

interface Props {
    game: GameType,
}


const Game:React.FC<Props> = ({game}) => {

  return (
    <div>  
        <p>{game.id}</p>
        <p>{game.homeTeam.name}</p>
        <p>{game.awayTeam.name}</p>
    </div>
  )
}

export default Game
