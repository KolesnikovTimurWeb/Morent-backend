const mongoose = require("mongoose");


const CarsSchema = new mongoose.Schema({
   cartitle: {
      type: String,
      required: true,
   },
   carsubtitle: {
      type: String,
      required: true,
   },
   desc: {
      type: String,
      required: true,
   },
   fuel: {
      type: Number,
      required: true,
   },
   discount: {
      type: Number,
   },
   clutch: {
      type: String,
      required: true,
   },
   people: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
      required: true,
   },
   liked: {
      type: Boolean,
      default: false,
   },
   image: {
      type: String,
      required: true,
   },
   images: {
      type: Array,
   }
})




const CarsModel = mongoose.model("Cars", CarsSchema);

module.exports = CarsModel;