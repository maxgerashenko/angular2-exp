import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';

import { HeroService } from './app.hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/app.hero-detail.component.html',
  styleUrls: ['app/app.hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  constructor(private _heroservice: HeroService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this._heroservice.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  save(): void {
    this._heroservice.update( this.hero )
      .then( ()=> this.goBack() );
  }

  goBack(): void {
    window.history.back();
  }

  @Input() hero: Hero;

}
