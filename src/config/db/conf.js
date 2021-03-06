const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/course_dev',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
        });
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect Failure!');
    }
}

module.exports = {connect};