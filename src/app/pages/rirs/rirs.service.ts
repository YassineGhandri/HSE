import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RIRS } from './rirs';

@Injectable({
  providedIn: 'root'
})
export class RIRSService { 
 
  
  action_title!:string;
  constructor(private http: HttpClient) { }

  postRirs(data: any) {
    return this.http.post<any>('http://localhost:7000/RIRS/',data);
  }
  getRirs() {

    return this.http.get<any>('http://localhost:7000/RIRS');
  }
  putRirs(data: any, id: number) {
    
   return this.http.put<any>('http://localhost:7000/RIRS/' + id, data)
  }
  deleteRirs(id: number) {
    return this.http.delete<any>('http://localhost:7000/RIRS/' + id)
  }
  getRIRSById(id:string){
    return this.http.get<RIRS>('http://localhost:7000/RIRS/'+id);
  }  

}
