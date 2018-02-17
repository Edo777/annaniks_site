const EmailRouter = require("express").Router();
const EmailService = require("../services/email.service");

EmailRouter.get('/', (req, res) => {
    EmailService.getEmails()
        .then((emails) => {
            let data_email = {
                email_info : emails.email_info,
                email_contact : emails.email_contact,
                email_hr : emails.email_hr
            }
            res.send({
                status : 'ok',
                data : data_email
            })
        })
        .catch((err) => {
            res.send({
                status : 'error',
                data : err
            })
        })
})
EmailRouter.put('/', (req, res) => {
    EmailService.editEmails(req.body)
        .then((update_emails)=>{
            res.send({
                status: "ok",
            })
        })
        .catch((err) => {
            res.send({
                status: 'faild',
                data: err
            })
        })
    
})

module.exports = EmailRouter;