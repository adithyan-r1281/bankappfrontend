import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execute

  
  //properties
  aim="connect with us easily";
  accounts="Enter your Account Number";
  acno="";
  pswd="";


  //user defined functions //4th execute
  acnoChange(event: any){
    this.acno=event.target.value;
    console.log(this.acno);
  }
  pswdChange(event: any){
    this.pswd=event.target.value;
    console.log(this.pswd);


  }
  
  login(){
    // alert('login clicked')
    var acno=this.acno;
    var pswd=this.pswd;
    var userdetails=this.userdetails;
    if(acno in userdetails){
      if(pswd ==userdetails[acno]['password']){

      
      alert("successfull login")
    }else{
      alert("invalid password")
    }
  }else{
    alert("invalid user details")
  }
}

userdetails:any={
  1000:{acno:1000,username:"Adithyan",password:1000,balance:1000},
  1001:{acno:1001,username:"Ram",password:1001,balance:1000},
  1002:{acno:1002,username:"Adwaith",password:1002,balance:1000}
}
  
 

  constructor() { }//1st execute
  //special member function,automatically invokes when an object is created

  ngOnInit(): void {//2nd execute- life cycle hooks of angular-
    //initial process of component initialization
  }

}
