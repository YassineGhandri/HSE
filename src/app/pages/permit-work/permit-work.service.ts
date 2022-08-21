import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermitWorkService {

  constructor(private http:HttpClient) { }

  postPW(data:any){
    return this.http.post<any>('http://localhost:3000/permit_work/',data);
  }
  getPW(){
    return this.http.get<any>('http://localhost:3000/permit_work');
  }
  putPW(data:any, id:number){
    return this.http.put<any>('http://localhost:3000/permit_work/'+id,data)
  }
  deletePW(id:number){
    return this.http.delete<any>('http://localhost:3000/permit_work/'+id)
  }

}
