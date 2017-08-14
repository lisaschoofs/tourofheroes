import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; //ng-model is part of this
import { HttpModule }    from '@angular/http';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroService }         from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  // in general, the declarations array contains a list of application components, pipes, and directives that belong
  // to the module. A component must be declared in a module before other components can reference it.
  bootstrap:    [ AppComponent ],
})
export class AppModule {
}
