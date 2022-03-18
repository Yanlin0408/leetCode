// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, countStack = 1) {
    // Write your code here.
      var total = 0
      for(let ele of array){
          if (typeof(ele) === "number"){
              total += ele
          }
          else{
               total += productSum(ele,countStack+1)
          }
          
      }
      
      return total*countStack
      
  }