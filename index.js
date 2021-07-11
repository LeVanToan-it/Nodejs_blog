//Nạp thư viện express vào index
const express = require('express')
// Gọi func như dưới, tương ứng sẽ tạo ra một instance gán cho app
// Như một đối tượng, sự dụng xuyên suốt trong quá trình xây dựng và chạy chương trình
const app = express()
// Cổng 
const port = 3000

// Đường dẫn - hướng (route)
// func thường có dạng func(){...}
// Dưới đây ở dạng arrow func
// Tức sẽ bỏ chữ func thay vào đó dùng mũi tên ở phía sau
app.get('/',(req, res) => {
    var a = 1
    var b = 2

    var c = a + b
    res.send('Hello World')
})

// 127.0.0.1 = localhost
app.listen(port, () => {
    console.log('Exmaple app listening at http://localhost:'+port)
})