import Bacteria from "./scripts/bacteria"
import Human from "./scripts/human"
// import Mitochondria from "./scripts/mitochondria"

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("cell1")
    const ctx = canvas.getContext("2d")
    const canvas1 =  document.getElementById("cell2")
    const ctx1 = canvas1.getContext("2d")
   
    // ctx1.beginPath();
    
    // ctx1.arc(225, 280 - 200 / 2, 200 / 2, Math.PI, 0);
   
    // ctx1.arc(225, 280 + 200 / 2, 200 / 2, 0, Math.PI);
    
    // ctx1.fillRect(225 - 200 / 2, 280 - 200 / 2, 200,200);

    // ctx1.fillRect(225 + 100, 275 - 80 / 2, 30, 80);
  
    ctx1.strokeStyle = "green";
    ctx1.lineWidth = 7;

    ctx1.closePath();
    ctx1.fillStyle = "rgb(236,227,255)";

    ctx1.fill();
    ctx1.stroke();

   const human = new Human(ctx)
   human.animate()

   const bacteria = new Bacteria(ctx1)
   bacteria.animate()
})
// document.addEventListener("DOMContentLoaded", () => {

//     const cell1 = document.getElementById("cell1");
//     // debugger;
   
//     new Eukaryotic(cell1)
//     console.log("hello world");
// });