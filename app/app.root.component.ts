import { Component, Input, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './app.hero.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.root.component.html',
  styleUrls: ['app//app.root.component.css'],
  providers: [HeroService]
})

class AppRootComponent implements OnInit {
  constructor(private _heroSevise: HeroService){}
  title: string = `Tour of Heroes`;
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    color: '',
    favorite: false
  };
  heroes: Hero[];
  selectedHero: Hero;
  onSelectHero(hero:Hero): void{
    this.selectedHero = hero;
    console.log(this.selectedHero)
  }
  getHeroes(): void{
    this._heroSevise.getHeroes().then( res => this.heroes = res );
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

export default AppRootComponent
