const db = require('../db/init');

module.exports = class Movie {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.leadActor = data.lead_actor;
        this.yearOfProduction = data.year_of_production;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let movieData = await db.query('SELECT * FROM movies;');
                let movies = movieData.rows.map(b => new Movie(b));
                resolve (movies);
            } catch (err) {
                reject('Movie not found');
            }
        });
    };

    
    
    // static findById(id){
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             let bookData = await db.query(`SELECT books.*, authors.name as author_name
    //                                                 FROM books 
    //                                                 JOIN authors ON books.author_id = authors.id
    //                                                 WHERE books.id = $1;`, [ id ]);
    //             let book = new Book(bookData.rows[0]);
    //             resolve (book);
    //         } catch (err) {
    //             reject('Book not found');
    //         }
    //     });
    // };
    
    // static create(bookData){
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             let author = await Author.findOrCreateByName(bookData.authorName);
    //             let result = await db.query(
    //                 `INSERT INTO books (title, year_of_publication, abstract, author_id) VALUES ($1, $2, $3, $4) RETURNING *;`, 
    //             [
    //                 bookData.title, 
    //                 bookData.yearOfPublication, 
    //                 bookData.abstract, 
    //                 bookData.author.id
    //             ]);
    //             resolve (result.rows[0]);
    //         } catch (err) {
    //             reject('Book could not be created');
    //         }
    //     });
    // };

    // destroy(){
    //     return new Promise(async(resolve, reject) => {
    //         try {
    //             const result = await db.query('DELETE FROM books WHERE id = $1 RETURNING author_id;', [ this.id ]);
    //             const author = await Author.findById(result.rows[0].author_id);
    //             const books = await author.books;
    //             if(!books.length){await author.destroy()}
    //             resolve('Book was deleted')
    //         } catch (err) {
    //             reject('Book could not be deleted')
    //         }
    //     })
    // };
};
