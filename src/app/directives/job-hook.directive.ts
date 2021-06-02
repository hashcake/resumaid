import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[jobHook]'
})
export class JobHookDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
