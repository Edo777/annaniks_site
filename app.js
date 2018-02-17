const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("listening");
})

const api = require('./controller/api');

api.initApp(app);