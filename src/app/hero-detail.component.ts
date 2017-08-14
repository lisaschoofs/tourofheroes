import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService }              from './hero.service';
import { Hero }                     from './hero';
import 'rxjs/add/operator/switchMap';

// @Component decorator provides the Angular metadata for the component. The CSS selector name, hero-detail,
// will match the element tag thtat identifies this component within a parent component's template.

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})

//always export the component class because you'll always import it elsewhere
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  //instance of Hero.

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

}
