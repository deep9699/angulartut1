import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url:string='http://localhost:3000/student/';

  constructor(private _http:HttpClient) { 

  }
  getAllStudent(){
    return this._http.get(this.url);
  }
}
