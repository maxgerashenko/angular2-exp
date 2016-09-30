import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';

import { HeroService } from './app.hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/app.heroes.component.html',
  styleUrls: [ 'app/app.heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(
    private _heroSevise: HeroService,
    private _router: Router
  ){}

  title: string = `Tour of Heroes`;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }

  onFavorite(hero: Hero): void {
    hero.favorite = !hero.favorite;
    this._heroSevise.update(hero);
  }

  getHeroes(): void{
    this._heroSevise.getHeroes().then( res => this.heroes = res );
  }

  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this._heroSevise.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  deleteHero(hero: Hero): void {
    this._heroSevise
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

}
