const {
  ObjectID
} = require('mongodb');

const {
  Location
} = require('./../../models/location');

const locations = [{
    //1
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3285038,
        28.5967439
      ]
    },
    location_name: "C-85B, C Block, Sector 8, Noida, Uttar Pradesh 201301, India",
    emotion: "happy"
  },
  {
    //2
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3285038,
        28.5967439
      ]
    },
    location_name: "C-85B, C Block, Sector 8, Noida, Uttar Pradesh 201301, India",
    emotion: "happy"
  },
  {
    //3
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3285038,
        28.5967439
      ]
    },
    location_name: "C-85B, C Block, Sector 8, Noida, Uttar Pradesh 201301, India",
    emotion: "happy"
  },
  {
    //4
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3285038,
        28.5967439
      ]
    },
    location_name: "C-85B, C Block, Sector 8, Noida, Uttar Pradesh 201301, India",
    emotion: "sad"
  },
  {
    //5
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3285038,
        28.5967439
      ]
    },
    location_name: "C-85B, C Block, Sector 8, Noida, Uttar Pradesh 201301, India",
    emotion: "angry"
  },
  {
    //6
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3285038,
        28.5967439
      ]
    },
    location_name: "C-85B, C Block, Sector 8, Noida, Uttar Pradesh 201301, India",
    emotion: "sad"
  },
  {
    //7
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3262496,
        28.5459956
      ]
    },
    location_name: "Sector Rd, Sector 124, Noida, Delhi 201303, India",
    emotion: "sad"
  },
  {
    //8
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3262496,
        28.5459956
      ]
    },
    location_name: "Sector Rd, Sector 124, Noida, Delhi 201303, India",
    emotion: "sad"
  },
  {
    //9
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3262496,
        28.5459956
      ]
    },
    location_name: "Sector Rd, Sector 124, Noida, Delhi 201303, India",
    emotion: "happy"
  },
  {
    //10
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3262496,
        28.5459956
      ]
    },
    location_name: "Sector Rd, Sector 124, Noida, Delhi 201303, India",
    emotion: "angry"
  },
  {
    //11
    _id: new ObjectID(),
    geo_loc: {
      type: "happy",
      coordinates: [
        77.3262496,
        28.5459956
      ]
    },
    location_name: "Sector Rd, Sector 124, Noida, Delhi 201303, India",
    emotion: "sad"
  },
  {
    //13
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3262496,
        28.5459956
      ]
    },
    location_name: "Sector Rd, Sector 124, Noida, Delhi 201303, India",
    emotion: "happy"
  },
  {
    //14
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3262496,
        28.5459956
      ]
    },
    location_name: "Sector Rd, Sector 124, Noida, Delhi 201303, India",
    emotion: "neutral"
  }, {
    //15
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3239382,
        27.5949001
      ]
    },
    location_name: "D-15, Dallupura Rd, D Block, Sector 8, Noida, Uttar Pradesh 110096, India",
    emotion: "neutral"
  }, {
    //16
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3239382,
        27.5949001
      ]
    },
    location_name: "D-15, Dallupura Rd, D Block, Sector 8, Noida, Uttar Pradesh 110096, India",
    emotion: "angry"
  }, {
    //17
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3239382,
        27.5949001
      ]
    },
    location_name: "D-15, Dallupura Rd, D Block, Sector 8, Noida, Uttar Pradesh 110096, India",
    emotion: "sad"
  }, {
    //18
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3239382,
        27.5949001
      ]
    },
    location_name: "D-15, Dallupura Rd, D Block, Sector 8, Noida, Uttar Pradesh 110096, India",
    emotion: "angry"
  }, {
    //19
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3239382,
        27.5949001
      ]
    },
    location_name: "D-15, Dallupura Rd, D Block, Sector 8, Noida, Uttar Pradesh 110096, India",
    emotion: "neutral"
  }, {
    //20
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3239382,
        27.5949001
      ]
    },
    location_name: "D-15, Dallupura Rd, D Block, Sector 8, Noida, Uttar Pradesh 110096, India",
    emotion: "happy"
  }, {
    //21
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3239382,
        27.5949001
      ]
    },
    location_name: "D-15, Dallupura Rd, D Block, Sector 8, Noida, Uttar Pradesh 110096, India",
    emotion: "sad"
  }, {
    //21
    _id: new ObjectID(),
    geo_loc: {
      type: "Point",
      coordinates: [
        77.3239382,
        27.5949001
      ]
    },
    location_name: "D-15, Dallupura Rd, D Block, Sector 8, Noida, Uttar Pradesh 110096, India",
    emotion: "happy"
  }
];



const populateLocations = function(done) {
  //clear db because we can't use the same db which is live
  //because it can return different results based on diff requests
  //we need to fix this ambiguity so that we can guarantee what is in db...
  //so will empty db and seed some demo data
  this.timeout(15000);

  Location.remove({}).then(() => {
    return Location.insertMany(locations);
  }).then(() => done());
};

module.exports = {
  locations,
  populateLocations
};