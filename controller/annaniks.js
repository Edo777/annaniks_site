const AnnaniksRouter = require("express").Router();

AnnaniksRouter.get('/', (req, res) => {
    console.log("hello worlld");
    res.end()
})

module.exports = AnnaniksRouter;