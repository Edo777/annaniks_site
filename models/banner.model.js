const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BannerSchema = new Schema({
    image : String,
    titile : String,
    description : String,
    isactive : Boolean,
    language : String
});
module.exports = mongoose.model('banners', BannerSchema);