// npm i express body-parser mongoose concurrently
// backend framework - express
// body-parser to handle data
// mongoose - to interect library
// concurrently - to run multiple npm scripts

// npm i -D nodemon
// -D dev dependency

// in scripts "start": "node server.js" -- here server will restart
// in scripts "server": "nodemon server.js"

// npm i -g create-react-app

// When you develop a FullStack you have to DEFINE PROXY in client's package.json file

// "client": "npm start --prefix client" or we can use "cd client && npm start"
// so, it will first go to client folder then npm start

// "dev": "concurrently \"npm run server\" \"npm run client\""
// it will run both scripts concurrently

// "client-install": "npm install --prefix client"
// while you files will be in github you dont have node_modules so, running above scripts will install dependencies

// in client -> npm i bootstrap reactstrap uuid react-transition-group
// bootstrap is for bootstrap while reactstrap is for using bootstrap components in react and uuid is for generating random ID's and last one is for various transitions