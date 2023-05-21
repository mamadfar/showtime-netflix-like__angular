## <u>Showtime</u>

---

| Version            |
|:-------------------|
| [`0.5.0`](#v0.5.0) |
| [`0.4.0`](#v0.4.0) |
| [`0.3.0`](#v0.3.0) |
| [`0.2.0`](#v0.2.0) |
| [`0.1.0`](#v0.1.0) |


### <a id="v0.5.0"/>`0.5.0`

- Completed the [`movie details`](./src/app/pages/movie-details) page
- Added `movieDetailsApi`, `movieTrailerApi`, and `movieCastApi` to get the movie details, trailer, and movie cast to the [`movies service`](./src/app/services/movies.service.ts)
- Added `MoviesWithGenreApi` to get the movies by genre and show them in the home page to the [`movies service`](./src/app/services/movies.service.ts)
- Added `favicon` and `title` to the pages
- Added [`Preview`](./src/assets/showtime-preview.webm) to the [`change-log.md`](./change-log.md)

### <a id="v0.4.0"/>`0.4.0`

- Added `ReactiveFormsModule` to communicate with the form elements and get the data in a group to the [`app.module.ts`](./src/app/app.module.ts)
- Completed the [`search`](./src/app/pages/search) page
- Added `searchMoviesApi` to handle the search with request to the [`movies service`](./src/app/services/movies.service.ts)
- Changed the [`image`](./src/app/components/image) component to show a placeholder when there is no returned image

### <a id="v0.3.0"/>`0.3.0`

- Added active link to the navbar
- Added [`config`](./src/app/config) folder to handle anything related to the API (**base url**, etc)
- Added [`movies service`](./src/app/services/movies.service.ts) to handle the requests
- Added `HttpClientModule` for using services and able to call `http` requests to the [`app.module.ts`](./src/app/app.module.ts)
- Added `.env` and its configuration to store the sensitive data (**Api key**, etc)
- Added [`types`](./src/app/types) folder to handle the data model (`interface`, `enum`, `type`)
- Added [`image`](./src/app/components/image) component to handle all the images in the app
- Added [`banner`](./src/app/pages/home/components/banner) component to handle the banner section
- Added [`movies`](./src/app/pages/home/components/movies) component to handle the list of the movies
- Added `trendingMoviesApi` and `bannerDataApi` to get the list of movies and the banner for hero section to the [`movies service`](./src/app/services/movies.service.ts)
- Added the `home`, `search`, and `movie-details` pages to the [app-routing.module.ts](./src/app/app-routing.module.ts)
- Completed the [`home`](./src/app/pages/home) page

### <a id="v0.2.0"/>`0.2.0`

- Added [`pages`](./src/app/pages) and [`components`](./src/app/components) folder to organize the folder structure
- Added `bootstrap` to the project
- Completed the main layout (`header`, `main content`, `footer`)
- Completed navbar section in the `header`

### <a id="v0.1.0"/>`0.1.0`

- Added `change-log.md` to the app
- Removed initial codes
- Added [`.nvmrc`](./.nvmrc) to add the exact node version to the app
