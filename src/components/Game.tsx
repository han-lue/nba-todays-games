import { useEffect, useState } from 'react'
import { GameType } from '../types/Game.type'

interface Props {
    game: GameType
}


const Game:React.FC<Props> = ({game, homeTeam, awayTeam}) => {

  return (
    <div>  
        <p>{game.id}</p>
        <p>{homeTeam.name}</p>
        <p>{awayTeam.name}</p>
        
       

        

    </div>
  )
}

export default Game
