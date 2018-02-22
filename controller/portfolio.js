const PortfolioRouter = require("express").Router();
var PortfolioService = require("../services/portfolio.service");

PortfolioRouter.post('/', (req, res) => {
    PortfolioService.addPortfolio(req.body)
        .then(result => res.send(result))
        .catch(error => res.send(error))
})

PortfolioRouter.use('/:lng', (req, res, next) => {
    console.log(req.params.lng)
    if(req.params.lng == "arm" || req.params.lng == "eng"){
        next();
    }else{
        res.send({
            status:"field",
            error : "language must be arm or eng"
        })
    }
})

PortfolioRouter.get('/:lng', (req, res) => {
    PortfolioService.getPortfolio(req.params.lng)
        .then((result) => res.send(result))
        .catch((error) => res.send(error))
})

module.exports = PortfolioRouter;