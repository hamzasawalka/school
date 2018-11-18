import { Component } from '@angular/core';

// Custom imports
import { AnswersService } from './answers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnswersService]
})
export class AppComponent {
  title = 'school';

  public answers = this.answersService.answerEvents;
  public logs = this.answersService.logs;

  constructor(public answersService: AnswersService) { }
}
