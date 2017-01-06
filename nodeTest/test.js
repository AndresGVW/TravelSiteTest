var vFiles = require('fs');
var https = require('https');

vFiles.writeFile(__dirname + "/index.html", "<h1>HTML Rocks!!!</h1>");

var galaxyUrl = "https://apod.nasa.gov/apod/ap170105.html";
var galaxyFile = vFiles.createWriteStream(__dirname + "/node-galaxy.jpg");

var request = https.get(galaxyUrl, function(response){
	response.pipe(galaxyFile);
})