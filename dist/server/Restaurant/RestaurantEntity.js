const mongoose = require('mongoose');
mongoose.promise = global.promise;

const schema = new mongoose.Schema({
  resId: {
       type: Number,
       required: true,
       trim: true,
       unique: true
   },
    name:{
      type:  String,
      required: true
    },
    address: {
      type:String,
      unique:true
    },
    cuisines:{
      type: String,
      required: true
    },
    image: {
      type: String,
      unique: true
    },
    ratings:{
      type: Number,
      required: true
    },
    comments: {
        type: String,
        default: 'Enter comments'
    }
});
const model = mongoose.model('Restaurant', schema);
module.exports = model;
