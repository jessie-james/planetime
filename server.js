require('dotenv').config();

const express = require('express');
const expressJwt = require('express-jwt');
const logger = require('morgan');
// const mongoose = require('mongoose')

const app = express();
const path = require("path")
const PORT = process.env.PORT || 3623;

// DB connection
const db = require('./config/db');
db.connection.on('error', console.error.bind(console, 'Connection error'));
db.connection.on('connected', () => { console.log('Connection open to db') });

// Middleware for every request
app.use('/', express.json())
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(logger('dev'));
// app.use("/api/client", require('./routes/clientRouter.js'))

const requireAuth = expressJwt({ secret: process.env.SECRET });

app.get('/api', requireAuth, (req, res, next) => {
    res.send('Authenticated');
    next();
});

// Routes
app.use('/bookings', require('./routes/booking'));
app.use('/auth', require('./routes/auth'));
app.use('/api/client', require('./routes/client'));

// app.use('/booking', require("./routes/bookingRouter.js"));
// app.use('/auth', require('./routes/authRouter.js'));
// app.use('/api', expressJwt({ secret: process.env.SECRET }));
// app.use('/api/client', require('./routes/clientRouter'));

// DB connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/o-d', 
// { 
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })
//     .then(() => {
//         console.log('mongoose is connected to o-d')
//     })
//     .catch(err => {
//         console.log(err)
//     })

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Error handler
app.use((err, req, res, next) => {
    console.error('ERROR', err);
    if(err.name === 'UnauthorizedError') {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message });
});

// Port connection
app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`);
});
