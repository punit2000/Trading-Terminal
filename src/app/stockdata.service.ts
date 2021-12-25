import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockdataService {

  constructor(private http:HttpClient) { }
  getdata():Observable<data>{

    let headers=new HttpHeaders().set('x-rapidapi-key','0bf9b724aemsha2b9dd3abeb974cp17b5c5jsnff2817d9956a')
    .set('x-rapidapi-host','nse-data1.p.rapidapi.com');
    let url='https://nse-data1.p.rapidapi.com/top_gainers';
     return this.http.get<data>(url,{headers});
   }

}
export interface data{
  //content:any;
}
