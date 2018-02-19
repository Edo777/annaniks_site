const db = require("../database/db");
require("../models/services.model");

class Services{
    constructor() {
        this.Services = db.model("services");
    }
    getDescription(){
        
    }
    editDescription(){

    }
    getItem(){

    }
    getAllItems(){

    }
    addItem(){

    }
    removeItem(){

    }
    editItem(){

    }
}