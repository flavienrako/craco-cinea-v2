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

- [x] Home Movie list
  - [x] Suggestion carousel
  - [x] Paginate movie by query
  - [x] Filter year of publication, genre
  - [x] Add/remove to watchlist button
  - [x] Card view (thumbnail, title, year, star)
- [ ] Movie detail
  - [x] Add/remove to watchlist button
  - [x] View: thumbnail, title, description, star
  - [ ] View: duration, 10 last reviews, complete cast
- [ ] Watch list
  - [x] List views
  - [x] Action to delete movie from list
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
