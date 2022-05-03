# Cinea

This is a sample application to demonstrate the use of Recoil with React and Typescript for data-initialized application state management.

You can preview this react app at: [https://dbuilder-cinea.vercel.app/](https://dbuilder-cinea.vercel.app/).

## Support

- Create React App 5 powered by CRACO
- Typescript
- Airbnb Linting style
- Testing Library
- Material Ui 5
- Recoil state management
- dbuilder [repo](https://github.com/d-builder/core)

## Start the application

Clone or download the project then run

```bash
$ yarn install
$ yarn start
# OR
$ npm install
$ npm run start
```

## Features

- [ ] Home Movie list
  - [x] Suggestion carousel
  - [ ] Pagination & page size select
  - [ ] Filter by name, year of publication, genre
  - [ ] Add/remove to watchlist button
  - [ ] Card view (thumbnail, title, year, star)
- [ ] Movie detail
  - [ ] Add/remove to watchlist button
  - [x] View: thumbnail, title, description, duration, star, 10 last reviews, complete cast
- [ ] Watch list
  - [ ] List views
  - [ ] Action to delete movie from list
  - [ ] Reorder list drag and drop

## Structure

```

├── assets
├── components
|  ├── commons
|  |  └── WatchList
|  ├── layout
|  |  └── Nav
|  └── pages
|     ├── Home
|     |  ├── MovieList
|     |  ├── Suggestion
|     |  └── SuggestionList
|     └── Movie
├── hooks
├── interfaces
├── services
└── store

```
