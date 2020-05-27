/*
This function creates LogE numbers like 2.5E+15 into normal number string like: 2500000000000000
*/

function logEtoLongNumber($amountInLogE){
    
  $amountInLogE = (string)$amountInLogE;
  $noDecimalDigits = "";

  if(strrchr($amountInLogE, "E-")){
  
    $splitString = explode("E-",$amountInLogE); //split the string from 'e-'

    $noDecimalDigits = str_replace(".", "", $splitString[0]); //remove decimal point

    //how far decimals to move
     $zeroString = "";
    for($i=1; $i < $splitString[1]; $i++){
      $zeroString .= "0";
    }
    
    return  "0.".$zeroString.$noDecimalDigits;
    
  }
  else if(strrchr($amountInLogE, "E+")){

    $splitString = explode("E+", $amountInLogE); //split the string from 'e+'
    $ePower = (int)$splitString[1];

    $noDecimalDigits = str_replace(".","",$splitString[0]); //remove decimal point

    if($ePower >= count($noDecimalDigits)-1){
      $zerosToAdd = ($ePower ) - count($noDecimalDigits);

      for($i=0; $i <= $zerosToAdd; $i++){
        $noDecimalDigits .= "0";
      }

    }
    else{
      //this condition will run if the e+n is less than numbers
      $stringFirstHalf = array_slice($noDecimalDigits,0,$ePower+1);
      $stringSecondHalf = array_slice($noDecimalDigits,$ePower+1);
      
      return $stringFirstHalf.".".$stringSecondHalf;
    }
    
    return $noDecimalDigits;
  }
  
  return $amountInLogE;  //by default it returns stringify value of original number if its not logarithm number
}
