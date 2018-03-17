require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const NodeGeocoder = require('node-geocoder');
const _ = require('lodash');

var {
  Location
} = require('./models/location');

const port = process.env.PORT;

var app = express();

app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.render('home.hbs');
});

app.post('/tag/location', (req, res) => {
  var body = _.pick(req.body, ['lat', 'lng', 'emotion']);

  if (req.body.constructor === Object && Object.keys(req.body).length < 3 || req.body.lat === undefined || req.body.lng === undefined || req.body.emotion === undefined) {
    var err = 'Valid values for lat, lng and emotion must be provided, please send the proper payload';
    return res.status(400).send(err);
  }

  var options = {
    provider: 'google',
    httpAdapter: 'https', // Default
    apiKey: process.env.GOOGLE_API_KEY, // for Mapquest, OpenCage, Google Premier
    formatter: 'json' // 'gpx', 'string', ...
  };
  var geocoder = NodeGeocoder(options);

  geocoder.reverse({
      lat: req.body.lat, //latitude: 28.5967439,
      lon: req.body.lng //longitude: 77.3285038,
    }).then((res) => {
      var location = new Location({
        "geo_loc.type": "Point",
        "geo_loc.coordinates": [res[0].longitude, res[0].latitude],
        "location_name": res[0].formattedAddress,
        "emotion": req.body.emotion,
      }).save();
      return location;
    }, (err) => {
      return new Promise((resolve, reject) => reject(400, err));
    }).then((location) => {
      var emo_tagged = _.pick(location, ['location_name', 'emotion']);
      res.send({
        emo_tagged
      });
    })
    .catch((err) => {
      res.sendStatus(err);
    });
});

app.post('/location/emotions', (req, res) => {
  var body = _.pick(req.body, ['lat', 'lng']);

  if (req.body.constructor === Object && Object.keys(req.body).length < 2 || req.body.lat === undefined || req.body.lng === undefined) {
    return res.status(400).send('Valid values for lat and lng must be provided, please send the proper payload');
  }

  Location.aggregate([{
      $geoNear: {
        near: [48.5917, -2.5469],
        distanceField: "distance",
        spherical: true,
        distanceMultiplier: 0.001
      }
    },
    {
      $group: {
        _id: {
          location_name: "$location_name",
          distance: "$distance",
          geo_loc: "$geo_loc"
        },
        emotions: {
          $push: "$emotion"
        }
      }
    }, {
      $project: {
        location_name: "$_id.location_name",
        distance: "$_id.distance",
        emotions: 1,
        geo_loc: "$_id.geo_loc",
        _id: 0
      }
    }, {
      $project: {
        location_name: "$location_name",
        lat: {
          $arrayElemAt: ["$geo_loc.coordinates", 1]
        },
        lng: {
          $arrayElemAt: ["$geo_loc.coordinates", 0]
        },
        distance: "$distance",
        angry: {
          $size: {
            $filter: {
              input: "$emotions",
              as: "emotion",
              cond: {
                $eq: ["$$emotion", "angry"]
              }
            }
          }
        },
        sad: {
          $size: {
            $filter: {
              input: "$emotions",
              as: "emotion",
              cond: {
                $eq: ["$$emotion", "sad"]
              }
            }
          }
        },
        happy: {
          $size: {
            $filter: {
              input: "$emotions",
              as: "emotion",
              cond: {
                $eq: ["$$emotion", "happy"]
              }
            }
          }
        },
        neutral: {
          $size: {
            $filter: {
              input: "$emotions",
              as: "emotion",
              cond: {
                $eq: ["$$emotion", "neutral"]
              }
            }
          }
        }
      }
    }, {
      $sort: {
        distance: 1
      }
    }
  ]).then((locations) => {
    res.send({
      locations
    });
  }, (e) => {
    res.status(400).send(e);
  });

});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {
  app
};