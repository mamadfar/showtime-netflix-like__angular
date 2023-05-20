import { Component } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchResults: ReadonlyArray<IMovie> | undefined = [];

  constructor(private moviesService: MoviesService) {}

  searchForm = new FormGroup({
    "movieName": new FormControl(null)
  });

  //? Search
  submitForm() {
    this.moviesService.searchMoviesApi(this.searchForm.value.movieName ?? "").subscribe(res => {
      this.searchResults = res.results;
    })
  };
}
