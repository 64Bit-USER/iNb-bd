const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://dbMainUser:mern123@cluster0.fuhqz.mongodb.net/test";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => console.log('Connected To Mongo Successfully!'));
};

module.exports = connectToMongo;
