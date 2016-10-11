import { Directive, Input, HostBinding, HostListener } from '@angular/core';
import { showOneTabContainerDirective } from './app.showOneTabContainer.directive'

@Directive({
  selector: '[showOneTabTrigger]'
})

export class showOneTabTriggerDirective {

  @Input('showOneTabTrigger')
  id: string;

  @Input()
  active = false;

  @HostBinding("class.active")
  get selected(){
    return this.active;
  }

  @HostListener('click')
  click() {
    this.showOneTabContainer.show(this.id)
  }

  constructor(private showOneTabContainer: showOneTabContainerDirective){
    this.showOneTabContainer.add(this);
  }

}
