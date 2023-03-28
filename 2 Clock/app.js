const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// we need to run this function in every second;
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds(); 
    // console.log(seconds); convert these seconds into degrees to move the clock
    const secondsDegrees = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes();
    const minsDegrees = ((mins/60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`

    const hour = now.getHours();
    hourDegrees = ((hour/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
}

setInterval(setDate,1000);