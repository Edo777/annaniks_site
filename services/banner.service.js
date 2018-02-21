var db = require('../database/db');
require("../models/banner.model");

class BannerService{
    constructor(){
        this.Banners = db.model("banners");
        
        this.Banners.find({}, (err, res) => {
            if(err) throw err;

            if(res.length == 0){
                this.Banners.create({
                    image : "Other image",
                    titile : "Other title",
                    description : "some description",
                    isactive : true,
                    language : "arm"
                })
            }
        })
    }
    get(lng){
        return new Promise((resolve, reject) => {
            this.Banners.findOne({ language:lng, isactive:true })
                .then((result) => {                    
                    resolve(result);
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
    getAll(){
        return new Promise((resolve, reject) => {
            this.Banners.find({ language:lng })
                .then((result) => {                    
                    resolve(result);
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
    update(updateDoc){
        return new Promise((resolve, reject) => {
            this.Banners.update({_id: updateDoc._id}, updateDoc)
            .then((result) => {
                resolve({
                    status:"ok",
                    result
                })
            })
            .catch((err) =>{
                reject({
                    status:"field",
                    err
                })
            })
        })
    }
    add(createDoc){
        return new Promise((resolve, reject) => {
            this.Banners.create(createDoc)
            .then((result) => {
                resolve({
                    status:"ok",
                    result
                })
            })
            .catch((err) =>{
                reject({
                    status:"field",
                    err
                })
            })
        })
    }
    delete(){

    }
}

module.exports = new BannerService();