class Eukaryotic {
    constructor(ctx){
        // nucleus,rough_endoplasmic_reticulum,smooth_endoplasmic_reticulum,cytoplasm,golgi){
        this.ctx = ctx
        this.canvas = this.ctx.canvas
        this.x = 225;
        this.y = 275
        this.updatex = 1 
        this.updatey = 1
        // this.animate = this.animate.bind(this)
        // this.nucleus = nucleus 
        // this.rough_endoplasmic_reticulum = rough_endoplasmic_reticulum 
        // this.smooth_endoplasmic_reticulum = smooth_endoplasmic_reticulum 
        // this.cytoplasm = cytoplasm 
        // this.golgi = golgi 
    }
    draw() {
       this.ctx.beginPath()
       this.ctx.arc(this.x, this.y, 200, 0, 2 * Math.PI)
    
       this.ctx.fillStyle = "rgb(226,241,250)";
       this.ctx.fill();
       this.ctx.strokeStyle = "rgb(244,180,111)"; 
       this.ctx.lineWidth = 7;
       this.ctx.stroke();
    
        // transfer reequeas animation frmMEMEi to index.js
        // 
    }

    // update(){
    //     if(this.x < this.ctx.width && this.y < this.ctx.height){
    //         this.x = this.x + this.updatex 
    //         this.y = this.y + this.updatey
    //     }else{
    //         this.x = this.x - this.updatex 
    //         this.y = this.y - this.updatey
    //     }
    // }

    animate(){
        // this.update()
        this.draw()
    }
}
export default Eukaryotic;