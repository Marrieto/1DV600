var Book = function (_id, _title, _author, _genre, _publishDate, _price, _desc) {
    return {
        id: _id,
        title: _title,
        author: _author,
        genre: _genre,
        publishDate: _publishDate,
        price: _price,
        description: _desc
    }
}

var book1 = Book(0, 'Dingus Boy', 'John McKayne', 'Drama', '06-03-2003', 50, 'A book about the kingdom of Dingus')
var book2 = Book(1, 'Bingo Bongo', 'Michelle Dawkins', 'Biology', '03-07-2010', 75, 'A book about the anatomy of the Bingo Bongo')
// var book1 = {
//     id: 0,
//     title: 'Dingus Khan',
//     author: 'John McCain',
//     genre: 'History',
//     publishDate: '06-03-2003', 
//     price: 50,
//     description: 'A book about the kingdom of Dingus'
// }

// var book2 = {
//     id: 1,
//     title: 'Bingo Bongo',
//     author: 'Michelle Dawkins',
//     genre: 'Biology',
//     publishDate: '03-07-2010', 
//     price: 75,
//     description: 'A book about the anatomy of the Bingo Bongo'
// }

getBooks = [book1, book2]

module.exports.getBooks = getBooks
