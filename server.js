// Dev Notice! server is template from 14-handlebars acvivity 04

// dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var parser = require("body-parser");
var cheerio = require("cheerio")
var mongoose = require("mongoose");
var request = require("request");

// creating express app
var app = express();

// setting port
var port = process.env.PORT || 3000;

// setting handlebars as default template
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

///////////////////////////////////////////////
// Data will need to replace data with 
// info scraped from cheerio and inserted into mongo
///////////////////////////////////////////////

// data (CHANGE "Lunch" titles)
var lunches = [
    {
      headline: "Terroist attack",
      summary: "twin towers in new york city fall",
      url: "www.NYTimes.com"
    }, {
        headline: "Terroist attack",
        summary: "twin towers in new york city fall",
        url: "www.NYTimes.com"
    }
  ];
  ///////////////////////////////////////////////
  // route using loop (see handlebars activity 11 
  // for example of multiple iterations)
  ///////////////////////////////////////////////

  // routes
  app.get("/", function(req, res) {
    for (i = 0; i < lunches.length; i++) {
        res.render("index", lunches[i]);
    }
  });

  // original route
    //  app.get("/", function(req, res) {
    //     res.render("index", lunches[0]);
    //   });
  
  
  // Initiate the listener.
  app.listen(port, function() {
      console.log("listening on port: " + port);
  });
