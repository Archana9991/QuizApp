import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../question';
import { QuestionService } from '../services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],

})
export class QuizComponent implements OnInit {
  questions: Array<Question> = []
  currentQuestion:number=0;
  marksGot = 0;
  correctAnswers = 0;
 

  isSubmit = false;
 
constructor(private questionservice: QuestionService,private route: ActivatedRoute) { }

  ngOnInit(): void {
   console.log('Called once on load of the component');
   this.questionservice.fetchAllQuestions()
      .subscribe((res: any) => {
        console.log(res);
        this.questions = res;

  });
  }


submitQuiz() {
  Swal.fire({
    title: 'Confirm Quiz Submmision?',
    showCancelButton: true,
    confirmButtonText: `Submit`,
    icon: 'info',
  }).then((question) => {
    if (question.isConfirmed) {
      this.isSubmit=true;
      this.questions.forEach((question) =>{
        if(question.givenAnswer == question.correct)
        this.correctAnswers=this.correctAnswers+10;
        this.marksGot=this.correctAnswers;
      }
    

    



      )};

    console.log("Correct Answer:"+this.correctAnswers);
console.log("Marks"+this.marksGot)


    }
  )};
}












 
