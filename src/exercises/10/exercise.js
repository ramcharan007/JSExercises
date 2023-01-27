// Complete the below function. Print the names of the candidates elibile to vote
// - Use Array methods
// - Do not use loops

// Example of inputArray
/*
	[
		{
			name:"Ravi",
			age:28
		},
		{
			name:"Teja",
			age:28
		}
	]
*/
function findVoteEligibleCandidates(populationList) {
	for(let i=0;i<populationList.length;i++){
		if(populationList[i].age>18){
			console.log(`${populationList[i].name} is eligible to vote`);
		}
		else{
			console.log(`${populationList[i].name} is not eligible to vote`);
		}
	}
}
