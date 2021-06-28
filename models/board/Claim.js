var mongoose = require('mongoose');

// schema
var claimSchema = mongoose.Schema({
  post:{type:mongoose.Schema.Types.ObjectId, ref:'post'},
  author:{type:mongoose.Schema.Types.ObjectId, ref:'user', required:true},
  createdAt:{type:Date, default:Date.now},
});

// model & export
var Claim = mongoose.model('claim',claimSchema);
module.exports = Claim;
