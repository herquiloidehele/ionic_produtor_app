import {Directive, ElementRef, Input, Renderer} from '@angular/core';

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide-header]',
  host : {
    '(ionScroll)': 'onScrollContent($event)'
  }
})
export class HideHeaderDirective {


  @Input('header') header: HTMLElement;
  protected scrollContent: any;

  constructor(public elementRef: ElementRef, public render: Renderer) {
    console.log('Hello HideHeaderDirective Directive');
  }

  ngOnInit(){
    this.render.setElementStyle(this.header, 'webkitTransition', '700ms');
    this.scrollContent = this.elementRef.nativeElement.getElementsByClassName('scroll-content')[0];
    this.render.setElementStyle(this.scrollContent, 'webkitTransition', 'margin-top 700ms')

  }


  onScrollContent(event){
    if(event.scrollTop > 56){
      this.render.setElementStyle(this.header, 'top', '-56px');
      this.render.setElementStyle(this.scrollContent, 'margin-top', '0px');
    }else{
      this.render.setElementStyle(this.header, 'top', '0px');
      this.render.setElementStyle(this.scrollContent, 'margin-top', '65px')
    }
  }

}
