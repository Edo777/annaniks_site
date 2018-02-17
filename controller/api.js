const EmailRouter = require('./email');
const BannerRouter = require('./banner');
const body_parser = require("body-parser");

class API{
    initApp(app){
        app.use(body_parser.json());
        app.use(body_parser.urlencoded({
            extended : true
        }));
        app.use('/email', EmailRouter);
        app.use('/banner', BannerRouter);
    }
}

module.exports = new API();