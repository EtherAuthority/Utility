//Added by Yogesh - 01/11/19 - To convert logarithm value like 1e23 into 10000000..  Start----->
function logEtoDecimal(amountInLogE, decimal){
    
	amountInLogE = amountInLogE.toString();
	var noDecimalDigits = "";

	if(amountInLogE.includes("e-")){
		
		var splitString = amountInLogE.split("e-");	//split the string from 'e-'

		noDecimalDigits = splitString[0].replace(".", ""); //remove decimal point
		var zerosToAdd = splitString[1] - noDecimalDigits.length;

		for(var i=0; i < zerosToAdd; i++){
			noDecimalDigits += "0";
		}

		if(splitString[1] < decimal){
			return noDecimalDigits;
		}
		else{
			return 0;
		}
	}
	else if(amountInLogE.includes("e+")){

		var splitString = amountInLogE.split("e+");	//split the string from 'e+'

		noDecimalDigits = splitString[0].replace(".", ""); //remove decimal point
		var zerosToAdd = splitString[1]  - noDecimalDigits.length;

		for(var i=0; i <= zerosToAdd; i++){
			noDecimalDigits += "0";
		}
		return noDecimalDigits;
	}
  else if(amountInLogE.includes(".")){
    var splitString = amountInLogE.split("."); //split the string from '.'
    return splitString[0];
  }
	return amountInLogE;
}

//following function returns original value of logarithm value like 1e24
function logEtoLongNumber(amountInLogE){
    
  amountInLogE = amountInLogE.toString();
  var noDecimalDigits = "";

  if(amountInLogE.includes("e-")){
    
    var splitString = amountInLogE.split("e-"); //split the string from 'e-'

    noDecimalDigits = splitString[0].replace(".", ""); //remove decimal point

    //how far decimals to move
    var zeroString = "";
    for(var i=1; i < splitString[1]; i++){
      zeroString += "0";
    }

    return  "0."+zeroString+noDecimalDigits;
    
  }
  else if(amountInLogE.includes("e+")){

    var splitString = amountInLogE.split("e+"); //split the string from 'e+'
    var ePower = parseInt(splitString[1]);

    noDecimalDigits = splitString[0].replace(".", ""); //remove decimal point

    if(ePower >= noDecimalDigits.length-1){
      var zerosToAdd = ePower  - noDecimalDigits.length;

      for(var i=0; i <= zerosToAdd; i++){
        noDecimalDigits += "0";
      }

    }
    else{
      //this condition will run if the e+n is less than numbers
      var stringFirstHalf = noDecimalDigits.slice(0, ePower+1);
      var stringSecondHalf = noDecimalDigits.slice(ePower+1);

      return stringFirstHalf+"."+stringSecondHalf;
    }
    return noDecimalDigits;
  }
  else if(amountInLogE.includes(".")){
        var splitString = amountInLogE.split("."); //split the string from '.'
        return splitString[0];
     }
  return amountInLogE;  //by default it returns stringify value of original number if its not logarithm number
}

//Added by Yogesh - 01/11/19 - To convert logarithm value like 1e23 into 10000000..  END  ----->
