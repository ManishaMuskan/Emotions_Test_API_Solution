const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/whyable-assign-db');

module.exports = {
  mongoose
};