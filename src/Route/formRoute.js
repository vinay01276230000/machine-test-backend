const express=require("express")
const multer=require("multer")
const { submitData } = require("../Controller/formCntroller")
const upload = require("../Middleware/uploadMiddleware")

const formRoute=(express.Router())

formRoute.post("/send",upload.single("file"), submitData)

module.exports=formRoute