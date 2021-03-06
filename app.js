const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const users = []

// add POST request listener here
app.post("./api/user", (req, res) => {
    res.status(201, 409)
    res.send({"It worked": "It didnt' work"})
})
app.listen(3000);