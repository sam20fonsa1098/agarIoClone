import { Orb, Player } from '../../socket/models';
import { settings } from '../../settings';

let orbs: Array<Orb> = [];
let players: Array<Player> = [];

const initGame = () => {
  for (let i = 0; i < settings.defaultOrbs; i++) {
    orbs.push(new Orb());
  }
}

initGame();

export { orbs, players };