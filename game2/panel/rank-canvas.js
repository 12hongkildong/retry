export default class RankCanvas{
    constructor(){
        this.dom=document.querySelector(".rank-canvas")

        /**@type {CanvasRenderingContext2D} */
        this.ctx=this.dom.getContext("2d");

    }

    run(){
        this.update();
        this.draw();


    }
    update(){



    }
    draw(){
        this.ctx.strokeRect(0,0,this.dom.Width,this.dom.height);


    }

}