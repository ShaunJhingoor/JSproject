class Example {
    constructor(ele) {
        this.ele = ele;
        this.ele.innerHTML = "<h1>it's Alive!!!!</h1>";
        // debugger;
        this.handleClick = this.handleClick.bind(this)
        this.ele.addEventListener("click", this.handleClick);
    }

    handleClick() {
        this.ele.children[0].innerText = "Ouch!";
    }
}

export default Example;