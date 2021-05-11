import { getRandomColor } from '../../../services';
import { settings } from '../../../settings';

export default class Orb {
  color: string;
  locX: number;
  locY: number;
  radius: number;

  constructor() {
    this.radius = 5;
    this.color = getRandomColor();
    this.locX = Math.floor(Math.random() * settings.worldWidth);
    this.locY = Math.floor(Math.random() * settings.worldHeight);
  }
}