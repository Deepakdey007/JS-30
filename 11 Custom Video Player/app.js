// get our elements

const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const btnText = document.querySelector('.buttonText')
const fullScreen = document.querySelector('.fullScreen')

// build our functions

function togglePlay() {
    // if(video.paused) {
    //     video.play();
    // }
    // else{
    //     video.pause();
    // }

    // or best way using ternery operator

    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    // console.log(this);
    const icon = this.paused ? '▶' : '❚ ❚';
    toggle.textContent = icon
}

function skip() {
    // console.log("skipping");
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    // console.log(this.value);
    // console.log(this.name);

    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100; // currentTime and duration are properties of video
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    // console.log(e);
    // some basic mathematics

    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


function screenFull() {
    // console.log(this);
    if (!document.fullscreenElement) {
        player.requestFullscreen();

        // create a span tag
        const icon = document.createElement('i');
        icon.classList.add('fas','fa-compress');
        const span = document.createElement('span')
        span.classList.add('buttonText')
        span.appendChild(icon);

        // it will replace the old span tag in button by new span tag that we created;
        fullScreen.replaceChild(span,fullScreen.childNodes[1]);
    } 
    else {
        if(document.exitFullscreen) {
            document.exitFullscreen();
        }
        console.log(fullScreen.childNodes[1]);

        // here we do not create a span tag for expand because bydefault we have our old span tag which is expand so we use it hare.
        fullScreen.replaceChild(btnText,fullScreen.childNodes[1]);
    }
}

// hook up the event listners

video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);

toggle.addEventListener('click',togglePlay);
video.addEventListener('click',togglePlay);

skipButtons.forEach(button => button.addEventListener('click',skip))

ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

// no need to use an timeInterval 
// we will listen for the video to emit an event called "timeupdate", and 
// when that happens we will run handleProgress();

video.addEventListener('timeupdate',handleProgress);


let mouseDown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(event) => mouseDown && scrub(event));

progress.addEventListener('mousedown',() => mouseDown = true);
progress.addEventListener('mouseup',() => mouseDown = false);



fullScreen.addEventListener('click',screenFull);