function getNthFib(n) {
    // Write your code here.
      if(n === 1){
          return 0;
      }else if (n === 2){
          return 1
      }else{
          return getNthFib(n-2) + getNthFib(n-1);
      }
      
  }