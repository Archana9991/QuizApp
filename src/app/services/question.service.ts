import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  fetchAllQuestions(){
    // return this.http.get( environment.baseUrl);
    return this.http.get( 'http://localhost:9000/questions/');
  }

  addQuestion(question: any){
    return this.http.post('http://localhost:9000/questions/', question)
  }
  // public evalQuiz(questions:any) {
  //   return this.http.post('http://localhost:8080/questions/', questions);
  // }
}
