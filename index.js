var aud = new Audio('audio/aud2.mp4');
var timerId;
function audio(){
  aud.play();
var timeLeft = 10;
    var elem = document.getElementById('some');
    if(timerId){
      return;
    }
    timerId = setInterval(countdown, 1000);

    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.style.top="12%";
        elem.style.left= timeLeft<10 ?"40%":"35%";
        elem.style.fontSize = "50px";
        elem.innerHTML = timeLeft;
        timeLeft--;

      }
    }
  }
function doSomething(){
  document.body.style.backgroundImage = "url('images/img511.jpg')";
  document.getElementById("container1").style.display = "none";
  document.getElementById("cont").style.display = "block";
  document.getElementById("container2").style.display = "block";
}
function video(){
  aud.pause();
  document.getElementById("container2").style.display = "none";
  document.getElementById("vid").style.bottom = "0%";
  document.getElementById("play").play();
}
