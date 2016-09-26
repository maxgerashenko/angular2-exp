import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
import { routing }       from './app.routing';

import AppRootComponent            from './app.root.component';
import { HeroDetailComponent } from './app.hero-detail.component';
import { HeroesComponent }     from './app.heroes.component';
import { DashBoardComponent }    from './app.dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppRootComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashBoardComponent
  ],
  bootstrap: [ AppRootComponent ]
})

class AppModule { }

export default AppModule
