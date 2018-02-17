const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var EmailSchema = new Schema({
    email_contact: String,
    email_info : String,
    email_hr : String
});

module.exports = mongoose.model("emails" , EmailSchema);