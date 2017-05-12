const fs = require('fs');
const path = require('path');

module.exports = {
  up: (queryInterface) => {
    const data = fs.readFileSync(path.join(__dirname, 'data', 'books.json'), 'utf8');
    const searchForm = JSON.parse(data);

    return queryInterface.bulkInsert('books', searchForm);
  },

  down: queryInterface => queryInterface.bulkDelete('books', null, {}),
};
