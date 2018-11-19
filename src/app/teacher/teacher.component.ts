import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

// Custom imports
import { AppComponent } from '../app.component';



@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [ AppComponent ]
})
export class TeacherComponent implements OnInit {
  public answers = this.appComponent.answers;
  public bg = "pink";

  public clicked(bool) {
    if(bool) {
      return 'red';
    }
  }

  public parseInt(num) {
    return parseInt(num);
  }

  public editGrade(name, event) {
    for( var i = 0; i < this.appComponent.answers.length; i++) {
      if(name == this.appComponent.answers[i].name) {
        this.appComponent.answers[i].grade = event.target.value;
        this.appComponent.answers[i].bg = 'greenyellow';
      }
    }
    this.appComponent.logs.push("The teacher marked" + name + "'s answer with: "+ event.target.value);
    
  }

  

  

  constructor(public appComponent: AppComponent, private elRef: ElementRef, private renderer: Renderer2) {
    

   }

  ngOnInit() {
    console.log( this.clicked )

  }

}
