const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3623
const path = require("path")

app.use('/', express.json())
app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/o-d', { useNewUrlParser: true })
    .then(() => {
        console.log('mongoose is connected to o-d')
    })
    .catch(err => {
        console.log(err)
    })

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`port is running on ${PORT}`)
})