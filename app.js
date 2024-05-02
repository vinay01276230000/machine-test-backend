const express = require("express")
const cors = require("cors")
const formRoute = require("./src/Route/formRoute")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/images", express.static(__dirname + "/public/uploads/"))
app.use("/formdata", formRoute)

module.exports = app

