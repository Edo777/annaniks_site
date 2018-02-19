const db = require('../database/db');
require('../models/portfolio.model');

class PortfolioService{
    constructor(){
        this.portfolios = db.model('portfolios');
    }
    getPortfolio(){

    }
    getAllPortfolios(){

    }
    addPortfolio(){

    }
    removePortfolio(){

    }
    editPortfolio(){
        
    }
}