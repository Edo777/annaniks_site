const EmailRouter = require('./email');
const BannerRouter = require('./banner');
const ServicesRouter = require("./services");
const PortfolioRouter = require("./portfolio");

const body_parser = require("body-parser");
class API{
    initApp(app){
        app.use(body_parser.json());
        app.use(body_parser.urlencoded({
            extended : true
        }));
        app.use('/email', EmailRouter);
        app.use('/banner', BannerRouter);
        app.use('/services', ServicesRouter);
        app.use("/portfolio", PortfolioRouter);
    }
}

module.exports = new API();
