function isValidSubsequence(array, sequence) {
    // Write your code here.
      var usedToCompare = [];
      var pivot = 0;
      for (let i in sequence){
          for (let j in array){ // i and j refers to the index in array and sequence
              //if this number in sequence hasn't been found in array yet, we compare the sequence to the array from the begin
           if(pivot == 0){
               if (sequence[i] == array[j]){
                  usedToCompare.push(sequence[i]);
                  pivot = parseInt(j,10) + 1;
                  break;
              }
           }
              //if this number in sequence has been found in array, we compare the sequence to the part of array behind pivot
              else{
               if(sequence[i] == array[pivot]){
                   usedToCompare.push(sequence[i]);
                   pivot = pivot + 1;
                   break;
               }else{
                   pivot = pivot + 1;
               }
           }
      }
      }
      // return pivot;
      // return usedToCompare;
      return JSON.stringify(usedToCompare) === JSON.stringify(sequence);
  }

  console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))