import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
import { HttpModule }    from '@angular/http';
import { routing }       from './app.routing';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './app.in-memory-data.service';

import AppRootComponent        from './app.root.component';
import { HeroDetailComponent } from './app.hero-detail.component';
import { HeroesComponent }     from './app.heroes.component';
import { DashBoardComponent }  from './app.dashboard.component';
import { HeroSearchComponent } from './app.hero-search.component';

import { CollapseOnClickDirective }     from './app.collapse-on-click.directive';
import { showOneTabContainerDirective } from './app.showOneTabContainer.directive';
import { showOneTabDirective }          from './app.showOneTab.directive'
import { showOneTabTriggerDirective }   from './app.showOneTabTrigger.directive'

import { HeroPipe } from './app.heropipe.pipe';

import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppRootComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashBoardComponent,
    HeroSearchComponent,
    CollapseOnClickDirective,
    showOneTabContainerDirective,
    showOneTabDirective,
    showOneTabTriggerDirective,
    HeroPipe
  ],
  bootstrap: [ AppRootComponent ]
})

class AppModule { }

export default AppModule
