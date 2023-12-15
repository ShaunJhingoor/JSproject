
import Eukaryotic from "./scripts/eukaryotic"
import Mitochondria from "./scripts/mitochondria"

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("cell1")
    const ctx = canvas.getContext("2d")
    const canvas1 =  document.getElementById("cell2")
    const ctx1 = canvas1.getContext("2d")
    

    ctx.beginPath()
    ctx.arc(225, 275, 200, 0, 2 * Math.PI)

    ctx.fillStyle = "rgb(226,241,250)";
    ctx.fill();
    ctx.strokeStyle = "rgb(244,180,111)"; 
    ctx.lineWidth = 7;
    ctx.stroke();

   
    ctx1.beginPath();
    
    ctx1.arc(225, 280 - 200 / 2, 200 / 2, Math.PI, 0);
   
    ctx1.arc(225, 280 + 200 / 2, 200 / 2, 0, Math.PI);
    
    ctx1.fillRect(225 - 200 / 2, 280 - 200 / 2, 200,200);

    ctx1.fillRect(225 + 100, 275 - 80 / 2, 30, 80);
  
    ctx1.strokeStyle = "green";
    ctx1.lineWidth = 7;

    ctx1.closePath();
    ctx1.fillStyle = "rgb(236,227,255)";

    ctx1.fill();
    ctx1.stroke();

    const mitochondria = new Mitochondria(ctx,"test") 
    mitochondria.setImageSource('mitochondria.png')
    // canvas.addEventListener('mouseover', (e) => mitochondria.handleMouseOver(e));
    // canvas.addEventListener('mouseout', () => mitochondria.handleMouseOut());
    new Eukaryotic(ctx,mitochondria)
})
// document.addEventListener("DOMContentLoaded", () => {

//     const cell1 = document.getElementById("cell1");
//     // debugger;
   
//     new Eukaryotic(cell1)
//     console.log("hello world");
// });