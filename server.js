'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const expect      = require('chai').expect;
const cors        = require('cors');
require('dotenv').config();
let path = require('path')

const apiRoutes         = require('./routes/api.js');


let app = express();

app.use('/public', express.static(process.cwd() + '/public'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index page (static HTML)


app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
    
  });
 

/*   app.route('/views/model.html')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname + '/views/model.html'))
    
  });
 */

 



//Routing for API 
apiRoutes(app);  
    
//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

const port = process.env.PORT || 3000;

//Start our server and tests!
app.listen(port, function () {
  console.log("Listening on port " + port);
  if(process.env.NODE_ENV==='test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch(e) {
          console.log('Tests are not valid:');
          console.error(e);
      }
    }, 10000);
  }
});

module.exports = app; //for testing
