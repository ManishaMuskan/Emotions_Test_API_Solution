# Emotions_Test_API_Solution

## Objective
For the Position of Full-Stack Developer

**Requirement:** A __location-based aggregation problem.__

**Reason:**  This exercise is to help in examining my technical knowledge, reasoning and engineering principals. It should demonstrate my experience and skill using current software development technologies and methods. It was a requirement to demo some Node.js exp* - Using ES 6/7.

***********

## Introduction
A server-side API based solution where a user can tag his emotion to a particular location. And a user can also find locations tagged to emotions from nearest to farthest from input coordinates. This solution is developed using **Express Js** on top of **Node Js** with **MongoDB** as the database. And **Mocha** is used for unit testing.

***********

## Getting Started
* clone the repository.
* Make sure your local machine has the _**node Js, npm and MongoDB**_ installed in it, and you have an active internet connection.
* To build the project navigate to the project folder (Emotions_Test_API_Solution) and execute the command `npm install`. This will    download all the necessary dependencies.

**Note:** To configure a different port/google_api_key, navigate to **/config/config.json** and change the value of PORT/GOOGLE_API_KEY  env variables by yours.

* Before running node commands, make sure to run `mongod` command from console to get connected to the database.

***********

## Instructions
To review the project you can manually go through the project folders or follow the instructions below. Necessary scripts are also provided in the package.json file to do the required task of starting the server or testing. To simplify, some necessary commands to run and test the project are as follows.

### To Run
Navigate to the Emotions_Test_API_Solution/ and execute the command `npm start` in the console to get the server started.

### To Test
Navigate to the Emotions_Test_API_Solution/ and execute the command `npm run test-watch` in console.

***********

## Make Requests
After all these set up configured, you are now good to go. Navigate to the http://localhost:3000/. The required URIs and necessary information to make requests to the server are provided there. Moreover for the sake of convenience instructions are also given below.

**Note:** _**Postman** could be used to send the payload and get the response back from the server. And **CORS** are also enabled to consume the RestFul APIs from other origins._

### 1. POST /tag/location

This request will accept the payload (like one given below) and save the related information to the database.

**Required Payload**
```
     {
         "lat": 28.5967439,
         "lng":  77.3285038,
         "emotion": "neutral"
     }
```

**Response from Server**
```
     {
         "emo_tagged": {
             "location_name": "C-85B, C Block, Sector 8, Noida, Uttar Pradesh 201301, India",
             "emotion": "neutral"
         }
     }
```

### 2. POST /location/emotions

This request will accept the payload (like one given below) and send the related information about the locations and emotions tagged to it. The locations will be sorted from nearest to farthest by distance.

**Required Payload**
```
     {
       "lat": 28.5987439,
       "lng":  77.3265038
     }
```

**Response from Server**
```
     {
         "locations": [
             {
                 "location_name": "Unnamed Road, Nahra Chauth, Rajasthan 321203, India",
                 "lat": 27.5949001,
                 "lng": 77.3239382,
                 "distance": 0.0007139595991257329,
                 "angry": 0,
                 "sad": 1,
                 "happy": 2,
                 "neutral": 0
             },
             {
                 "location_name": "Sector Rd, Sector 124, Noida, Delhi 201303, India",
                 "lat": 28.5459956,
                 "lng": 77.3262496,
                 "distance": 0.0007253541771238135,
                 "angry": 0,
                 "sad": 0,
                 "happy": 2,
                 "neutral": 0
             },
             {
                 "location_name": "C-85B, C Block, Sector 8, Noida, Uttar Pradesh 201301, India",
                 "lat": 28.5967439,
                 "lng": 77.3285038,
                 "distance": 0.0007259904079174102,
                 "angry": 2,
                 "sad": 2,
                 "happy": 4,
                 "neutral": 2
             }
         ]
     }
```

***********

## Modular Approach

* The node-geocoder module is used to find the proper location for the latitude/longitude sent to the server and then saving the provided lat/lng in the GeoJson format in the database. So that **2dsphere index** could be created on it to perform the geospatial queries. Moreover, it restricts ambiguity and ensures proper location name as provided by Google.

* The aggregation function of mongoose is defined with so many stages in between like **$geonear, $group, $project and $sort**. The explanation for using each stage is given below:

  __$geonear__ be the first stage of aggregation finds all the locations form nearest to farthest from an input coordinate with distance field added to the output of this stage.

  Next stage is __$group__, while grouping the input documents location wise, all emotions(sad, angry, happy or neutral) are **_pushed_** in emotions field (array of emotions) for a particular location.

  Then __$project__, this is projecting the required fields for the next stage.

  Again __$project__ stage is used to **_filter_** the array of emotions and then count the occurrence of each emotion for a location. Finally, the __$sort__ stage is used to sort the locations.

* For Unit testing of APIs, the proper environment is set and tested on a test database populated by seeding using **Mocha**.

## TDD Approach (using Mocha, Expect and supertest)

Both the APIs are tested using the mentioned development dependencies for a proper as well as improper payload.

## Alternate Approach

* Instead of creating location and emotion detail for every user, we could simply update the same location and add 1 to the emotion data. For eg: suppose the database has the following document *{location_name: Ranchi, angry:2, **happy:3** ...}*. And whenever a user tags an emotion *(say happy)* to that location, we could simply add 1 in the *happy* property and make it *{location_name, angry:2, **happy:4** ...}* .

* Location name instead of *C-85B, C Block, Sector 8, Noida, Uttar Pradesh 201301, India* to ***Noida, Uttar Pradesh 201301*** could be saved, and keep updating the emotion's count for the specific location. It can drastically reduce the DB size.

***********

## What could be done with more time ?

I believe progress/improvement to be a never-ending continuous process. With time many things could have been improved to a point where it would have been ~~perfect~~  close to perfect !!

However few of the things that currently comes to my mind:
* Few more validations
* Data Formatting(more sanitized)
* Include more test cases
* Refactorization of the server.js like separate routes folders, a separate function for finding location and a separate function for aggregation etc could have been defined.

***********

## References
* https://stackoverflow.com/questions/27752268/mongodb-create-index-on-array-of-two-fields
* https://docs.mongodb.com/manual/reference/method/Bulk/
* https://docs.mongodb.com/manual/reference/operator/aggregation/geoNear/
  _etc...._

#### _Thanks !!_
