var db = require('../database/db');
require("../models/banner.model");

class BannerService{
    constructor(){
        this.Banners = db.model("banners")
    }
    get(){

    }
    getAll(){
        
    }
    edit(){

    }
    add(){

    }
    delete(){

    }
}

module.exports = new BannerService();