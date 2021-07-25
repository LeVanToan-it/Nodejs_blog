const express = require('express');
// Cú pháp cần khai báo để sử dụng cú pháp Router trên hệ thống
const route = express.Router();

const newsController = require('../app/controllers/NewsController');

// news đã được định nghĩa đường dẫn '/news' từ phía file routers/index
// Nên ở đây khai báo đường dẫn là '/'
// Và truy cập vào file '../app/controllers/NewsController' gọi hàm index
route.get('/:show', newsController.show);

route.get('/', newsController.index);

module.exports = route;
