function StringChallenge(str) { 
    var replacement = {
      "ab":"c",
      "ac":"b",
      "bc":"a",
      "ba":"c",
      "ca":"b",
      "cb":"a",
    }
    var modiStr = str; //make a copy of the given string
    var modiArray = modiStr.split("");
    // this function is used to tell 
    // if we can reduce the string anymore.
    function judge(theStr){
      try{
        theArray = theStr.split("")
        for (let i =0; i<theArray.length-1 ; i++){
          if (theArray[i] === theArray[i+1]){
            continue;
          }else{
            return false;
          }
        }
        return true
      }catch{
        return true
      }
    }
  
    while(judge(modiStr) != true){
      //loop through the array in case where reduction appears in the back
      for(let i=0; i<modiArray.length-1; i++){
        if(modiArray[i] === modiArray[i+1]){
            continue
        }else{
            // find the two letters we want to replace
            var theKey = modiArray[i].concat(modiArray[i+1])
            // find the correct replacement
            var reduction = replacement[theKey]
            // throw away what we want to reduce
            modiArray.splice(i,2)
            // replace it with reduction
            modiArray.splice(i,0,reduction)
            break;
        }
        // start the next round of loop right after we do reduction
      }

      modiStr = modiArray.join("")   
    }
    return modiArray.length
  }

console.log(StringChallenge("acbabcbcaa"))
  