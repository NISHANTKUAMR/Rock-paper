const choices = [

'rock',
'paper',
'scissors'

];


let playerScore = 0;

let computerScore = 0;



function play(userChoice){


const computerChoice =

choices[Math.floor(Math.random()*3)];



document.getElementById("user").innerHTML=

"You : "+userChoice;



document.getElementById("computer").innerHTML=

"Computer : "+computerChoice;




let result="";



if(userChoice===computerChoice){

result="Draw 🤝";

}


else if(

(userChoice==='rock' && computerChoice==='scissors')

||

(userChoice==='paper' && computerChoice==='rock')

||

(userChoice==='scissors' && computerChoice==='paper')

){

result="You Win 🎉";

playerScore++;

}


else{

result="Computer Wins 🤖";

computerScore++;

}



document.getElementById("result").innerHTML=result;


document.getElementById("playerScore").innerHTML=

playerScore;



document.getElementById("computerScore").innerHTML=

computerScore;


}




document.getElementById("reset").onclick=()=>{


playerScore=0;

computerScore=0;


document.getElementById("playerScore").innerHTML=0;

document.getElementById("computerScore").innerHTML=0;


document.getElementById("result").innerHTML=

"Choose Move";


};