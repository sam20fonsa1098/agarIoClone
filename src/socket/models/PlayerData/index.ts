import { getRandomColor } from '../../../services';
import { settings } from '../../../settings';

export default class PlayerData {
  name: string;
  locX: number;
  locY: number;
  radius: number;
  color: string;
  score: number;
  orbsAbsorbed: number;
  playersAbsorbed: number;
  alive: boolean;

  constructor(name: string) {
    this.name = name;
    this.color = getRandomColor();
    this.radius = settings.defaultSize;
    this.locX = Math.floor(Math.random() * settings.worldWidth + 100);
    this.locY = Math.floor(Math.random() * settings.worldHeight + 100);
    this.score = 0;
    this.orbsAbsorbed = 0;
    this.alive = true;
    this.playersAbsorbed = 0;
  }

}