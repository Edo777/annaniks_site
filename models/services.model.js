const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ServicesSchema = new Schema({
    serviceInfo:[{
        description: String,
        language: String
    }],
    serviceItem:[
        {
            image: String,
            title : String,
            description : String,
            language : String,
            isactive : String
        }
    ]
})

module.exports = mongoose.model('services', ServicesSchema);