const _ = require("lodash");

class BannerChecker{
    checkGet(lng)   {
        console.log(lng)
        if(lng == 'arm' || lng == 'eng'){
            return true;
        }else{
            return false;
        }
    }
    checkPost(){

    }
    checkPut(){

    }
    checkDelete(){

    }
}

module.exports = new BannerChecker();