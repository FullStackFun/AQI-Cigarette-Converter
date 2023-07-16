function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input

    if (!result) {
      return 100
    }

    if(isNaN(result)) {
      return 'invalid number'
    }

    return result
  };
  
 
  
  this.getReturnUnit = function(initUnit) {
    let result;

    result = initUnit;
    
    if (result === 'mi' || result === 'MI') {
      return 'km'
    }

    if (result === 'km' || result === 'KM') {
      return 'mi'
    }


    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum) {
    
    let aqitocigs = .05
    let result

  

    result = (aqitocigs * initNum).toFixed(5)
    result = parseFloat(result)
    
    
    return parseFloat(result)
  };
  
  this.getString = function(initNum, returnNum) {
    let result;

   initUnitString = 'AQI'
   let fraction = (returnNum/3).toFixed(1)
    let quarter = (returnNum/6).toFixed(1)
    let quarterUnitString = 'cigarettes', fractionUnitString = 'cigarettes'

    if (fraction == 1.0) {
        fraction = 1
        fractionUnitString = 'cigarette'
        
        
    }

    if (quarter == 1.0) {
      
      quarter = 1
      quarterUnitString = 'cigarette'
      
      
  }



if (initNum == 20) {
  returnUnitString = 'cigarette'
}

    else {
      
      returnUnitString = 'cigarettes'

    }

    
    let Stanfordd = '<a href=https://woods.stanford.edu/stanford-wildfire-research/news/health-impacts-wildfire-smoke>Stanford Wildfire Research Study (2000)</a>'

    let Stanford = "<a href='https://woods.stanford.edu/stanford-wildfire-research/news/health-impacts-wildfire-smoke'>"

    let hmm = Stanford.innerHTML

    if(initNum == 0) {
      returnNum = 'zero'
      {fraction, quarter = 'zero'}
    }

    result = "An AQI of " + initNum + " over a 24 hour period is equivalent to smoking " + returnNum + " " + returnUnitString + ". These results apply over the course of a day's worth of exposure. Unless you spend the entire day in that environment, divide your exposure by the number of hours you spend at a given AQI level, which will typically be less than 24. For example, if you spend 8 hours somewhere with an AQI of " + initNum + ", your exposure will be equivalent to that of having smoked around " + fraction + " " + fractionUnitString +  ". For most people, that's the exposure they can expect after a full day of work. If you're only in the environment for 4 hours while the average AQI reads " + initNum + ", your exposure will be equivalent to that of smoking around " + quarter + " " + quarterUnitString + ". These assumptions are based on the results of the Stanford Wildfire Research Study: Health Impacts of Wildfire Smoke (2000)."
    
    return result;
  };
  
}

module.exports = ConvertHandler;
