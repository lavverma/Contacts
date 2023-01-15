const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
  fname : {
    type : String,
    required : true,
    trim : true
  },
  lname : {
    type : String,
    required : true,
    trim : true
  },
  phone :{
    type : String,
    required : true,
    trim : true
  },
  company : {
    type : String,
    trim: true
  }
},{timestamps : true})

module.exports = mongoose.model("Contact", contactSchema)