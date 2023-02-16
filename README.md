# Food Fight

Food Fight is an app that gamifies the process of deciding where and what to eat. It's presented with a 16-bit game aesthetic to make it more fun and interactive. This is the server side portion of the app, remember to check out the client side as well!

[Client side repo](https://github.com/hanwkim/han-kim-capstone-client)

## What Does This Server Do?

This server is mainly responsible for sending requests to the Google Maps API. There are various routes set up which interact with the client side, and depending on the route and queries sent by the client, the server will request the necessary information from the API. The server also provides the images necessary for the client within the public folder, as well as information for each "character" in the game which is held within a JSON file.

## Installation

First, clone the repo:

```bash
$ git clone git@github.com:hanwkim/han-kim-capstone-server.git
```
Then to install the necessary dependencies:

```bash
$ cd han-kim-capstone-server
$ npm install
```
```$ npm install``` above should take care of installing what is needed, but just in case something goes wrong, the other dependencies that are being used can be installed with this command:

```bash
$ npm i express cors dotenv @googlemaps/google-maps-services-js
```

## Environment Variables

A .env file will need to be created within the main repo folder, and it will need the following variables:

```
PORT=<ENTER PORT NUMBER>
API_KEY=<ENTER GOOGLE MAPS API KEY>
```
Note that if a PORT variable is not provided, it will default to 5050. This will be important to remember for the client side.

A Google Maps API key is mandatory. The link below gives detailed instructions on how to set up a Google Cloud project, which will allow you to generate an API key. 

[Google Maps API: Get Started](https://developers.google.com/maps/get-started)

You will need to create a billing account, but if it's your first then Google offers a credit of $300, which is roughly equivalent to over 30,000 GET requests from the API.

Once you have an API key, enter it into the .env file.


## Starting the App

Enter this command, and you're good to go for the server side!

```
$ npm run start
```

## Tech Stacks/Libraries Used

 - [node.js](https://nodejs.org/)
 - [express](https://expressjs.com/)
 - [Node.js Client for Google Maps Services](https://github.com/googlemaps/google-maps-services-js)
 - [dotenv](https://github.com/motdotla/dotenv)
 - [cors](https://github.com/expressjs/cors)

## Lessons Learned and Roadmap

APIs can be tricky, and the Google Maps API is no exception. It was a challenge figuring out the various endpoints, the types of parameters that are needed for each request, and sorting through all of the data that comes back from a successful request. Good documentation is key, and fortunately Google provided that, so it was just a matter of reading through it, then re-reading, then re-reading a few more times...

Future plans include:
 - a database for account creation, login, and sign-up, with the ability for restaurant listings to be saved to individual accounts
 - online multiplayer

## Thank You

Thank you for taking the time to check out my project. Feel free to reach out to me with any questions or comments!