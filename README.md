# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Intrucciones para correr Dockerfile

- docker build -t docker-react-image:1.0 .
- docker run -p 4000:80 --name docker-react-container docker-react-image:1.0

