'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');


/* function start() {
  console.log('woo!');
  pics();
  }
  
  
function pics() {
  let image = document.getElementById('pics')
 // let size='/public/'.length;
  let randomindex = Math.floor(Math.random() * 2);
  let randomdata = size[randomindex];
  
  image = randomdata


   }
 */

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();


app.route('/api/convert').get(function (request, response) {

  let input = request.query.input;
  let initNum = convertHandler.getNum(input)
 // let initUnit = convertHandler.getUnit(input)
  let returnNum = convertHandler.convert(initNum)
  //let returnUnit = convertHandler.convert(initNum)
  let toString = convertHandler.getString(initNum, returnNum, /* returnUnit */)


  //console.log(input)

  if (initNum == 'invalid number') {
 //   console.log('api invalid double')
    response.json('invalid input; please enter a number (e.g., 100, 50, etc)')
  }

 /*  if (initUnit == 'invalid unit') {
   // console.log('api invalid unit')
    response.json(initUnit)
  } */

  if (initNum == 'invalid number') {
   // console.log('api invalid number')
    response.json(initNum)
  }

 
    let responseObject = {}
    responseObject['initNum'] = initNum
  //  responseObject['initUnit'] = initUnit
    responseObject['returnNum'] = parseFloat(returnNum)
    //responseObject['returnUnit'] = returnUnit
    responseObject['string'] = toString


    response.json(responseObject);


})



};
