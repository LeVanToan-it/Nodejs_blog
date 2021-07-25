const Course = require('../models/Course');
const {multiMongooseToObject} = require('../../util/mongoose');
class HomeController {
    // [GET]/news
    index(req, res, next) {
        // Khai báo kiểu comeback
        /* Course.find({},function(err,courses){
            if(!err){
                res.json(courses);
            }else{
                res.status(400).json({error: 'ERROR!!!'});
            }
        }); */

        // Khai báo kiểu promise
        Course.find({})
            .then(courses => {
                res.render('home',{
                        courses: multiMongooseToObject(courses)
                    }
                );
            })
            .catch(next);
        //res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new HomeController();
