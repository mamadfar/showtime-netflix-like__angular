import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BASE_URL} from "../config/API";
import {HttpClient} from "@angular/common/http";
import {MOVIE_GENRE} from "../types/movie.type";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apikey = process.env['NG_APP_API_KEY'];

  constructor(private http: HttpClient) {
  };

  //? Banner Data
  bannerDataApi(): Observable<Object & IResponse<ReadonlyArray<IMovie>>> {
    return this.http.get<IResponse<ReadonlyArray<IMovie>>>(`${BASE_URL}/trending/all/week?api_key=${this.apikey}`)
  };

  //? Trending Movies
  trendingMoviesApi(): Observable<Object & IResponse<ReadonlyArray<IMovie>>> {
    return this.http.get<IResponse<ReadonlyArray<IMovie>>>(`${BASE_URL}/trending/movie/day?api_key=${this.apikey}`);
  };

  //? Search Movies
  searchMoviesApi(query: string): Observable<Object & IResponse<ReadonlyArray<IMovie>>> {
    return this.http.get<IResponse<ReadonlyArray<IMovie>>>(`${BASE_URL}/search/movie?api_key=${this.apikey}&query=${query}`);
  };
  //? Movie Details
  movieDetailsApi(id: string): Observable<Object & IMovie> {
    return this.http.get<IMovie>(`${BASE_URL}/movie/${id}?api_key=${this.apikey}`);
  };

  //? Movie Trailer
  movieTrailerApi(id: string): Observable<Object & ITrailerResponse<ReadonlyArray<ITrailer>>> {
    return this.http.get<ITrailerResponse<ReadonlyArray<ITrailer>>>(`${BASE_URL}/movie/${id}/videos?api_key=${this.apikey}`);
  };

  //? Movie Cast
  movieCastApi(id: string): Observable<Object & ICastResponse<ReadonlyArray<ICast>, ReadonlyArray<ICrew>>> {
    return this.http.get< ICastResponse<ReadonlyArray<ICast>, ReadonlyArray<ICrew>>>(`${BASE_URL}/movie/${id}/credits?api_key=${this.apikey}`);
  };

  //? Movies With Genre
  MoviesWithGenreApi(genre: MOVIE_GENRE): Observable<Object & IResponse<ReadonlyArray<IMovie>>> {
    return this.http.get<IResponse<ReadonlyArray<IMovie>>>(`${BASE_URL}/discover/movie?api_key=${this.apikey}&with_genres=${genre}`);
  };
}
