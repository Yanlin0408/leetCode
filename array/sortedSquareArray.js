function sortedSquaredArray(array) {
    // Write your code here.
      // create a callback function, since sort() method doesn't work when sorting integars
      function sortEggsInNest(a, b) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }
      // create another callback function, since sort() method doesn't work when sorting integars (reduced version)
      function sortEggsInNests(a,b) {
          return a > b ? 1 : b > a ? -1 : 0;  
      }
      
      var squaredArray = [];
      for(let i of array){
          squaredArray.push(i*i);
      }
      squaredArray = squaredArray.sort(sortEggsInNests);
    return squaredArray;
  }