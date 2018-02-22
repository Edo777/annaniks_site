var db = require('../database/db');
require("../models/banner.model");

class BannerService{
    constructor(){
        this.Banners = db.model("banners");
        
        this.Banners.find({})
            .then((result) => {
                if(!result.length){
                    this.Banners.create({
                        image : "Other image",
                        titile : "Other title",
                        description : "some description",
                        isactive : true,
                        language : "arm"
                    })
                }
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    get(lng){
        return new Promise((resolve, reject) => {
            this.Banners.findOne({ language:lng, isactive:true })
                .then((result) => {                    
                    resolve({
                        status:"ok",
                        result
                    });
                })
                .catch((error) => {
                    reject({
                        status:"field",
                        error
                    })
                })
        })
    }
    getAll(lng){
        return new Promise((resolve, reject) => {
            this.Banners.find({ language:lng })
                .then((result) => {                    
                    resolve({
                        status:"ok",
                        result
                    });
                })
                .catch((error) => {
                    reject({
                        status:"field",
                        error
                    })
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
            .catch((error) =>{
                reject({
                    status:"field",
                    error
                })
            })
        })
    }
    add(createBanner){
        return new Promise((resolve, reject) => {
            this.Banners.create(createBanner)
            .then((result) => {
                resolve({
                    status:"ok",
                    result
                })
            })
            .catch((error) =>{
                reject({
                    status:"field",
                    error
                })
            })
        })
    }
    delete(id){
        return new Promise((resolve, reject) => {
            this.Banners.deleteOne({_id : id})
                .then((result) => {
                    resolve({
                        status : "ok"
                    })
                })
                .catch((error) => {
                        status : "field"
                })
            })
    }
}

module.exports = new BannerService();