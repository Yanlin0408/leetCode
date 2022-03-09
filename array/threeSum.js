function threeNumberSum(array, targetSum) { 
	var allTargets = [];

	function decideAddOrNot(threeSum) {
	  var see = allTargets.filter(ele => ele.toString() === threeSum.toString())
		if(see.length !== 0) return true;
		}
	
	for(const currentFirstIdx in array){
		// var oneThreeSum = [];
		var theArray = Array.from(array);
		//if targetSum = 8, currentFirst = 3, we need 5 from rest of the array
		var weNeed = targetSum - array[currentFirstIdx]; 
		theArray.splice(currentFirstIdx,1); //remove it temporarily, then what we are dealing with is a twosum
		
		for(const currentSecIdx in theArray){
			var oneThreeSum = [];
			var weFinallyNeed = weNeed - theArray[currentSecIdx];
			const sec = theArray[currentSecIdx];
            var theSecArray = Array.from(theArray);
			theSecArray.splice(currentSecIdx,1)

			//remove it temporarily, find what we finally need
			if (theSecArray.includes(weFinallyNeed)){
				// if it is found, integrate threeSum and sort it.
				oneThreeSum.push(array[currentFirstIdx],sec,weFinallyNeed)
				oneThreeSum.sort((a,b) => a-b);
				//make sure there is no redundancy.
				if (decideAddOrNot(oneThreeSum) !== true){
					allTargets.push(oneThreeSum)
					break;
				}
			}
		}
	}
	// finished finding all targets
    // sort all targets in a way to satisfy requirement
	allTargets.sort((a,b) => a[0]-b[0]) // make it sorted off the first digit
	
	try {
  	var currentFirst = allTargets[0][0] 
	}
	catch(err) {
  	return allTargets;
	}
	
	var currentGroup = []
	var newAllTargets = []
	
    // put all threeSums with same first index in a group
    // we sort them and do the next group of threeSums...
	for (let currentSum of allTargets){
		if(currentSum[0] === currentFirst){
			currentGroup.push(currentSum);
		}else{
			currentGroup.sort((a,b) => a[1] - b[1]);
			for (let i of currentGroup){
				newAllTargets.push(i);
			}
            currentGroup = []
			currentFirst = currentSum[0]
            currentGroup.push(currentSum)
		}
	}
    
    for (let i of currentGroup){
        newAllTargets.push(i);
    }
	return newAllTargets
}

// threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15],18)
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15],18))