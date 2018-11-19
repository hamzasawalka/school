import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

// Custom imports

import { TeacherComponent } from './teacher/teacher.component';

@Directive({
  selector: '[select]',
  providers: [ 
    
    TeacherComponent ]
})
export class SelectionDirective {

  public siblings:any[] = [];
  public parent:any = {};
  public clicked = this.teacherComponent.clicked;
  

  constructor(private elRef: ElementRef, private renderer: Renderer2,
     public teacherComponent: TeacherComponent) { }

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
    
    console.log( Object.keys(parent)  );
   
  }

  

}




