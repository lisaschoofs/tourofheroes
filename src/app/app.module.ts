import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; //ng-model is part of this

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroService }         from './hero.service';

import { AppRoutingModule}     from './app-routing.module'


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService ],
  // in general, the declarations array contains a list of application components, pipes, and directives that belong
  // to the module. A component must be declared in a module before other components can reference it.
  bootstrap:    [ AppComponent ],
})
export class AppModule {
}
