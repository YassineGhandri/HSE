import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
   isLogged=false;

  constructor(private builderForm:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm=this.builderForm.group({
      email : ['',Validators.required],
      password:['',Validators.required],

    })

  }
  login(){
    this.authService.getUser().subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
      });
      if(user){
       
        this.loginForm.reset();       
        this.router.navigate(['home']);
      }
      else{
        alert('user not found');
      }
    })

  }

  
}
