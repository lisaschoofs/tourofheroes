import { Component, Input } from '@angular/core';

import { Hero } from './hero';
// @Component decorator provides the Angular metadata for the component. The CSS selector name, hero-detail,
// will match the element tag thtat identifies this component within a parent component's template.
@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `
})

//always export the component class because you'll always import it elsewhere
export class HeroDetailComponent {
  @Input() hero: Hero;
  //instance of Hero.
}
