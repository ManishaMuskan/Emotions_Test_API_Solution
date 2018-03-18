# Emotions_Test_API_Solution

## Objective: For the Position of Full-Stack Developer

**Requirement:** A __location-based aggregation problem.__

**Reason:**  This exercise is to help in examining my technical knowledge, reasoning and engineering principals. It should demonstrate my experience and skill using current software development technologies and methods.



*****************************


## Approach:
### REST API Approach(CORS): (https://github.com/ManishaMuskan/Emotions_Test_API_Solution)

*Developed using NodeJS with ExpressJs and MongoDB.

*Used the node-geocoder module to find the proper location and then saving the provided lat, lng in the geoJson format in the database so that geo-spatial queries can be performed. this is getting done by POST tag/location. Moreover it restricts ambiguity and ensures proper location name as provided by Google !!

*It was a requirement to demo some Node.js exp* - Using ES 6/7

*For Unit testing, apis, the proper environment is set and tested on a test database populated by seeding.

*Proper aggregation function of mongoose is made with so many stages in between - like $geonear -> $group . while group all emotions for a particular location are pushed in emotions property -> $project ->$project, this project is to filter a particular emotion and count for it. -> $sort - this is to finally sort the output from nearest to farthest from the input coords.

#### TDD Approach, using Mocha, Express... 


# Instructions
***********
To Check the Projects please follow the links provided in the Approaches Section or manually follow the folders.

# -------
Ensure node and npm/yarn is installed and you have an active internet connection !!

## To Build
navigate to the Emotions_Test_API_Solution/ and type npm install

## To Test
navigate to the Emotions_Test_API_Solution/ and type: npm test in console

## To Run
npm start in console.

......

Go to http://localhost:3000/, to config a diff port/api key, navigate to /config/config.json and change your PORT/APPAPIKEY


  *At localhost:3000, Info on testing the APIs is provided.

Scripts are provided in package.json file to do the required task like querying or testing. Follow it or simply run the command node server/server.js from the project location.

Note: Postman could be used to send the payload to get the desired result. Before running node command make sure mongod is running on your machine.

for Post /tag/location the following payload can be used :
```
   {
            "lat": 28.5967439,
            "lng":  77.3285038,
            "emotion": "neutral"
          }

```
          
this will save the user location and emotion to the database and the response would be like

```
          {
              "emo_tagged": {
                  "location_name": "C-85B, C Block, Sector 8, Noida, Uttar Pradesh 201301, India",
                  "emotion": "neutral"
              }
          }
```


for Post /location/emotions the following payload can be used :

```
          {
            "lat": 28.5987439,
            "lng":  77.3265038
          }
```
this will give the desired output
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


### What could be done with more time ?

I believe progress/improvement to be a never ending continuous process. With time many things could have been improved to a point where it would have been ~~perfect~~  close to perfect !!

However few of the things that currently comes to mind:
* Few more validations
* Data Formatting(more sanitized)
* Include more test cases
* Refactorization of the server.js like seperate routes folders etc due to lack of time.(More seperation of concern)

***********
### Alternate Approach

* Instead of creating a location detail and feeling for every user, we could update the same location and add 1 to the emotion data. i.e *{location_name, angry:2, **happy:3**...}* and whenever a user tags, say happy. We could simply add 1 in the happy property and make it *{location_name, angry:2, **happy:4**...}*
* Location name instead of *C-85B, C Block, Sector 8, Noida, Uttar Pradesh 201301, India* to ***Noida, Uttar Pradesh 201301***, and keep updating the feeling for the specific location. It can drastically reduce the db size.

