import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  postDep(data:any){
    return this.http.post<any>('http://localhost:7000/departments/',data);
  }
  getDep(){
    return this.http.get<any>('http://localhost:7000/departments');
  }
  putDep(data:any, id:number){
    return this.http.put<any>('http://localhost:7000/departments/'+id,data)
  }
  deleteDep(id:number){
    return this.http.delete<any>('http://localhost:7000/departments/'+id)
  }
  getDepById(id:string){
    return this.http.get<any>('http://localhost:7000/departments/'+id);
  }
}
