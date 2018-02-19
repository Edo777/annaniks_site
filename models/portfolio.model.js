const mongoose = require("mongoose");
const Schema = mongoose.Schema;

PortfolioSchema = new Schema({
    image : String,
    title : String,
    description : String,
    tags : String,
    platforms : String,
    gallery  : String,
    language : String,
    isactive : Boolean
})

module.exports = mongoose.model('portfolios', PortfolioSchema);