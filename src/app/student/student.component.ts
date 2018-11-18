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
  public logs = this.appComponent.logs;

  getAnswer(answer, name) {
    this.appComponent.answers.push({ forTeacher: true, name: name, answer: answer, grade: null, bg: 'pink' }) ;
    this.appComponent.logs.push("The student submitted an answer.")
  }

  constructor(public appComponent: AppComponent) { }

  ngOnInit() {
  }

}
