import mongoose from "mongoose";

const schemaBook = new mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        author: {type: mongoose.Schema.Types.ObjectId, ref: 'author', required: true},
        publish_company: {type: String, required: true},
        number_pages: {type: String, required: true},
    }
)

const books = mongoose.model('books', schemaBook)

export default books;