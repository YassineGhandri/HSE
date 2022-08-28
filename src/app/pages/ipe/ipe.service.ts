import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IPEService {

  constructor(private http:HttpClient) { }

  postIPE(data:any){
    return this.http.post<any>('http://localhost:3000/IPE/',data);
  }
  getIPE(){
    return this.http.get<any>('http://localhost:3000/IPE');
  }
  putIPE(data:any, id:number){
    return this.http.put<any>('http://localhost:3000/IPE/'+id,data)
  }
  deleteIPE(id:number){
    return this.http.delete<any>('http://localhost:3000/IPE/'+id)
  }
}
