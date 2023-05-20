import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BASE_URL} from "../config/API";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apikey = process.env['NG_APP_API_KEY'];

  constructor(private http: HttpClient) {
  }

  //? Banner Data
  bannerDataApi(): Observable<Object & IResponse<ReadonlyArray<IMovie>>> {
    return this.http.get<IResponse<ReadonlyArray<IMovie>>>(`${BASE_URL}/trending/all/week?api_key=${this.apikey}`)
  }

  //? Trending Movies
  trendingMoviesApi(): Observable<Object & IResponse<ReadonlyArray<IMovie>>> {
    return this.http.get<IResponse<ReadonlyArray<IMovie>>>(`${BASE_URL}/trending/movie/day?api_key=${this.apikey}`);
  }
}
