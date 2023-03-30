const currentTime = () => {
    const ele = document.querySelector('h1');
  
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
  
    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
  
    ele.innerText = `${hour}:${min}:${sec}`
  
  }
  
  setInterval(currentTime,1000);
  