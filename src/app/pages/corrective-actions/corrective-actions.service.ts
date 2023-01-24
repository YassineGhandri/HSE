import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorrectiveActionsService {



  constructor(private http:HttpClient) { }

  postCA(data:any){
    return this.http.post<any>('http://localhost:7000/correctiveActions/',data);
  }
  getCA(){
    return this.http.get<any>('http://localhost:7000/correctiveActions');
  }
  putCA(data:any, id:number){
    return this.http.put<any>('http://localhost:7000/correctiveActions/'+id,data)
  }
  deleteCA(id:number){
    return this.http.delete<any>('http://localhost:7000/correctiveActions/'+id)
  }
}
