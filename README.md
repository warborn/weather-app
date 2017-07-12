Weather Application based on the curriculum of the React Fundamentals course at [tylermcginnis.com](https://tylermcginnis.com/)
======

Some of the concepts applied are:
- React Components
- PropTypes
- React Router
- OpenWeatherMap API integration
- AJAX calls with [axios](https://github.com/mzabriskie/axios)
- Webpack configuration
- NPM scripts to deploy to production using firebase
- ES6/7 features like arrow functions, async/await, object destructuring

### You can find the live version [here](https://wb-weather-app.netlify.com/)

Enter a city name and click the "Get Weather" button to search for the current forecast of that city

![Image of the home page](https://s20.postimg.org/xdcgvgugd/home.jpg)

See a list of the the next 5 days forecast weather

![Image of the home page](https://s20.postimg.org/ht534xkbx/forecast-list.jpg)

Click one day to see more details about that day's weather

![Image of the home page](https://s20.postimg.org/pjbva2mnh/forecast-details.jpg)

### Installation

Install all the dependencies.

```sh
$ cd weather-app
$ npm install
```

Try it on your local environment, execute the following command and wait for webpack to finish and go to http://localhost:8080/
```sh
$ npm run start
```

Build for production with:
```sh
$ npm run build
```