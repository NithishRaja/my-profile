# README

## installation

* run `npm install`
* should already have mongoDB and redis installed

## running app

* start mongoDB server
* start redis server
* run `npm start`

## editing code

* backend code is provided inside **server** folder
* place build file inside public folder and provide link to it inside index.html

## testing

* run `npm test` to run tests
* to add or edit existing tests go to `server/tests/index.js`

## features

* RESTful API
* retrieves data from mongoDB and sends it as json
* initial rendering of page is done via `ejs`
* after initial rendering `react` takes over completely
