import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';



@Directive({
  selector: '[select]',
  providers: [ ]
})
export class SelectionDirective {

  public siblings:any[] = [];
  public parent:any = {};
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  performTask() {
    var parent = this.renderer.parentNode(this.elRef.nativeElement);
    this.parent = parent;
    var siblings = this.renderer.parentNode(parent).children;
    this.siblings = siblings;

    for (var i = 0; i < siblings.length; i++) {
      this.renderer.removeClass(siblings[i], 'clicked');
    } 
    this.renderer.addClass(parent, 'clicked'); 
    
    
    console.log(  );
   
  }

  

}




