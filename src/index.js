import Bacteria from "./scripts/bacteria"
import Human from "./scripts/human"

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("cell1")
    const ctx = canvas.getContext("2d")
    const canvas1 =  document.getElementById("cell2")
    const ctx1 = canvas1.getContext("2d")
   
   const human = new Human(ctx)
   human.animate()

   const bacteria = new Bacteria(ctx1)
   bacteria.animate()
   
})
