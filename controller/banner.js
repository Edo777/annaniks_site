const BannerRouter = require("express").Router();
const BannerService = require('../services/banner.service');
const BannerCheckers = require('../checkers/banner.checker');
const _ = require("lodash");
var upload = require('../multer-upload/multer.upload');

BannerRouter.use('/:lng', (req, res, next) => {
    console.log(req.params)
    switch (req.method){
        case 'GET' : {
            let lng = req.params.lng;
            let checkResult = BannerCheckers.checkGet(lng);
            if(checkResult){
                next();
            }else{
                res.send({
                    status: "field",
                    message:"language must be arm or eng"
                })
            }
            break;
        }
        case 'POST' : {
            console.log("post")
            break;
        }
    }
})

BannerRouter.get('/:lng', (req, res) => {
    BannerService.getActiveBanner(req.params.lng)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        })
})

BannerRouter.post('/add', upload.single('image'), (req, res) => {
    let image = req.file.path;
    req.body.image = image;
    
    BannerService.addBanner(req.body)
        .then((result) => {

            res.send(result);
        })
        .catch((err) => {
            res.send(err)
        })
})
BannerRouter.put('/update', (req, res) => {
    BannerService.update(req.body)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send(err.message);
        })
})
BannerRouter.delete('/', (req, res) => {
    let id = req.body.id;
    console.log(id);
    BannerService.delete(id)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(error);
        })
})



module.exports = BannerRouter;