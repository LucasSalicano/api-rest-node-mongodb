import books from "../models/Book.js";

class BookController {

    static getBooks = (req, res) => {
        books.find()
            .populate('author')
            .exec((error, books) => {
                res.json(books)
            })
    }

    static storeBook = (req, res) => {
        books.findOne({title: req.body.title}, (error, result) => {
            if (result && result.title === req.body.title) {
                return res.status(400).json({"message": "book already exists in the database."})
            }
            let book = new books(req.body)

            book.save((error) => {
                if (error) {
                    res.status(500).send({message: `${error.message} - failed to store book in database.`})
                }
                res.status(201).send()
            })
        })
    }

    static findBookById = (req, res) => {
        const id = req.params.id;

        books.findById(id, (error, book) => {
            if (error) {
                res.status(404).send({message: `${error.message} - book doesn't exists.`})
            }
            res.status(200).send(book)
        }).populate("author", "name")
    }

    static updateBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if (error) {
                res.status(500).send({message: `${error.message} - book update failed.`})
            }
            res.status(200).send({message: "successful book update."})
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndDelete(id, (error) => {
            if (error) {
                res.status(500).send({message: `${error.message} - book delete failed.`})
            }
            res.status(200).send({message: "successful book deleted."})
        })
    }
}

export default BookController;