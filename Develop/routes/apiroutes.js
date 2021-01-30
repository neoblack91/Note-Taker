const fs =require("fs")
var path = require("path");
var dbWrite = require("../db/db.json") 

module.exports =(app)=>{

    // type the note
    app.get("/api/notes", function(req, res) {
        return res.json(dbWrite)
      });
      // grab the data that was typed
      app.post("/api/notes", function(req, res) {
        dbWrite.push(req.body)

        fs.writeFile(path.join(__dirname,"../db/db.json"),JSON.stringify) 

        
        res.json (dbWrite)
        
      });

}
console.log(dbWrite)