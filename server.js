import app from "./src/app.js";
// const http = require("http")
const port = process.env.PORT || 3000;

// const rotas = {
//     '/': "It's works!",
//     '/books': "Books",
//     '/authors': "Authors",
// }
//
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(rotas[req.url])
// })

app.listen(port, () => {
    console.log("works on port 3000!")
})