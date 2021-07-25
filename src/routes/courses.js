const express = require('express');
// Cú pháp cần khai báo để sử dụng cú pháp Router trên hệ thống
const route = express.Router();

const courseController = require('../app/controllers/CourseController');


route.get('/create', courseController.create);

route.post('/store', courseController.store);

route.get('/:id/edit', courseController.edit);

route.get('/:id/delete', courseController.delete);

route.put('/:id', courseController.update);

route.get('/:slug', courseController.detail);

module.exports = route;
