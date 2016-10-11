import { Directive, Input, QueryList, ContentChildren } from '@angular/core';
import { showOneTabTriggerDirective } from './app.showOneTabTrigger.directive'
import { showOneTabDirective } from './app.showOneTab.directive'

@Directive({
  selector: '[showOneTabContainer]'
})

export class showOneTabContainerDirective {

  @ContentChildren(showOneTabDirective)
  items: QueryList<showOneTabDirective>;

  triggers: showOneTabTriggerDirective[] = [];

  add( trigger:showOneTabTriggerDirective ){
    this.triggers.push(trigger)
  }

  show( id: string){
    this.items.forEach((item) => item.active = item.id === id);
    this.triggers.forEach((item:showOneTabTriggerDirective) => item.active = item.id===id);
  }

  constructor(){

  }
}
