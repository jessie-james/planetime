// paymentRouter.js
// ==============================

// imports
const express = require('express')
const paymentRouter = express.Router()
const stripe = require('stripe')(process.env.SECRET_LIVE_APIKEY || process.env.SECRET_TEST_APIKEY);

// middleware functions
// post
const postHandler = async (req,res) => {
    try{
        const {amount, source, receipt_email} = req.body
        let status = await stripe.charges.create({
            amount,
            currency: 'usd',
            source,
            receipt_email
        })
    if (!status) throw new Error ('charge unsuccesful')
    console.log("post succesful?")
    return res.json({status})
    } catch(err) {
        console.error(err)
        res.status(500).end()
    }
}

const allHandler = (_, res) => res.json({message: 'please make a POST request to /charge'})

// endpoints/apply middleware
paymentRouter.post('/', postHandler)
paymentRouter.all('*', allHandler)

// exports
module.exports = paymentRouter