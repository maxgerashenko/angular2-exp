import { Directive, Input, HostBinding } from '@angular/core'

@Directive({
  selector: '[showOneTab]'
})

export class showOneTabDirective {

  @Input('showOneTab')
  id: string;

  @Input()
  active:boolean = false;

  @HostBinding('hidden')
  get hidden(){
    return !this.active;
  }


}
