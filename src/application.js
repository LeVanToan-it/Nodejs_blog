//Nạp thư viện express vào index
const express = require('express');
// Gọi func như dưới, tương ứng sẽ tạo ra một instance gán cho app
// Như một đối tượng, sự dụng xuyên suốt trong quá trình xây dựng và chạy chương trình
const app = express();
// Nạp thư viện morgan
var morgan = require('morgan');
// HTTP logger
app.use(morgan('combined'));
// Nạp thư viện express-handlebars
var exphbs = require('express-handlebars');
// Nạp thư viện path
var path = require('path');
// Nạp thư viện sass
var sass = require('sass');

// Cổng
const port = 3000;

// Xử lý static file
app.use(express.static(path.join(__dirname, 'public')));
// Xử lý middleware từ client gửi lên server
app.use(express.urlencoded());
// Xử lý client gửi các file js lên server
app.use(express.json());

// Template engine
// Định nghĩa handlebars là exphbs()
app.engine('handlebars', exphbs({
    helpers:{
        sum: (a, b) => a+b,
    }
}));

const methodOverride = require('method-override')
app.use(methodOverride('_method'));
//Set view engine giống handlebars
app.set('view engine', 'handlebars');

// Reset đường dẫn
app.set('views',path.join(__dirname, 'resources/views/'),
);

//===========================================================================================================
// Khai báo đường dẫn trỏ đến thư mục routers
const route = require('./routes');
//init routers
route(app);

//===========================================================================================================
// Import db
const db = require('./config/db/conf.js');
//Connect db
db.connect();

//===========================================================================================================
// 127.0.0.1 = localhost
app.listen(port,() => {
    console.log('App listening at http://localhost:' + port);
});
