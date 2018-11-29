import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlltailorService {

  constructor(private http:HttpClient) { }

  getAllTailors(){
    return this.http.get("http://localhost:8888/tailor/all")
  }

  getOneTailor(id){
    return this.http.get("http://localhost:8888/tailor/get/" + id)
  }

  addTailor(at){
    console.log("In addtailor Service")
    console.log(at)
    return this.http.post("http://localhost:8888/tailor/add", at)
  }


}
