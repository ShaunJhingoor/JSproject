import Capsule from "./capsule";
import Cellwall from "./cellWall";
class Bacteria{
    constructor(ctx){
        this.ctx = ctx
        this.canvas = this.ctx.canvas
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.capsule = new Capsule(ctx)
        this.cellwall = new Cellwall(ctx)
        this.organelles = [this.capsule, this.cellwall]
    }

    animate(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.organelles.forEach(org => org.animate(this.ctx))
        requestAnimationFrame((() => this.animate()))
    }

}
export default Bacteria