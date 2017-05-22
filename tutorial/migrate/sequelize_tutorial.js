const models = require('./mysql/models');

models.books.findAll().then((results) => {
  console.log('=================== FIND ALL ==================================');

  for (let i = 0; i < results.length; i += 1) {
    console.log(results[i].dataValues);
  }
});

models.books.findById('2').then((result) => {
  console.log('=================== FIND BY ID ==================================');

  console.log(result.dataValues);
});

models.books.findOne({
  where: {
    book_name: 'Pattern and Principle DDD',
  },
}).then((result) => {
  console.log('===================== FIND BY FIELD ================================');

  console.log(result.dataValues);
});

models.books.findAll({
  where: {
    book_name: {
      $like: '%od%',
    },
  },
  order: [['book_name', 'DESC']],
}).then((results) => {
  console.log('===================== FIND ALL USING LIKE AND ORDER BY ================================');

  for (let i = 0; i < results.length; i += 1) {
    console.log(results[i].dataValues);
  }
});
