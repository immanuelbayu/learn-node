const Books = require('./mysql/models/books');

Books.findAll().then((results) => {
  console.log(results);
});
