var express = require("express")
// const fs =require("fs")
var path = require("path");

var app = express()
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
