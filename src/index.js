//Nạp thư viện express vào index
const express = require('express')
// Nạp thư viện morgan
var morgan = require('morgan');
// Nạp thư viện express-handlebars
var exphbs  = require('express-handlebars');
// Nạp thư viện path
var path = require('path')

var sass = require('sass')
// Gọi func như dưới, tương ứng sẽ tạo ra một instance gán cho app
// Như một đối tượng, sự dụng xuyên suốt trong quá trình xây dựng và chạy chương trình
const app = express()
// Cổng 
const port = 3000

// Xử lý static file
app.use(express.static(path.join(__dirname,"public")));

// HTTP logger
app.use(morgan('combined'))

// Template engine
// Định nghĩa handlebars là exphbs()
app.engine('handlebars', exphbs());

//Set view engine giống handlebars
app.set('view engine', 'handlebars');

// Reset đường dẫn
app.set('views', path.join(__dirname, 'resources/views/'));

// Đường dẫn - hướng (route)
// func thường có dạng func(){...}
// Dưới đây ở dạng arrow func
// Tức sẽ bỏ chữ func thay vào đó dùng mũi tên ở phía sau
app.get('/',(req, res) => {
    // Render: Chuyển hướng
    res.render('home');
    // Send: Truyền thông tin
    // res.send('Hello World')
})
app.get('/news',(req, res) => {
    // Render: Chuyển hướng
    res.render('news');
    // Send: Truyền thông tin
    // res.send('Hello World')
})

// 127.0.0.1 = localhost
app.listen(port, () => {
    console.log('Exmaple app listening at http://localhost:'+port)
})