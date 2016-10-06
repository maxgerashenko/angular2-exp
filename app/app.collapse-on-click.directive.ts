import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core'

@Directive({
  selector: '[collapse-on-click]'
})

export class CollapseOnClickDirective {
  isCollapsed = true;

  @HostBinding("class.collapsed")
  get collapsed(){
    return this.isCollapsed;
  }

  @HostListener('click')
  toggle() {
    console.log('collapsed');
    this.isCollapsed = !this.isCollapsed;
  }
}
