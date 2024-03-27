const mongoose = require("mongoose");


const NotificationSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   desc: {
      type: String,
      required: true,
   },
   date: { type: Date, default: Date.now },
})




const NotificationModel = mongoose.model("Notification", NotificationSchema);

module.exports = NotificationModel;