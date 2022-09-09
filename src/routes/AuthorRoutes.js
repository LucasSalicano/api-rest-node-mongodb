import express from "express";
import AuthorController from "../controller/AuthorController.js";

const router = express.Router();

router
    .get("/authors", AuthorController.getAuthors)
    .post("/authors", AuthorController.storeAuthor)
    .put('/authors/:id', AuthorController.updateAuthor)
    .get('/authors/:id', AuthorController.findAuthorById)
    .delete('/authors/:id', AuthorController.deleteAuthor)

export default router;