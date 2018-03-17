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

var Location = mongoose.model('Location', LocationSchema);

module.exports = {
  Location
};
