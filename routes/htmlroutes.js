const fs =require("fs")
var path = require("path");

module.exports = (app)=>{

  app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname,"../public/index.html"))
  });
  
    app.get("/notes", function(req, res) {
        res.sendfile(path.join(__dirname,"../public/notes.html"))
      });

      app.get("*", function(req, res) {
        res.sendfile(path.join(__dirname,"../public/index.html"))
      });


}
