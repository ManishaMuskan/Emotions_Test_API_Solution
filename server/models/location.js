const {
  mongoose
} = require('./../db/mongoose');

var LocationSchema = new mongoose.Schema({
  geo_loc: {
    type: {
      type: String,
      required: true,
      default: "Point"
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere'
    }
  },
  location_name: {
    type: String,
    required: true
  },
  emotion: {
    type: String,
    required: true
  }
});

// LocationSchema.methods.saveLocation() = function() {
//   var location = this;
//
//   var location = new Location({
//     "geo_loc.type": "Point",
//     "geo_loc.coordinates": [res[0].longitude, res[0].latitude],
//     "location_name": res[0].formattedAddress,
//     "emotion": req.body.emotion,
//   }).save();
//
//   return location;
// };

var Location = mongoose.model('Location', LocationSchema);

module.exports = {
  Location
};