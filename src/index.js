
import Eukaryotic from "./scripts/eukaryotic"
document.addEventListener("DOMContentLoaded", () => {

    const cell1 = document.getElementById("cell1");
    // debugger;
   
    new Eukaryotic(cell1)
    console.log("hello world");
});