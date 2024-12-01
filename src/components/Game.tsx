import { useEffect, useState } from 'react'
import { GameType } from '../types/Game.type'

interface Props {
    game: GameType
}


const Game:React.FC<Props> = ({game}) => {

  return (
    <div>  
        <p>{game.id}</p>
        <p>{game.home_team.full_name}</p>
        <p>{game.visitor_team.full_name}</p>
        <p></p>
        <p></p>

        

    </div>
  )
}

export default Game
