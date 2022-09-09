import mongoose from "mongoose";

const schemaAuthor = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String},
        birth_date: {type: Date}
    }, {
        versionKey: false
    }
)

const author = mongoose.model("author", schemaAuthor)

export default author;