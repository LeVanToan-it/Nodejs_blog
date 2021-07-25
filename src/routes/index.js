// Từ đầu chúng ta cần phải nạp file vào
// Chúng ta đang lập đường dẫn cho news
// Nên phải khai báo một biến import từ file news
const newRouter = require('./news');
const homeRouter = require('./home');
const courseRouter = require('./courses');
const meRouter = require('./me');
//const homeRouter = require('./home');

function route(app) {
    app.use('/me',meRouter);
    app.use('/courses', courseRouter);
    // Cú pháp định tuyến được hướng dẫn trên hệ thống
    // Router1 '/news' là định nghĩa đường dẫn
    // Router2 newRouter được hiểu là cấp con, nhỏ hơn Router1
    // Khi gọi đến path '/news' thì nó sẽ trỏ đến newRouter
    // Và newRouter sẽ trỏ đến file routers/news.js
    // Như đã khai báo đầu dòng phía trên
    app.use('/news', newRouter);
    /* app.get('/news',(req, res) => {
        // Render: Chuyển hướng
        res.render('news');
        // Send: Truyền thông tin
        // res.send('Hello World')
    }) */

    // Đường dẫn - hướng (route)
    // func thường có dạng func(){...}
    // Dưới đây ở dạng arrow func
    // Tức sẽ bỏ chữ func thay vào đó dùng mũi tên ở phía sau
    app.use('/', homeRouter);
    /* app.get('/',(req, res) => {
        // Render: Chuyển hướng
        res.render('home');
        // Send: Truyền thông tin
        // res.send('Hello World')
    }) */
}

module.exports = route;
