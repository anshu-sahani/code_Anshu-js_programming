// filter 

const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Num = arry.filter((num) => {
            return num > 4;
});
//console.log(Num);
const number = [];
arry.forEach((num) => {
    if (num > 4) {
        number.push(num);
    }
});
//console.log(number);
const books = [
    {book: "book One", genre: "Mathematics", publish: 1982, edition: 2000 },
    {book: "book Two", genre: "Hindi", publish: 1987, edition: 2002},
    {book: "book Three", genre: "English", publish: 1952, edition: 2004},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
const userBook = books.filter((book) => {
    return book.edition > 2004 && book.genre === "Non-Fiction";
});
console.log(userBook);


