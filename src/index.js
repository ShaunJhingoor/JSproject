
import Eukaryotic from "./scripts/eukaryotic"
import Mitochondria from "./scripts/mitochondria"

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("cell1").getContext("2d")
    const ctx1 = document.getElementById("cell2").getContext("2d")
    

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

    const mitochondria = new Mitochondria(ctx) 
    const imageSource = 'https://as2.ftcdn.net/v2/jpg/04/80/60/45/1000_F_480604502_iUcg5SG7KqSX51xiNwZAUfXNwhkjShU0.jpg';
    mitochondria.setImageSource(imageSource)
    new Eukaryotic(ctx,mitochondria)
})
// document.addEventListener("DOMContentLoaded", () => {

//     const cell1 = document.getElementById("cell1");
//     // debugger;
   
//     new Eukaryotic(cell1)
//     console.log("hello world");
// });