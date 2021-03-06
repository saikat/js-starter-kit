# THIS IS DEPRECATED. USE [REACT-APOLLO-STARTER-KIT](https://github.com/saikat/react-apollo-starter-kit).
==================================




# Javascript starter kit for Brand New Congress
Create a new Webpack/Redux/React/Express app for Brand New Congress! This starter kit features:
* [React](https://facebook.github.io/react/) for frontend development
* [Redux](http://redux.js.org/) for frontend data management
* [React-router](https://github.com/reactjs/react-router) for clientside routing
* [Express](http://expressjs.com/) for the server
* [Webpack](https://webpack.github.io/) for development server + hot reloading clientside stuff
* [Nodemon](https://github.com/remy/nodemon) for hot reloading backend code
* [Rollbar](https://rollbar.com) for production error handling
* [Minilog](https://github.com/mixu/minilog) for client and server logging
* [Node-foreman](https://github.com/strongloop/node-foreman) for running both the Webpack server and Express server
* Automatic asset versioning for cache busting in production
* A sane setup for exception/error handling on both the client and server

# Making a new Brand New Congress JS app
1. Clone this starter kit
1. Change the git remote to point to your new project's repo with `git remote set-url origin <new-url>`
1. Change the README, package name in `package.json` and package license in `package.json` (we prefer `AGPL-3.0`).
1. [Set up an ESLint plugin in your code editor so that you catch coding errors and follow code style guidelines more easily!](https://medium.com/planet-arkency/catch-mistakes-before-you-run-you-javascript-code-6e524c36f0c8#.oboqsse48)
1. `npm install`
1. `npm shrinkwrap`
1. `npm run dev`
1. Navigate to `http://localhost:3000` to see your app in action.
1. Start making changes by working in the `src/frontend` and `src/backend` directories.
1. Deploy your app to [Heroku](https://heroku.com). Make sure to set the correct environment variables there based on what exists in .env locally!
