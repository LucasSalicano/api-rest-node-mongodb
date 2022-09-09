import express from "express";
import bookRoutes from "./BookRoutes.js";
import authorRoutes from "./AuthorRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("It's works!");
    })

    app.use(
        express.json(),
        authorRoutes,
        bookRoutes
    )
}

export default routes;