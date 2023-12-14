
// import Eukaryotic from "./scripts/eukaryotic"
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("cell1").getContext("2d")
    ctx.beginPath()
    ctx.arc(225, 275, 200, 0, 2 * Math.PI)
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.strokeStyle = "white"; 
    ctx.lineWidth = 3;
    ctx.stroke();
    // const mitochondria = New Mitochondria()
    // new Eukaryotic(ctx,)
})
// document.addEventListener("DOMContentLoaded", () => {

//     const cell1 = document.getElementById("cell1");
//     // debugger;
   
//     new Eukaryotic(cell1)
//     console.log("hello world");
// });