import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core'

@Directive({
  selector: '[collapse-on-click]',
  exportAs: 'collapsible'
})

export class CollapseOnClickDirective {

  @Input("collapsed")
  isCollapsed = true;

  @Output("onToggle")
  collapsedOutPut = new EventEmitter();

  @HostBinding("class.collapsed")
  get collapsed(){
    return this.isCollapsed;
  }

  @HostListener('click')
  toggle() {
    console.log('collapsed');
    this.isCollapsed = !this.isCollapsed;
    this.collapsedOutPut.emit(this.isCollapsed);
  }
}
