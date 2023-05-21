
interface IResponse<R> {
  page: number;
  results: R;
  total_pages: number;
  total_results: number;
}
interface ITrailerResponse<T> {
  id: number;
  results: T;
}
interface ICastResponse<T, C> {
  id: number;
  cast: T;
  crew: C;
}

interface IMovie {
  adult:boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video:boolean;
  vote_average: number;
  vote_count: number;
}

interface ITrailer {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

interface ICast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

interface ICrew {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

type Movies_Type = "Trending" | "Action" | "Adventure" | "Animation" | "Comedy" | "Documentary" | "Science-Fiction" | "Thriller";
