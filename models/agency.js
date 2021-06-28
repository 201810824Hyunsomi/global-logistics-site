var mongoose = require('mongoose');

// schema
var agencySchema = mongoose.Schema({
  name:{type:String},
  detail:{type:String},
  policy:{type:String},
  link: {type: String},
});

// model & export
var Agency = mongoose.model('agency', agencySchema);
module.exports = Agency;
