'use strict';

let secretNumber=Math.floor(Math.random()*20)+1;
let score=20;
let highscore=0;

function displayMessage(message){
    document.querySelector(".message").textContent=message;
}

function displayScore(scoree){
    document.querySelector(".score").textContent=scoree;
}

document.querySelector(".check").addEventListener('click',function(){
    let guess =Number(document.querySelector(".guess").value);

    //if guess is empty
    if(!guess){
     document.querySelector(".message").textContent='⛔️ No number!';
    }
    //if guess is correct
    else if(guess===secretNumber)
    {
        
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('🎉 Correct Number!');
        document.body.style.backgroundColor="#60b347";
        document.querySelector(".number").style.width="30rem";

       if(score>highscore)
       {
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
       }
        
    }
    //if guess is wrong
    else if(guess!==secretNumber)
    {
        if(score>1)
        {
            guess>=secretNumber?displayMessage('📈 Too high!') : displayMessage('📉 Too low!');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector(".message").textContent='💥 You lost the game!';
            document.querySelector('.score').textContent=0;
        } 
    }
    
})

document.querySelector(".again").addEventListener('click',function(){
    score=20;
    secretNumber=Math.floor(Math.random()*20)+1;
    displayMessage("Start guessing...");
    displayScore(score);
    document.body.style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value='';

})

