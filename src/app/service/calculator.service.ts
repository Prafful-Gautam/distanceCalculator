import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }


  postData(data){
    return this.http.post<{distance:number}>('http://localhost:3000/api', data).pipe(map(data => data.distance));
  }

  getData(){
    return this.http.get<any>('http://localhost:3000/api').pipe(map(data => {
      return data.data;
    }))



  }
}
