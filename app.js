const express = require("express");
const api = require("./controller/api");
const app = express();

app.listen(3000, () => {
    console.log("listen...")
})

api.initializeApp(app);