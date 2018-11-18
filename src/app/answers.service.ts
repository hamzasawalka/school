import { Injectable } from '@angular/core';

@Injectable()
export class AnswersService {
 answerEvents: any[];
 logs: any[];

  constructor() { 
    this.answerEvents = [];
    this.logs = [];
  }
}
