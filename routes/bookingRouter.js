const express = require("express")
const bookingRouter = express.Router()
const Booking = require("../modles/booking.js")

bookingRouter.get("/", (req, res, next) => {
    Booking.find((err, booking)=>{
        if(err){
            res.status(500);
            next(err);
        } else {
            res.status(200).send(booking)
        }
    })
})

bookingRouter.post("/", (req, res, next) =>{
    const newBooking = new Booking(req.body)
    newBooking.save((err, savedBooking) => {
        if(err){
            res.status(500);
            next(err);
        }else{
            res.status(201).send(savedBooking);
        }
    })
})

bookingRouter.put("/:_id", (req, res, next) => {
    Booking.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedBook) => {
            if(err){
                res.status(500)
                next(err)
            }else{
                res.status(201).send(updatedBook)
            }
        }
    )
})

bookingRouter.delete("/:_id", (req, res, next) => {
    Booking.findOneAndRemove({_id: req.params._id}, (err, deletedBook) => {
        if(err){
            res.status(500);
            next(err);
        }else{
            res.status(202).send({message: `you have deleted ${deletedBook._id}`, _id: deletedPic._id })
        }      
    })
})

module.exports = bookingRouter