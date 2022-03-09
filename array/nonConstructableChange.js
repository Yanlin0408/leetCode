function nonConstructibleChange(coins) {
	var theChange = 0;
	coins.sort((a,b)=>a-b)
	
	for(const currentCoin of coins){
		if(currentCoin <= (theChange+1)){
			theChange += currentCoin;
		}else{
			return theChange + 1;
		}
		
	}
	return theChange+1
}

coins = [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]
console.log(nonConstructibleChange(coins))