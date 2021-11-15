import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  questions: Array<Question> = []

  constructor(private questionservice: QuestionService) { }

  ngOnInit(): void {
    console.log('Called once on load of the component');
   
    this.questionservice.fetchAllQuestions()
      .subscribe((res: any) => {
        console.log(res);
        this.questions = res;

  });

  
}
}