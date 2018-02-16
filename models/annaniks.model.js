var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnnaniksSchema = new Schema({
    e_mail_contact : String,
    e_mail_hr : String,
    e_mail_info : String,
    banners  : [
        {
            image : String,
            titile : String,
            description : String,
            isactive : Boolean,
            language : String
        }
    ]
});

module.exports = mongoose.model("annaniks", AnnaniksSchema);


