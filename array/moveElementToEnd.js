function moveElementToEnd(array, toMove) {
    // Write your code here.
      var garbage = []
      var storage = []
      if(array[0] === undefined) return [];
      if(array.includes[toMove] === false) {return array;}
      else{
          for (let i in array){
              if(array[i] === toMove){
                  storage.push(array[i]);
              }else{
                  garbage.push(array[i])
              }
          }
      }
  
      return garbage.concat(storage)
      
  }

array = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5],
toMove = 5
console.log(moveElementToEnd(array,toMove))