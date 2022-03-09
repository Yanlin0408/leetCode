function twoNumberSum(array, targetSum) {
    // Write your code here.
      var resultArray = []
      for(i = 0; i < array.length; i++){
              for(j = 0;j < array.length; j++){
                  if(i != j){
                      if(array[i] + array[j] == targetSum){
                          var singleOutput = [];
                          singleOutput.push(array[i],array[j]);
                          //resultArray.push(singleOutput);
                      }
                  }
                  }
          }
      if (singleOutput === undefined){
          return [];
      }
      return singleOutput;
  }