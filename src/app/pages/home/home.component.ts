import {Component, ViewEncapsulation} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Title} from "@angular/platform-browser";
import {MOVIE_GENRE} from "../../types/movie.type";

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  banners: ReadonlyArray<IMovie> | undefined = [];
  trendingMovies: ReadonlyArray<IMovie> | undefined = [];
  actionMovies: ReadonlyArray<IMovie> | undefined = [];
  adventureMovies: ReadonlyArray<IMovie> | undefined = [];
  animationMovies: ReadonlyArray<IMovie> | undefined = [];
  comedyMovies: ReadonlyArray<IMovie> | undefined = [];
  documentaryMovies: ReadonlyArray<IMovie> | undefined = [];
  scienceFictionMovies: ReadonlyArray<IMovie> | undefined = [];
  thrillerMovies: ReadonlyArray<IMovie> | undefined = [];

  constructor(private moviesService: MoviesService, private title: Title) {
    this.title.setTitle("Showtime | Home");
  }

  ngOnInit() {
    this.getBannerData();
    this.getTrendingMovies();
    this.getMoviesWithGenre(MOVIE_GENRE.ACTION);
    this.getMoviesWithGenre(MOVIE_GENRE.ADVENTURE);
    this.getMoviesWithGenre(MOVIE_GENRE.COMEDY);
    this.getMoviesWithGenre(MOVIE_GENRE.ANIMATION);
    this.getMoviesWithGenre(MOVIE_GENRE.DOCUMENTARY);
    this.getMoviesWithGenre(MOVIE_GENRE.SCIENCE_FICTION);
    this.getMoviesWithGenre(MOVIE_GENRE.THRILLER);
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

  //? Movies by Genre
  getMoviesWithGenre(genre: MOVIE_GENRE) {
    this.moviesService.MoviesWithGenreApi(genre).subscribe((res) => {
      switch (genre) {
        case MOVIE_GENRE.ACTION: {
          this.actionMovies = res?.results;
          break;
        }
        case MOVIE_GENRE.ADVENTURE: {
          this.adventureMovies = res?.results;
          break;
        }
        case MOVIE_GENRE.COMEDY: {
          this.comedyMovies = res?.results;
          break;
        }
        case MOVIE_GENRE.DOCUMENTARY: {
          this.documentaryMovies = res?.results;
          break;
        }
        case MOVIE_GENRE.ANIMATION: {
          this.animationMovies = res?.results;
          break;
        }
        case MOVIE_GENRE.SCIENCE_FICTION: {
          this.scienceFictionMovies = res?.results;
          break;
        }
        case MOVIE_GENRE.THRILLER: {
          this.thrillerMovies = res?.results;
          break;
        }
      }
    });
  }
}
