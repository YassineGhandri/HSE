import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {    

  constructor(private http:HttpClient,
    private router:Router) { }

  postUser(data:any){
    return this.http.post<any>('http://localhost:3000/signupUser/',data);
  }
  getUser(){
    return this.http.get<any>('http://localhost:3000/signupUser');
  }
  putUser(data:any, id:number){
    return this.http.put<any>('http://localhost:3000/signupUser/'+id,data)
  }
  deleteUser(id:number){
    return this.http.delete<any>('http://localhost:3000/signupUser/'+id)
  } 
 
}
