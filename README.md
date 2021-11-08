# basic-auth

## Installation

  clone repo, and then in a terminal run the 'npm i' command while in the root directory to install dependencies. 
  
  To run the application, enter the 'npm run start' command in a terminal while in the root directory.

## Summary of Problem Domain

  Create a basic auth application. Application requirements are as follows:
  
  Phase 1 requirements:

    Users will be able to create an account that will persist for future app visits

    Registered users will be able to login to their account so that they may access protected information

    App will have Proper CI/CD configuration

## Links to application deployment

  App deployed on Heroku [here](https://basic-auth-class06.herokuapp.com/)

  Pull req from dev found [here](https://github.com/Beers15/basic-auth/pull/1)

## Uml Diagram

![diagram](./uml-diagram.png)

## Routes

* REST Method POST
  * Path: /signin
    * Sends a request with an "Authorization" header with the value Basic TOKEN that contains a properly encoded username and password combination
    * returns the user's data as output after account creation, or a proper error response if the request wasn't successful

  * Path: /signup
    * takes a JSON obj or form data as input with user and password information
    * returns the user's data as output after a successful login attempt, or a proper error response if the request wasn't successful
