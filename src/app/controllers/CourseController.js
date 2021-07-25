const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');

class CourseController {
    // [GET]/courses/:slug
    detail(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course =>{
                res.render('courses/detail', {course: mongooseToObject(course)});
            })
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next){
        res.render('courses/create');
    }

    //[GET] /courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course =>
                res.render('courses/edit', {
                    course: mongooseToObject(course)
                }))
            .catch(next);
    }

    //[PUT] /courses/:id
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next);
    }

    delete(req, res, next){
        res.render('courses/delete');
    }

    // [POST]
    store(req, res, next){
        const course = new Course(req.body);
        course.save()
            .then(()=>{
                res.redirect('/');
            })
            .catch(error=>{
                
            })        
    }
}

module.exports = new CourseController();
