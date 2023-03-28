window.addEventListener('keydown',playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    if(!audio) {
        return;
    }
    audio.currentTime = 0; // it will help to play audio when you press key very fast continously
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    audio.play();
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    console.log(this);
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');

// console.log(keys);
keys.forEach(key =>key.addEventListener('transitionend',removeTransition));

// or 

// keys.forEach(function(key) {
//     key.addEventListener('transitionend',removeTransition)
// })