import { Component, OnInit } from '@angular/core';

// Custom imports
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [ AppComponent ]
})
export class StudentComponent implements OnInit {
  public marks = this.appComponent.answers;

  getAnswer(answer, name) {
    for(var i = 0; i < this.appComponent.answers.length; i++)
    {
      if(name == this.appComponent.answers[i].name) {
        this.appComponent.answers[i].answer = answer;
        return;
      }
    }
    this.appComponent.answers.push({ forTeacher: true, name: name, answer: answer, grade: 99, bg: 'pink' }) ;
  }

  constructor(public appComponent: AppComponent) { }

  ngOnInit() {
  }

}
