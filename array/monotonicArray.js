function isMonotonic(array) {
    // Write your code here.
      var copy = Array.from(array)
      copy.sort((a,b) => b-a)
      if(copy.toString()===array.toString()){
          return true
      }else if(copy.sort((a,b) => a-b).toString() === array.toString()){
          return true
      }else{
          return false
      }
      
  }