const fs =require("fs")
var path = require("path");
var dbWrite = require("../db/db.json") 
//unique id
const { v4: uuidv4 } = require('uuid');

module.exports =(app)=>{

    // type the note
    app.get("/api/notes", function(req, res) {
         res.json(dbWrite)
      });
      // grab the data that was typed
      app.post("/api/notes", function(req, res) {

        dbWrite.push(req.body)  
        // define the uuid (unique)
        req.body.id = uuidv4();
        
        fs.writeFile(path.join(__dirname,"../db/db.json"),JSON.stringify


        (dbWrite),function(err){

          if(err) throw err
            // if no err happens write the note
          res.json(dbWrite)
        })
        // res.json(dbWrite)
      });
      // add error if something happens
      

}
// console.log(dbWrite)