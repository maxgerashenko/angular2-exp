import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name" #inputName>
    </div>`
})

class AppComponent {
  title: `Tour of Heroes`;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}


export default AppComponent
