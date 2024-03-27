const express = require("express");
const dontenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors')

const CarsModel = require("./models/Cars");
const NotificationModel = require("./models/Notification");
const app = express()
app.use(express.json())
dontenv.config()
app.use(cors())
const port = process.env.PORT;
const uri = process.env.URL
app.post('/notification', async (req, res) => {

   const notification = new NotificationModel({
      title: req.body.title,
      desc: req.body.desc,
      date: new Date()
   })

   try {
      const savedHotel = await notification.save()
      res.status(200).json(savedHotel)
   } catch (err) {
      res.status(500).json(err)
   }
})
app.post('/cars', async (req, res) => {

   const newCar = new CarsModel({
      cartitle: req.body.cartitle,
      carsubtitle: req.body.carsubtitle,
      desc: req.body.desc,
      fuel: req.body.fuel,
      discount: req.body.discount,
      clutch: req.body.clutch,
      people: req.body.people,
      price: req.body.price,
      image: req.body.image,
      images: req.body.images
   })

   try {
      const savedHotel = await newCar.save()
      res.status(200).json(savedHotel)
   } catch (err) {
      res.status(500).json(err)
   }
})
app.get('/notification', async (req, res) => {
   try {
      notification = await NotificationModel.find()

      res.status(200).json(notification)
   } catch (err) {
      res.status(500).json(err)
   }
})
app.get('/carss', async (req, res) => {

   try {
      const Cars = await CarsModel.find()
      console.log(Car)
      res.status(200).json(Cars)
   } catch (err) {
      res.status(500).json(err)
   }
})
app.get('/cars', async (req, res) => {
   const { carsubtitle, price } = req.query

   let Cars
   try {
      if (carsubtitle === undefined && price === undefined) {
         Cars = await CarsModel.find()
      } else if (carsubtitle === undefined && price !== undefined) {
         Cars = await CarsModel.find({
            price: { $lte: price }
         },
         )


      } else {
         Cars = await CarsModel.find({
            carsubtitle: { $in: carsubtitle },
            price: { $lte: price }
         },
         )
      }
      res.status(200).json(Cars)
   } catch (err) {
      res.status(500).json(err)
   }
})



const connect = async () => {
   try {
      await mongoose.connect(uri)
      console.log('connect')
   } catch (err) {
      throw err
   }
}

app.use(express.json())
app.listen(port, () => {
   connect()
   console.log(`Server is running on 123port ${port}`);
});