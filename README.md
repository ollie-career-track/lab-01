# LAB - 01

## Node Ecosystem

### Author: Ollie Comet

### Links and Resources
* [submission PR](https://github.com/ollie-career-track/lab-01/pull/1)
* [travis](https://travis-ci.com/ollie-career-track/lab-01)

#### Documentation
* [jsdoc](./docs)

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns a boolean
* Endpoint: `/docs`
  * Returns JSDoc Documentation Pages
  
**npm scripts**
Lifecycle scripts included in 01-node-e
cosystem:
  start
    node index.js
  test
    jest --verbose --coverage

available via `npm run-script`:
  lint
    eslint '**/*.js'
  test-watch
    jest --watchAll --verbose --coverag
e
  jsdoc
    jsdoc -c ./docs/config/jsdoc.config
.json