import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHero(name: string): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.name === name));
  }
}
