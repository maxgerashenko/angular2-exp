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

  getHeroes(): void{
    this._heroSevise.getHeroes().then( res => this.heroes = res );
  }

  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
