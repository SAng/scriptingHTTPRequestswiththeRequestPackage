var url = 'https://sytantris.github.io/http-examples/future.jpg';
var request = require('request');
var fs = require('fs');

request.get(url)
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('HTTPS Response Code: ', response.statusCode);
         console.log('Response Message: ', response.statusMessage);
         console.log('Content Type: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));