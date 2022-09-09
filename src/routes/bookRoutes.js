import express from "express";
import BookController from "../controller/bookController.js";

const router = express.Router();

router
    .get("/books", BookController.getBooks)
    .post("/books", BookController.storeBook)
    .put('/books/:id', BookController.updateBook)
    .get('/books/:id', BookController.findBookById)
    .delete('/books/:id', BookController.deleteBook)

export default router;