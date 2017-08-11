import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; //ng-model is part of this

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  // in general, the declarations array contains a list of application components, pipes, and directives that belong
  // to the module. A componenet must be declared in a module before other components can reference it.
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
