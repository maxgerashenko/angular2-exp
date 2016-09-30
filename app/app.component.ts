import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
              <h2>{{hero.name}} details!</h2>
              <div><label>id: </label>{{hero.id}}</div>
              <div><label>name: </label>{{hero.name}}</div>`
})

export class AppComponent {
  title: `Tour of Herous`;
  hero: {};
}

//export class Hero {
//  id: 1;
//  name: `Windstorm`;
//};
