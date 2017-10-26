import { Component } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../heroes';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./style/heroes.css', './style/search.css']
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;

  onClick(filterClass) {
    this.heroes = HEROES.filter(hero => hero.class === filterClass)
  }
  onKey(event: any) {
    this.heroes = HEROES.filter(hero => hero.name.match(new RegExp('^' + event.target.value, 'i')))
  }
  }
