'use strict';
module.exports = function(sequelize, DataTypes) {
  var books = sequelize.define('books', {
    book_name: DataTypes.STRING,
    book_author: DataTypes.STRING,
    book_year: DataTypes.CHAR(4)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return books;
};