const body_parser = require("body-parser");
const AnnaniksRouter = require("./annaniks");

class API{
    initializeApp(app){
        app.use(body_parser.json());
        app.use(body_parser.urlencoded({
            extended : true
        }));
        app.use('/', AnnaniksRouter);
    }
}

module.exports = new API();