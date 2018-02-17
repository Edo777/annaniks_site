const db = require("../database/email.db");
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
            this.Mails.find({}, (err, result) => {
                if(err) {
                    return reject(err);
                }else{
                    return resolve(result[0]);
                }
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
            this.Mails.findOneAndUpdate({}, updateObj, (err, doc, res) => {
                if(err){
                    return reject(err);
                }else{
                    return resolve();
                }
            })
        })
        
    }
}

module.exports = new MailService();