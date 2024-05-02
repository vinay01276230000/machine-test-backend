const mongoose = require("mongoose")
const collection = require("../Config/Collection")
require("../Config/Db")


const formSchema = new mongoose.Schema({
    firstName: {
        type: String,
     },
    lastName: {
        type: String,
      
    },
    email: {
        type: String,
      
    },
    dob: {
        type: String,
       
    },
    residentialAddress: {
        street1: {
            type: String,
        },
        street2: {
            type: String,
        }
    },
    permanentAddress: {
        street3: {
            type: String,
        },
        street4: {
            type: String,
        }
    },
    document: {
        fileName: {
            type: String,
        },
        typeOfFile: {
            type: String,
        },
        file: {
            type: String
        },
        fileName1: {
            type: String,
        },
        typeOfFile2: {
            type: String,
        },
        file3: {
            type: String
        }
    }
})


const formModel = mongoose.model(collection.form, formSchema)

module.exports = formModel