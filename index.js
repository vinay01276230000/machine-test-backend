const server=require("./app")
require("dotenv").config()

const host=process.env.HOST;
const port=process.env.PORT;

server.listen(port,function(){
    console.log(`server started http://${host}:${port}`)
})