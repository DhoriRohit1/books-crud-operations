const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
  bookname: {
    type: String
  },
  price: {
    type: Number
  },
  auther: {
    type: String
  }
}, {
    collection: 'books'
  })

module.exports = mongoose.model('book', bookSchema)