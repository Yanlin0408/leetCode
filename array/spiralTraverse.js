function spiralTraverse(array) {
    // Write your code here.
      var ans = [array[0][0]]
      var mode = "R"
      var counter = 0
      var pos = [0,0];
      var copy = Array.from(array)
      
      function findNext(mode) {
          switch(mode) {
              case "R":
                  return copy[pos[0]][pos[1]+1]
                  break;
              case "D":
                  try{
                    return copy[pos[0]+1][pos[1]]
                    break;
                  }catch{
                    return undefined;
                  }
              case "L":
                  return copy[pos[0]][pos[1]-1]
                  break;
              case "U":
                  try{
                    return copy[pos[0]-1][pos[1]]
                    break;
                  }catch{
                    return undefined;
                  }
          }
      }
      while(counter < array.length*array[0].length-1){
        console.log(pos,mode)  
          if(findNext(mode) === undefined){
              if(mode === "R"){
                  console.log("turn D")
                  mode = "D";
                  ans.push(findNext(mode))
                  pos = [pos[0]+1,pos[1]]
                  copy[pos[0]][pos[1]] = undefined
                  counter++
                  continue;
              }
              else if(mode === "D"){
                console.log("turn L")
                mode = "L";
                ans.push(findNext(mode))
                pos = [pos[0],pos[1]-1]
                copy[pos[0]][pos[1]] = undefined
                counter++
                continue;
              }
              else if(mode === "L"){
                console.log("turn U")
                mode = "U";
                ans.push(findNext(mode))
                pos = [pos[0]-1,pos[1]]
                copy[pos[0]][pos[1]] = undefined
                counter++
                continue;
              }
              else if(mode === "U"){
                console.log("turn R")
                mode = "R";
                ans.push(findNext(mode))
                pos = [pos[0],pos[1]+1]
                copy[pos[0]][pos[1]] = undefined
                counter++
                continue;
            }
              
          }else{
              switch(mode) {
              case "R":
                ans.push(findNext(mode))
                pos = [pos[0],pos[1]+1]
                copy[pos[0]][pos[1]] = undefined
              	break;
              case "D":
                ans.push(findNext(mode))
                pos = [pos[0]+1,pos[1]]
                copy[pos[0]][pos[1]] = undefined
              	break;
              case "L":
                ans.push(findNext(mode))
                pos = [pos[0],pos[1]-1]
                copy[pos[0]][pos[1]] = undefined
              	break;
              case "U":
                ans.push(findNext(mode))
                pos = [pos[0]-1,pos[1]]
                copy[pos[0]][pos[1]] = undefined
              	break;
          
          }
          
        }
          copy[0][0] = undefined
          counter++
      }
      console.log(copy)
      return ans
      
  }

  var aaaa = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ]

  console.log(spiralTraverse(aaaa))
