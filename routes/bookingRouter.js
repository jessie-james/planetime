// bookingRouter.js
// ==============================

//imports
const express = require("express")
const bookingRouter = express.Router()
const Booking = require("../models/booking.js")

// get
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

//find if timeslot is available for a given day
bookingRouter.get("/search", (req,res,next)=>{
    console.log("query started")
    Booking.findOne(({startDate: req.query.startDate, endDate: req.query.endDate}), (err, booking)=>{
            if(booking === null){
                res.send("available")
            }else if(booking !== null){
                res.send("unavailable")
            }
    })
})



// post
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

// put
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

// delete
bookingRouter.delete("/:_id", (req, res, next) => {
    Booking.findOneAndRemove({_id: req.params._id}, (err, deletedBook) => {
        if(err){
            res.status(500).alert(`you had deleated ${deletedBook._id}`);
            next(err);
        }else{
            res.status(202).send({message: `you have deleted ${deletedBook._id}`, _id: deletedBook._id })
        }      
    })
})

// exports
module.exports = bookingRouter