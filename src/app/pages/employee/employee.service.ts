import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  

  constructor(private http:HttpClient) { }
  getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:7000/employee/')
  }
  postEmployee(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:7000/employee/',data)
  }
 
  putEmployee(data:NavigationTimingType, id:number):Observable<any>{
    return this.http.put<any>('http://localhost:7000/employee/'+id,data)
  }
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete('http://localhost:7000/employee/'+id)
  }
  getEmployeeById(id:string):Observable<Employee>{
    return this.http.get<Employee>('http://localhost:7000/employee/'+id)
  }

 /* getEmployees(employees:Employee[]){
    this.getEmployee().subscribe({
      next:(res) => {
      employees = res;
    console.log(res)}});
  }*/
}
