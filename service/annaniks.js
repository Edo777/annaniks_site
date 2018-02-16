const db = require("../database/db");
require("../models/annaniks.model");

var ANNANIKS = db.model("annaniks");

class AnnaniksService{
    constructor(){
        this.Annaniks = ANNANIKS;
    }

}