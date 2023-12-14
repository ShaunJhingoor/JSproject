class Eukaryotic {
    constructor(cell1){
        this.cell1 = cell1
        this.handleNucleusHover = this.handleNucleusHover.bind(this)
    }
    setupNucleus(){
        let nucleus = document.createElement("nucleus")
        nucleus.addEventListener("mouseover", this.handleNucleusHover)
        this.cell1.appendChild(nucleus)
    }
    handleNucleusHover(e){
        e.stopPropagration()
        let ele = e.taget 
        ele.classlist.toggle('nucleusHover')
    }
}
export default Eukaryotic;