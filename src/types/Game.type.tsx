import { TeamType } from "./Team.type";

export type GameType = {
    id: number;
    homeTeam: TeamType;
    awayTeam: TeamType;
    postSeason: boolean;
}