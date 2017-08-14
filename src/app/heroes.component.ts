import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css'],
// the back tick multi-line string is possible because of template literals.
// And template literals are an ES6 thing.
// hero in onSelect is tied to the let 'hero' designation
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  //everything in here makes this data public.
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // the callback sets the component's heroes property to the array of heroes returned by the service.
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}



/** the double curly braces are Angular's interpolation binding syntax. */
