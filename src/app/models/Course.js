const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.plugin(slug);

const Course = new Schema({
    '_id': ObjectId,
    'name': String,
    'description': String,
    'slug': String,
    'image': String,
    'VideoId': String,
    'createdAt': {type: Date, default: Date.now},
    slug: { type: String, slug: 'name' }
},{
    timestamp: true
});

// Course trái là model name Course.js
// Course bên phải là Schema khai báo ở dòng 4
module.exports = mongoose.model('Course',Course);