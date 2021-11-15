import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";

  constructor(private router:Router) { }

  ngOnInit(): void {}
    onsubmit(){
      this.router.navigate(["/home"]);
    }
  }


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { LoginService } from '../services/login.service';
// import { User } from '../user';
// // import { AuthService } from '../services/auth.service';
// // import { TokenStorageService } from '../services/token-storage.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
  
//   user=new User();
//   username="";
//   password="";
//   constructor(private router:Router,private loginservice: LoginService) { }

//   ngOnInit(): void {}
//   loginpage(){
//     this.loginservice.loginfromDB(this.user).subscribe( 
//       data=>{
//        console.log("response received");
//        this.router.navigate(['/home'])

//       });
//     }
//   }
// error => console.log("exception occured"); this.msg "Bad credential ,Please enter valid credential"; }}