const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DB_URL).then((res) => {
    console.log("Database Connected")
}).catch((err) => {
    console.log("Database is Not Connected")
})