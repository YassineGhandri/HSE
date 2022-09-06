import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StopCardService {

  constructor(private http:HttpClient) { }
  postStopCard(data: any) {
    return this.http.post<any>('http://localhost:3000/stop_card/',data);
  }
  getStopCard() {
    return this.http.get<any>('http://localhost:3000/stop_card');
  }
  putStopCard(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/stop_card/' + id, data)
  }
  deleteStopCard(id: number) {
    return this.http.delete<any>('http://localhost:3000/stop_card/' + id)
  }
}
