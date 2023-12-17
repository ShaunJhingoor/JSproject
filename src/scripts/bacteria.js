import Capsule from "./capsule";
import Cellwall from "./cellWall";
import Plasmamemembrane from "./plasmamemembrane";
import Cytoplasm from "./cytoplam1";
import Flagella from "./flagella";
import Plasmid from "./plasmid";
import Pilli from "./pilli";
class Bacteria{
    constructor(ctx){
        this.ctx = ctx
        this.canvas = this.ctx.canvas
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.capsule = new Capsule(ctx)
        this.cellwall = new Cellwall(ctx)
        this.cytoplasm = new Cytoplasm(ctx)
        this.plasmamemembrane = new Plasmamemembrane(ctx)
        this.flagella = new Flagella(ctx)
        this.plasmid = new Plasmid(ctx)
        this.pilli = new Pilli(ctx, 300, 220,.05,1)
        this.pilli1 = new Pilli(ctx, 300, 170,.06,1.3)
        this.pill2 = new Pilli(ctx, 300, 110, .07,1.7)
        this.pill3 = new Pilli(ctx,300, 250, .04,.8)
        this.pill4 = new Pilli(ctx,300, 300, .08,1.8)
        this.pill5 = new Pilli(ctx,300, 350, .04,1.5)

        this.pilli6 = new Pilli(ctx, 110, 225,.05,1)
        this.pilli7 = new Pilli(ctx, 95, 177,.06,1.3)
        this.pilli12 = new Pilli(ctx, 80, 150,.04,1.8)
        this.pilli8 = new Pilli(ctx, 110, 110, .07,1)
        this.pilli9 = new Pilli(ctx, 90, 255, .04,1.5)
        this.pilli10 = new Pilli(ctx,110, 306, .08,1)
        this.pilli11 = new Pilli(ctx, 90 , 357, .04,1.5)
        // x = 300 right // x = 110 left y = if width 1.5 needs to be 90ish if 1 needs to be 110
        this.flagella.setImageSource('flagella.png')
        this.organelles = [this.capsule, this.cellwall, this.plasmamemembrane, 
        this.cytoplasm, this.flagella, this.plasmid, this.pilli, this.pilli1,
        this.pill2, this.pill3, this.pill4, this.pill5, this.pilli6,this.pilli7,
        this.pilli8,this.pilli9,this.pilli10,this.pilli11, this.pilli12]
    }

    animate(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.organelles.forEach(org => org.animate(this.ctx))
        requestAnimationFrame((() => this.animate()))
    }

}
export default Bacteria