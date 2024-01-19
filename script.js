let userScore=0;
let computerScore=0;


const choices=document.querySelectorAll(".choice");
const userScoreUpdate=document.querySelector("#user-score");
const computerScoreUpdate=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const display=document.querySelector("#msg");
const drawGame=(userChoice) =>{
    console.log("game Draw!");
    display.innerText="GAME DRAW!";
};

const showWinner=(userWin,computerChoice,userChoice) => {
    if(userWin){
        userScore++;
        userScoreUpdate.innerText=userScore;
        display.innerText=`YOU WIN! YOUR ${userChoice} beats ${computerChoice}`;
        console.log("You WIN!");
        display.style.backgroundColor="green";
    }else{
        computerScore++;
        computerScoreUpdate.innerText=computerScore;
        display.innerText=`YOU LOSE! ${computerChoice} beats YOUR ${userChoice}`;
        console.log("YOU LOSE!");
        display.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    console.log("userChoice =",userChoice);
    const computerChoice=genCompChoice();
    console.log("computer choice=",computerChoice);
    if(userChoice===computerChoice){
        drawGame(userChoice);
    }else{ 
        let userWin=true;
        if(userChoice==="rock"){
            //sccissor,paper
            userWin=computerChoice==="paper"?false:true;
        }else{
            if(userChoice==="paper"){
                //rock,scissor
                userWin=computerChoice==="rock"?true:false;
            }else{
                //rock,paper
                userWin=computerChoice==="rock"?false:true;
            }
        }
        showWinner(userWin,computerChoice,userChoice);
    }
   
    
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
