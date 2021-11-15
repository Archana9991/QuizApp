import { Component, OnInit } from '@angular/core';

import { Question } from '../question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  showMessage: boolean = false;
  constructor(private questionservice: QuestionService ) { }

 
  
  
    ngOnInit(): void {}
  
  addQuestion(question:string,choice1:string, choice2: string, choice3: string,choice4:string,correct:string){
    
    this.questionservice.addQuestion({question,choice1,choice2,choice3,choice4,correct})
    .subscribe((res: any) => {
      console.log(res);
      this.showMessage = true;
    });
}

}