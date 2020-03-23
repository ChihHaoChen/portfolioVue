<h1 align="center">portfolioVue - Open Source Project for Portfolio Websites</h1>

<p align="center">
<a href="https://vuejs.org/"><img src="https://img.shields.io/badge/Vue.js-orange.svg?style=flat" alt="Swift"/></a>
<img src="https://img.shields.io/github/license/ChihHaoChen/portfolioVue.svg?style=flat" alt="License: MIT">
<a href="https://github.com/ChihHaoChen/portfolioVue/graphs/contributors"><img src="https://img.shields.io/github/contributors/ChihHaoChen/portfolioVue.svg?style=flat" alt="Contributors"></a>
<a href="https://www.linkedin.com/in/chih-hao-chen-13583369/"><img src="https://img.shields.io/badge/Linkedin-@C.H.Chen-blue.svg" alt="Linkedin: @C.H.Chen"/></a>
</p>

<p align="center">
<img src="resources/screenshotPortfolioVueCornered-min.png" alt="Screenshots of the portfolio website">
</p>


## About the project
This project is developed mainly with Vue.js. The generated HTML files are deployed under [my GitHub account](https://chihhaochen.github.io/). My initial purpose of building this website with JS is to separate the front-end development from the back-end database, so anyone can reuse my repository to build up their portfolio website by configuring their API calls and populating their back-end database.

> The database is in JSON format deployed in Firebase, while all the images and PDF files are stored in Amazon S3. Once the API data gets fetched, Vuex, a well-known framework for state management, is exploited to mutate the state variables associated with the database data. The Nuxt framework has been embedded in this repository for SPA (Single Page Application). Finally, as for the UI components, Vuetify is used for the material design of this portfolio side-project. This website is also compatible with popular browsers in mobile devices.

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
