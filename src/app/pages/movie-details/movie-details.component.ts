import {Component} from '@angular/core';
import {TRAILER_BASE_URL} from "../../config/API";
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services/movies.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  movie: IMovie | null = null;
  trailer: string | undefined = "";
  MovieCast: ReadonlyArray<ICast> | undefined = [];
  trailer_base_url: string = TRAILER_BASE_URL;
  isLoading: boolean = false;

  constructor(
    private movieService: MoviesService,
    private router: ActivatedRoute,
    private title: Title
  ) {
    this.title.setTitle("Showtime | Movie Details");
  }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.getMovie(id);
      this.getVideo(id);
      this.getMovieCast(id);
    }
  }

  getMovie(id: string) {
    this.isLoading = true;
    this.movieService.movieDetailsApi(id).subscribe((res) => {
      this.movie = res;
      this.title.setTitle(res.original_title);
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  };

  getVideo(id: string) {
    this.movieService.movieTrailerApi(id).subscribe(res => {
      this.trailer = res.results.find(trailer => trailer.type === "Trailer" || trailer.type === "Clip")?.key
    })
  };

  getMovieCast(id: string) {
    this.movieService.movieCastApi(id).subscribe(res => {
      this.MovieCast = res.cast;
    })
  };
}
