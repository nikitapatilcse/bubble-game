var timer=60;
var randomNumber;
var timerlem=document.querySelector('#timerelem');
var hitelelem=document.querySelector('#hitelem');
var btmpanel=document.querySelector('#btmpanl');
var score=0;

setInterval(function(){
    if(timer){
        --timer;
        timerelem.textContent =timer;
    }
    else{
        btmpanel.innerHTML=`<h1>Game over score :- ${score}</h1> `;
    }
},1000);

function getNewGuess(){
    //random number
    randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
     hitelelem.textContent = randomNumber;
}
function makebubble(){
    for(var i=0;i<79;i++){
        var randomNumber = Math.floor(Math.random() * 10);
        var tem = `<div class="bubble">${randomNumber}</div>`;
        btmpanel.innerHTML += tem;

    }

}
btmpanel.addEventListener('click',function(detels){
    var clickbtn;
    clickbtn=detels.target.textContent;
    console.log(clickbtn);
    console.log(randomNumber);

    if(clickbtn==randomNumber){
        score=score+10;
        console.log(score);
        scorelm.innerHTML=score;
        getNewGuess();
        btmpanel.innerHTML='';
        makebubble();
        
    }
    else{
        console.log('wrong');
    }
})


makebubble();
getNewGuess();