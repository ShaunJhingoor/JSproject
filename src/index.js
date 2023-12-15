
// import Eukaryotic from "./scripts/eukaryotic"
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("cell1").getContext("2d")
    const ctx1 = document.getElementById("cell2").getContext("2d")
    

    ctx.beginPath()
    ctx.arc(225, 275, 200, 0, 2 * Math.PI)

    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.strokeStyle = "white"; 
    ctx.lineWidth = 3;
    ctx.stroke();

   
    ctx1.beginPath();
    ctx1.arc(225, 280 - 200 / 2, 200 / 2, Math.PI, 0);
   
    ctx1.arc(225, 280 + 200 / 2, 200 / 2, 0, Math.PI);
    
    ctx1.fillRect(225 - 200 / 2, 280 - 200 / 2, 200,200);

    ctx1.fillRect(225 + 100, 275 - 80 / 2, 30, 80);
  
    ctx1.strokeStyle = "white";
    ctx1.lineWidth = 3;

    ctx1.closePath();
    ctx1.fillStyle = "teal";

    ctx1.fill();
    ctx1.stroke();

    // const mitochondria = New Mitochondria()
    // new Eukaryotic(ctx,)
})
// document.addEventListener("DOMContentLoaded", () => {

//     const cell1 = document.getElementById("cell1");
//     // debugger;
   
//     new Eukaryotic(cell1)
//     console.log("hello world");
// });