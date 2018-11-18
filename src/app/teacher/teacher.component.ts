import { Component, OnInit } from '@angular/core';

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

  public editGrade(name, event) {
    for( var i = 0; i < this.appComponent.answers.length; i++) {
      if(name == this.appComponent.answers[i].name) {
        this.appComponent.answers[i].grade = event.target.value;
        this.appComponent.answers[i].bg = 'greenyellow';
      }
    }
    this.appComponent.logs.push("The teacher marked" + name + "'s answer with: "+ event.target.value);
    
    
    console.log(this.appComponent.answers);
  }

  constructor(public appComponent: AppComponent) { }

  ngOnInit() {
    
  }

}
