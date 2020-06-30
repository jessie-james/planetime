const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
};

const dbUrl = process.env.DB_URL || 'localhost';
const dbPort = process.env.DB_PORT || '27017';
const dbCollection = process.env.DB_COLLECTION || 'o-d';

mongoose.connect(`mongodb://${dbUrl}:${dbPort}/${dbCollection}`, options)
.catch (err => console.error('ERROR', err));

module.exports = mongoose;
