## <u>Showtime</u>

---

| Version            |
|:-------------------|
| [`0.3.0`](#v0.3.0) |
| [`0.2.0`](#v0.2.0) |
| [`0.1.0`](#v0.1.0) |


### <a id="v0.3.0"/>`0.3.0`

- Added active link to the navbar
- Added [`config`](./src/app/config) folder to handle anything related to the API (**base url**, etc)
- Added [`movies service`](./src/app/services/movies.service.ts) to handle the requests
- Added `.env` and its configuration to store the sensitive data (**Api key**, etc)
- Added [`types`](./src/app/types) folder to handle the data model (`interface`, `enum`, `type`)
- Added [`image`](./src/app/components/image) component to handle all the images in the app
- Added [`banner`](./src/app/pages/home/components/banner) component to handle the banner section
- Added [`movies`](./src/app/pages/home/components/movies) component to handle the list of the movies
- Added the `home`, `search`, and `movie-details` pages to the [app-routing.module.ts](./src/app/app-routing.module.ts)

### <a id="v0.2.0"/>`0.2.0`

- Added `pages` and `components` folder to organize the folder structure
- Added `bootstrap` to the project
- Completed the main layout (`header`, `main content`, `footer`)
- Completed navbar section in the `header`

### <a id="v0.1.0"/>`0.1.0`

- Added `change-log.md` to the app
- Removed initial codes
- Added [`.nvmrc`](./.nvmrc) to add the exact node version to the app
