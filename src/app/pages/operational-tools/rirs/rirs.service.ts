import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RIRSService {

  constructor(private http: HttpClient) { }

  postRirs(data: any) {
    return this.http.post<any>('http://localhost:3000/RIRS/',data);
  }
  getRirs() {
    return this.http.get<any>('http://localhost:3000/RIRS');
  }
  putRirs(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/RIRS/' + id, data)
  }
  deleteRirs(id: number) {
    return this.http.delete<any>('http://localhost:3000/RIRS/' + id)
  }
}
