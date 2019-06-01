var c = document.getElementById('mycanvas');
var ctx = c.getContext('2d');

// add increment
var increment = 1;
var cookies = 0;
var s = document.getElementById('score');
s.innerHTML = cookies;

c.addEventListener("click",draw, true);

function draw(event) {
   cookies = cookies + increment; // change increment
   s.innerHTML = cookies;
    
   var aud = document.getElementById("myAudio");
   aud.play();    
      
   if (cookies == 20) { // how many clicks
       increment = 2;
       award(increment,"green");
   }
    
   var alpha = 1.0;
   interval = setInterval(function () {
      ctx.globalAlpha = alpha;
      ctx.font = "normal 30px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("+" + increment, event.clientX,event.clientY);
      alpha = alpha - 0.05;
      if (alpha <= 0) {
          ctx.clearRect(0,0,300,300);
          clearInterval(interval);
      }
   }, 5);
}

function award(increment,colour) {
    mytab = "<table><tr>";
    mytab = mytab + "<td style='background-color:" + colour +
";padding:25px; color: white'>";
    mytab = mytab + "Congratulations! x" + increment + " cursor";
    mytab = mytab + "</td>";
    mytab = mytab + "</tr></table>";
    mydiv = document.getElementById("store");
    mydiv.innerHTML = mytab;
}

