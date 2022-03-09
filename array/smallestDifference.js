function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
      var storeAllPair = []
      
      for(let i of arrayOne){
          for(let j of arrayTwo){
              var absDiff = (i,j) => ((i-j)>0)?(i-j):-(i-j)
              storeAllPair.push([absDiff(i,j),i,j]);
          }
      }
      
      storeAllPair.sort((a,b) => a[0]-b[0])
      answer = [storeAllPair[0][1],storeAllPair[0][2]]
      return answer
  }
  
arrayOne = [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123],
arrayTwo = [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]

console.log(smallestDifference(arrayOne,arrayTwo))