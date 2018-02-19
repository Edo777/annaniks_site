const db = require("../database/db");
require('../models/email.model');

class MailService{
    constructor(){
        this.Mails = db.model("emails");
        this.Mails.find({}, (err, result) => {
            if(err) throw err;

            if(!result.length){
                this.Mails.create({
                    email_hr: "",
                    email_contact : "",
                    email_info : ""
                })
            }
        })
    }

    getEmails(){
        return new Promise((resolve, reject) => {
            this.Mails.find({})
            .then((result) => {
                resolve(result[0])
            })
            .catch((err) => {
                reject(err)
            })
        });
    }
    editEmails(editedEmails){
        let updateObj = {};
        if(editedEmails.email_contact){
            updateObj.email_contact = editedEmails.email_contact
        }
        if(editedEmails.email_info){
            updateObj.email_info = editedEmails.email_info
        }
        if(editedEmails.email_hr){
            updateObj.email_hr = editedEmails.email_hr
        }
        return new Promise((resolve, reject) => {
            this.Mails.update({_id : "5a8ac5d50790431814be816d"}, updateObj)
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            })
        })
        
    }
}

module.exports = new MailService();