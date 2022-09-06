import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MWAService {
  constructor(private http:HttpClient){}

  postMWA(data: any) {
    return this.http.post<any>('http://localhost:3000/MWA/',data);
  }
  getMWA() {
    return this.http.get<any>('http://localhost:3000/MWA');
  }
  putMWA(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/MWA/' + id, data)
  }
  deleteMWA(id: number) {
    return this.http.delete<any>('http://localhost:3000/MWA/' + id)
  }
}
