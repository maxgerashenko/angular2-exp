import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './app.hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'app/app.dashboard.component.html',
  styleUrls: [ 'app/app.dashboard.component.css' ],
  providers: [HeroService]
})

export class DashBoardComponent implements OnInit {

  constructor (
    private _heroSevise: HeroService,
    private router: Router
  ) {}

  heroes: Hero [] = [];

  ngOnInit(): void {
    this._heroSevise.getHeroes()
      .then(
      (heroes) => {
        let favorite = heroes.filter(h => h.favorite);
        this.heroes = (favorite.length)? favorite : heroes.slice(1, 5);
      }
    );
  }

  gotoDetail(hero: Hero): void {
    console.log('go to detail hero. ',hero);
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
