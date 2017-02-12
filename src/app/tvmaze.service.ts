import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TvmazeService {
  private apiURL = 'https://api.tvmaze.com/';
  static query:string;
  constructor(private http:Http) { }

  // Método para hacer una peticion.
  search(searchParam:string): Observable<any> {
    return this.http.get(this.apiURL+"search/shows?q="+searchParam).map(response => response.json());
  }

  searchById(id): Observable<any> {
     return this.http.get(this.apiURL+"shows/"+id).map(response => response.json());
  }

  // searchEpisodes(id): Observable<any>{
  //   return this.http.get(this.apiURL+"shows/"+id+"/episodes").map(response => response.json());
  // }
  //
  // searchCast(id): Observable<any> {
  //   return this.http.get(this.apiURL+"shows/"+id+"/cast").map(response => response.json());
  // }


}
