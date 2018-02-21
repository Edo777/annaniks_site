const BannerRouter = require("express").Router();
const BannerService = require('../services/banner.service');

BannerRouter.get('/', (req, res) => {
    BannerService.get("arm")
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        })
})
BannerRouter.post('/', (req, res) => {
    BannerService.add(req.body)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err)
        })
})
BannerRouter.put('/', (req, res) => {
    BannerService.update(req.body)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send(err.message);
        })
})

module.exports = BannerRouter;