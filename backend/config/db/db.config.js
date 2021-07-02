const mongoose = require('mongoose');

const dbConnect = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/moneyFlow', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to DB');
    } catch (err) {
        console.log('Connection to DB Failed')
        console.log(err)
    }

}

module.exports = { dbConnect }