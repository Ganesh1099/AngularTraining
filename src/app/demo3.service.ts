import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Demo3Service {

  constructor(private demo : HttpClient) { }

  readData() : Observable<any> {
    let link:string="https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR";
    return this.demo.get(link)

}
}
