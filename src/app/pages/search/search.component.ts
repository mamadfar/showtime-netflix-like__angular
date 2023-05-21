import { Component } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchResults: ReadonlyArray<IMovie> | undefined = [];

  constructor(private moviesService: MoviesService, private title: Title) {
    this.title.setTitle("Showtime | Search");
  }

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
