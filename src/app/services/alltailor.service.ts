import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlltailorService {

  constructor(private http:HttpClient) { }

  getAllTailors(){
    return this.http.get("https://dressmakers.cfapps.io/tailor/all")
  }

  getOneTailor(id){
    return this.http.get("https://dressmakers.cfapps.io/tailor/get/" + id)
  }

}
