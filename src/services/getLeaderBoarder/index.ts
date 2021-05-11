import { Player } from '../../socket/models';
import { players } from '../../services';

export const getLeaderBoard = () => {
  players.sort((a: Player,b: Player)=>{
    return b.playerData.score - a.playerData.score;
  });
  return players.map((curPlayer)=>{
    return{
      name: curPlayer.playerData.name,
      score: curPlayer.playerData.score
    }
  })
}