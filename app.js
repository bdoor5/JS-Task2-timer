//Variables
let time=0;
let timeid=0;
let timeout=true;

//Elements in a variable
const start=document.querySelector("#start");
const reset=document.querySelector("#reset");
const timer=document.querySelector("#time-display");

//use this function to start the timer
const initClock=()=>{
timeout=false;
timeid=setInterval(() => {
    time++;
    timerCount();
}, 1000);
};
//this function update the timer values
const timerCount=()=>{
    const min=Math.floor(time/60);
    const sec=time%60;
    if(sec<10){
        timer.innerHTML=`${min}:0${sec}`;
    }
    else{
        timer.innerHTML=`${min}:${sec}`;
    }
};
// stop and clear the timer 
const stopClock=()=>{
   clearInterval(timeid);
};

// Start the timer
start.addEventListener("click",function(){
    if (timeout){
        initClock()
    }
});
reset.addEventListener("click",function(){
  stopClock();
  timeout=true;
  time=0;
  timerCount(); 
});
