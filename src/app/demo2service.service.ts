import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { repos } from '../assets/repos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Demo2serviceService {

  constructor(private demo : HttpClient) { }
   
  fetchData() : Observable<any> {
    let link:string="https://api.github.com/users/adilfazal8486/repos";
    return this.demo.get(link)

}
}
