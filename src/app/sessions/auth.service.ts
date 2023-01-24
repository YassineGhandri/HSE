import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  currentUser!: User|null;
  isAdmin!: boolean;
 

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor(private http: HttpClient, private router: Router) {}

  postUser(data: any) {
    return this.http.post<any>('http://localhost:7000/user/', data);
  }
  getUser() {
    return this.http.get<any>('http://localhost:7000/user');
  }
  putUser(data: any, id: number) {
    return this.http.put<any>('http://localhost:7000/user/' + id, data);
  }
  deleteUser(id: number) {
    return this.http.delete<any>('http://localhost:7000/signupUser/' + id);
  }

  login(name: string, pass: string) {
    this.getUser().subscribe((res) => {
      const user = res.find((a: any) => {
        return a.userName === name && a.password === pass;
      });
      console.log(user);
      if (user) {       
        this.currentUser=user;
        this.router.navigate(['/pages/dashboard']);
        if (user.userName === 'admin') {
          this.isAdmin = true;          
        }
      } else {       
        alert('user not found');
      }
    });
  }

  logout(){
    this.currentUser=null;
    console.log('out');
  }
}
