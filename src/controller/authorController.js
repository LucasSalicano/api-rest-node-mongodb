import authors from "../models/Author.js";

class AuthorController {

    static getAuthors = (req, res) => {
        authors.find((error, authors) => {
            res.json(authors)
        })
    }

    static storeAuthor = (req, res) => {
        authors.findOne({title: req.body.title}, (error, result) => {
            if (result && result.title === req.body.title) {
                return res.status(400).json({"message": "author already exists in the database."})
            }
            let author = new authors(req.body)

            author.save((error) => {
                if (error) {
                    res.status(500).send({message: `${error.message} - failed to store author in database.`})
                }
                res.status(201).send()
            })
        })
    }

    static findAuthorById = (req, res) => {
        const id = req.params.id;

        authors.findById(id, (error, author) => {
            if (error) {
                res.status(404).send({message: `${error.message} - author doesn't exists.`})
            }
            res.status(200).send(author)
        })
    }

    static updateAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if (error) {
                res.status(500).send({message: `${error.message} - author update failed.`})
            }
            res.status(200).send({message: "successful author update."})
        })
    }

    static deleteAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndDelete(id, (error) => {
            if (error) {
                res.status(500).send({message: `${error.message} - author delete failed.`})
            }
            res.status(200).send({message: "successful author deleted."})
        })
    }
}

export default AuthorController;