import {Component, ViewEncapsulation} from '@angular/core';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  banners: ReadonlyArray<IMovie> | undefined = [];
  trendingMovies: ReadonlyArray<IMovie> | undefined = [];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.getBannerData();
    this.getTrendingMovies();
  };

  //? Get banner results
  getBannerData() {
    this.moviesService.bannerDataApi().subscribe((res) => {
      this.banners = res?.results;
    });
  };

  //? Get trending movies
  getTrendingMovies() {
    this.moviesService.trendingMoviesApi().subscribe((res) => {
      this.trendingMovies = res?.results;
    });
  };
}
