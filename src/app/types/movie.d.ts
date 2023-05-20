
interface IResponse<T> {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
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