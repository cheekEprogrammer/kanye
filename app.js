const express = require("express");
const https = require("https");
const app = express();


app.get("/", function(req, res){

  const url = "https://api.kanye.rest/";

  https.get(url, function(response){

    response.on("data", function(data){
      const quote = JSON.parse(data);

      res.write("<title>its kanye time</title><div style='padding-left: 25%;padding-right: 25%;margin-top: 10%;text-align: center;'<br><img src='https://www.pngkey.com/png/full/163-1636867_kanye-west-png-transparent-kanye-west-face-transparent.png' width='40%'>");
      res.write("<h2><i>" + quote.quote + "</i></h2></div>");
      res.send();
    });
  });
});








app.listen(process.env.PORT || 3000, function(){
  console.log("Server Started.");
});
