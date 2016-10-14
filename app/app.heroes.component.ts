import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';

import { HeroService } from './app.hero.service';

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/app.heroes.component.html',
  styleUrls: [ 'app/app.heroes.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(500, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 0.4})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ]),
    trigger('heroFav', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: `scale(1.1)`
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})

export class HeroesComponent implements OnInit {

  constructor(
    private _heroSevise: HeroService,
    private _router: Router
  ){}

  title: string = `Tour of Heroes`;
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    color: '',
    favorite: false
  };
  heroes: Hero[];
  selectedHero: Hero;

  // collapsed-on-click
  collapsed: boolean = true;
  onToggleCollapsed(collapsed: boolean): void {
    console.log("param 'collapsed'", collapsed);
    console.log('this.collapsed',this.collapsed);
    this.collapsed = !this.collapsed;
  }

  onSelect(hero:Hero): void {
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
