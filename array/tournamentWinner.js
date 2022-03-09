function tournamentWinner(competitions, results) {
    // Write your code here.
      var scoreTable =  []  //scoreTable is a [[team, score]] hashtable
      var listCompetitors = []	//listCompetitors stores all the teams in an array
      
      for (let idx in competitions){
          if (competitions.length === 1){  //in case the length of competitions is only one, we add both teams in our list
              listCompetitors.push(competitions[0][0]);
              listCompetitors.push(competitions[0][1]);
          }
          
          let competitor = competitions[idx][0];  
          let competitorSec = competitions[idx][1];		//usually we just append team into listCompetitors by push()
          if(listCompetitors.includes(competitor) === false){		//handling repetition
              listCompetitors.push(competitor);
          }
          if(listCompetitors.includes(competitorSec) === false){
              listCompetitors.push(competitorSec);
          }
      }
      
      let i = 0;
      for (let team of listCompetitors) {  //initialize the scoreTable with team name and initial score 0
          scoreTable[i] = [team,0];
          i = i+1;
      }
      
      function findIndexByValue(key,array) {  //this function use key as an input and return the Index as output
          for (let i in array){
              if(key === array[i]){
                  return i;
              }
          }
      }
      
      for (let idx in competitions){  //iterate through the competitions and results and finish my scoreTable
          let targetIdx = 0;
          if (results[idx] === 0){
              targetIdx = findIndexByValue(competitions[idx][1],listCompetitors);
              scoreTable[targetIdx][1] = scoreTable[targetIdx][1] + 3;
          }else{
              targetIdx = findIndexByValue(competitions[idx][0],listCompetitors);
              scoreTable[targetIdx][1] = scoreTable[targetIdx][1] + 3;
          }
      }
      
      //find the result by sorting the score inside hashtable
      let resultTeam = scoreTable.sort((a, b) => a[1] - b[1])[scoreTable.length-1][0];
      
      return resultTeam;
  }

  competitions = [
    ["Bulls", "Eagles"],
    ["Bulls", "Bears"],
    ["Bulls", "Monkeys"],
    ["Eagles", "Bears"],
    ["Eagles", "Monkeys"],
    ["Bears", "Monkeys"]
  ]

  results = [1, 1, 1, 1, 1, 1]

  console.log(tournamentWinner(competitions,results))