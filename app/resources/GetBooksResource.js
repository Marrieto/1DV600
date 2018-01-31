(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Books = require('../dao/Books')


    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        // Lägg till callback för att få ut det i webbläsaren
        // let output = JSON.stringify(Books.getBooks)
        // console.log(output)
        callback(Books.getBooks)
    };

}());
