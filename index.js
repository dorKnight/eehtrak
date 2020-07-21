var aud = new Audio('audio/aud1.mp4');
function audio(){
  aud.play();
var timeLeft = 10;
    var elem = document.getElementById('some');

    var timerId = setInterval(countdown, 1000);

    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.style.top="12%";
        elem.style.left="40%";
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
}
