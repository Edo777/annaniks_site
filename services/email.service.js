const db = require("../database/db");
require('../models/email.model');

class MailService{
    constructor(){
        this.Mails = db.model("emails");
        this.Mails.find({})
            .then((result) => {
                if(!result.length){
                    this.Mails.create({
                        email_hr: "",
                        email_contact : "",
                        email_info : ""
                    })
                }
            })
            .catch(error => console.log(error))
    }

    getEmails(){
        return new Promise((resolve, reject) => {
            this.Mails.find({})
                .then(result => resolve(result[0]))
                .catch(err => reject(err))
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
            this.Mails.update({}, updateObj)
            .then(result =>  resolve(result))
            .catch(error => reject(error))
        })
        
    }
}

module.exports = new MailService();