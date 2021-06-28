var mongoose = require('mongoose');

// schema
var likeSchema = mongoose.Schema({
  count:{type:Number, default:0}
});

// model & export
var Like = mongoose.model('like', likeSchema);
module.exports = Like;
