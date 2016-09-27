import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private _heroesUrl = 'app/heroes';
  private _headers: Headers;

  constructor(private http: Http){};

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this._heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this._handleError);
  }

  private _handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  update( hero: Hero): Promise<Hero> {
    const url = `${this._heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this._headers})
      .toPromise()
      .then(() => hero)
      .catch(this._handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this._heroesUrl, JSON.stringify({name: name}), {headers: this._headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this._handleError);
  }

  delete(id:number): Promise<void> {
    let url = `${this._heroesUrl}/${id}`;
    return this.http
      .delete(url, {headers: this._headers})
      .toPromise()
      .then(()=> null)
      .catch(this._handleError);
  }
}
