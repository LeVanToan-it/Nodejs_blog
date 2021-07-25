const Course = require('../models/Course');
const {multiMongooseToObject} = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');


class MeController{
    storedCourse(req, res, next){
        Course.find({})
            .then(courses => {
                res.render('me/storedCourse',{
                    courses: multiMongooseToObject(courses)
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();