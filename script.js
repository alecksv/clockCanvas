//       ====== CREATE GLOBAL VAR ================================START IN THE PAGE'S BASEMENT !!!
var angle = 0;
var radius = 200;
var widthYellow = document.getElementById("circleYellow").getAttribute("width");
var heightYellow = document
  .getElementById("circleYellow")
  .getAttribute("height");
var radiusYellow =
  widthYellow > heightYellow ? heightYellow / 2 - 3 : widthYellow / 2 - 3;
var yellowX = widthYellow / 2;
var yellowY = heightYellow / 2;
console.log(radiusYellow);
var radiusGreen = radiusYellow / 16;
var numClock = 0;
var angleRadians;
var centerGreenX;
var centerGreenY;

function startClockAnimation() {
  const canvasCircleYellow = document.getElementById("circleYellow");
  canvasCircleYellow.parentElement.style.display = "block";

  if (canvasCircleYellow && canvasCircleYellow.getContext("2d")) {
    let ctx = canvasCircleYellow.getContext("2d");
    blank();
    //setInterval(anim, 10);
    requestAnimationFrame(anim);

    function blank() {
      //         ================ CREATE YELLOW CIRCLE ======================
      ctx.strokeStyle = "#fcca66";
      ctx.fillStyle = "#fcca66";
      ctx.beginPath();
      ctx.arc(yellowX, yellowY, radiusYellow, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      // ctx.save();
      //         ====CREATE GREEN CIRCLES========================
      for (let i = 1; i < 13; i++) {
        angle += 30;
        angleRadians = (angle * Math.PI) / 180;
        centerGreenX = yellowX + radius * Math.sin(angleRadians);
        centerGreenY = yellowY - radius * Math.cos(angleRadians);
        ctx.beginPath();
        ctx.arc(centerGreenX, centerGreenY, 40, 0, 2 * Math.PI);
        ctx.fillStyle = "#48b382";
        ctx.fill();
        //          ====CREATE TEXT ========================================
        numClock = i;
        ctx.font = "bold 36px Franklin Gothic Medium";
        ctx.fontWeight = "900";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(numClock, centerGreenX, centerGreenY);
        // ctx.save();
      }
    }

    function anim() {
      blank();
      // ==== CREATE ARROWS ======================================
      var presentTime = new Date();
      var hoursValue = presentTime.getHours();
      var minutesValue = presentTime.getMinutes();
      var secondsValue = presentTime.getSeconds();
      var angleH = hoursValue * 30;
      var angleM = minutesValue * 6;
      var angleS = secondsValue * 6;
      // console.log(`${hoursValue}-  ${minutesValue}-  ${secondsValue}`);
      var angleRadHour = (angleH * Math.PI) / 180;
      var angleRadMinutes = (angleM * Math.PI) / 180;
      var angleRadSeconds = (angleS * Math.PI) / 180;
      // console.log(`${angleH}-  ${angleM}-  ${angleS}`);
      // console.log(`${angleRadHour}-  ${angleRadMinutes}-  ${angleRadSeconds}`);

      centerGreenXSec = yellowX + radius * Math.sin(angleRadSeconds);
      centerGreenYSec = yellowY - radius * Math.cos(angleRadSeconds);
      centerGreenXMin = yellowX + radius * Math.sin(angleRadMinutes);
      centerGreenYMin = yellowY - radius * Math.cos(angleRadMinutes);
      centerGreenXHour = yellowX + radius * Math.sin(angleRadHour);
      centerGreenYHour = yellowY - radius * Math.cos(angleRadHour);
      //         ===HOURS ARROW===========
      ctx.beginPath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.lineCap = "round";
      ctx.moveTo(yellowX, yellowY);
      ctx.lineTo(centerGreenXHour, centerGreenYHour);
      ctx.stroke();
      //         ====MINUTES ARROW ==================
      ctx.beginPath();
      ctx.lineWidth = 10;
      ctx.strokeStyle = "red";
      ctx.lineCap = "round";
      ctx.moveTo(yellowX, yellowY);
      ctx.lineTo(centerGreenXMin, centerGreenYMin);
      ctx.stroke();
      // ============ SECONDS ARROWS ============
      ctx.beginPath();
      ctx.rotate((angleS * Math.PI) / 180);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.lineWidth = 5;
      ctx.strokeStyle = "blue";
      ctx.lineCap = "round";
      ctx.moveTo(yellowX, yellowY);
      ctx.lineTo(centerGreenXSec, centerGreenYSec);
      ctx.stroke();
      //           ===========electric clock====================
      if (hoursValue < 10) {
        hoursValue = "0" + hoursValue;
      }
      if (minutesValue < 10) {
        minutesValue = "0" + minutesValue;
      }
      if (secondsValue < 10) {
        secondsValue = "0" + secondsValue;
      }
      var electricClock = `${hoursValue} : ${minutesValue} : ${secondsValue}`;
      ctx.font = "bold 42px Franklin Gothic Medium";
      ctx.fontWeight = "600";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(electricClock, centerGreenX, centerGreenY + 270);
      requestAnimationFrame(anim);
    }
  }
}
startClockAnimation();
