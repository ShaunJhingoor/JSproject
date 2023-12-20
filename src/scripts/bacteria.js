import Capsule from "./capsule";
import Cellwall from "./cellWall";
import Plasmamemembrane from "./plasmamemembrane";
import Cytoplasm from "./cytoplam1";
import Flagella from "./flagella";
import Plasmid from "./plasmid";
import Pilli from "./pilli";
import Nucleoid from "./nucleoid";
import Ribsomes from "./ribsomes";
import CapsuleBox from "./capsulebox";
import Cellwallbox from "./cellwallbox";
import PlasmaMembranebox from "./plasmamembranbox";
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
        this.nucleoid = new Nucleoid(ctx)

        this.ribsomes = new Ribsomes(ctx,180,260,.03)
        this.ribsomes1 = new Ribsomes(ctx,184,280,.05)
        this.ribsomes2 = new Ribsomes(ctx,190,290,.028)
        this.ribsomes3 = new Ribsomes(ctx,170,260,.047)
        this.ribsomes4 = new Ribsomes(ctx,200,410,.045)
        this.ribsomes5 = new Ribsomes(ctx,180,90,.054)
        this.ribsomes6 = new Ribsomes(ctx,260,98,.06)
        this.ribsomes7 = new Ribsomes(ctx,280,200,.036)
        this.ribsomes8 = new Ribsomes(ctx,280,180,.041)
        this.ribsomes9 = new Ribsomes(ctx,260,370,.047)
        this.ribsomes10 = new Ribsomes(ctx,180,200,.04)
        this.ribsomes11 = new Ribsomes(ctx,180,140,.056)
        this.ribsomes12 = new Ribsomes(ctx,220,130,.048)
        this.ribsomes13 = new Ribsomes(ctx,220,100,.046)
        this.ribsomes14 = new Ribsomes(ctx,180,340,.056)
        this.ribsomes15 = new Ribsomes(ctx,280,335,.049)
        this.ribsomes16 = new Ribsomes(ctx,270,310, 0.052)
        this.ribsomes17 = new Ribsomes(ctx,280,280,.067)
        this.ribsomes18 = new Ribsomes(ctx,280,240,0.043)
        this.ribsomes19 = new Ribsomes(ctx,260,140,.032)

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
        
        this.capsulebox = new CapsuleBox(this.ctx)
        this.cellwallbox = new Cellwallbox(this.ctx)
        this.plasmamemembranebox = new PlasmaMembranebox(this.ctx)

        this.flagella.setImageSource('flagella.png')
        this.nucleoid.setImageSource('nucleoid.png')
        this.plasmid.setImageSource('plasmid.png')
        this.organelles = [this.capsule, this.cellwall, this.plasmamemembrane, 
        this.cytoplasm, this.flagella, this.plasmid, this.pilli, this.pilli1,
        this.pill2, this.pill3, this.pill4, this.pill5, this.pilli6,this.pilli7,
        this.pilli8,this.pilli9,this.pilli10,this.pilli11, this.pilli12,this.nucleoid, 
        this.ribsomes, this.ribsomes1,this.ribsomes2,this.ribsomes3,this.ribsomes4, this.ribsomes5,
        this.ribsomes6, this.ribsomes7, this.ribsomes8, this.ribsomes9, this.ribsomes10, this.ribsomes11,
        this.ribsomes12, this.ribsomes13, this.ribsomes14, this.ribsomes15, this.ribsomes16, this.ribsomes17, this.ribsomes18,
        this.ribsomes19, this.capsulebox, this.cellwallbox, this.plasmamemembranebox
    ]
    }

    animate(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.organelles.forEach(org => org.animate(this.ctx))
        requestAnimationFrame((() => this.animate()))
    }

}
export default Bacteria