const db = require('../database/db');
require('../models/portfolio.model');

class PortfolioService{
    constructor(){
        this.Portfolios = db.model('portfolios');
        /*this.Portfolios.find({})
            .then((result) => {
                if(!result.length){
                    this.Portfolios.create({
                        image : "path",
                        title : "String",
                        description : "String",
                        tags : "String",
                        platforms : "String",
                        gallery  : "String",
                        language : "String",
                        isactive : true
                    })
                }
            })
            .catch(error => console.log(error))
                */
            
    }
    getPortfolio(lng){
        return new Promise((resolve, reject) => {
            this.Portfolios.find({isactive : true, language : lng})
                .then((result) => {
                    resolve({
                        status: "ok",
                        result
                    })
                })
                .catch((error) => {
                    reject({
                        status:"field",
                        error
                    })
                })
        })
    }
    getAllPortfolios(){

    }
    addPortfolio(portfolio){
        return new Promise((resolve, reject) => {
            this.Portfolios.create({
                image : portfolio.image,
                title : portfolio.title,
                description : portfolio.description,
                tags : portfolio.tags,
                platforms : portfolio.platforms,
                gallery  : portfolio.gallery,
                language : portfolio.language,
                isactive : portfolio.isactive
            })
            .then((result) => {
                resolve({
                    status: "ok",
                    result
                })
            })
            .catch((error) => {
                    status: "error"
            })
        })
    }
    deletePortfolio(){

    }
    editPortfolio(){
        
    }
}

module.exports = new PortfolioService()