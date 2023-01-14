// app이 쓸 수 있또록 공게하는 방법1

import Boy from '../item/boy.js';
import Background from '../item/background.js';
import Enemy from '../item/enemy.js';
import newlec from '../newlec.js'
import ConfirmDlg from '../item/ConfirmDlg.js'

export default class GameCanvas{   //export default 모듈화

    constructor(){
        this.dom = document.querySelector(".game-canvas");
        this.dom.focus();
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");

        this.enemies = [];
        this.enemyDelay=60;

        

        this.boy = new Boy(100,100);
        this.boy.onNoLife = this.onNoLifeHandler.bind(this);

        this.dlg = new ConfirmDlg();
        this.dlg.onclick=this.dlgClickHandler.bind(this);

        this.bg = new Background();   // 23-01-06

        this.boy.speed++;
        //this.boy.setSpeed(this.boy.getSpeed()+5); // 속도를 1 증가시키는 것
        console.log("speed:"+this.boy.speed)
        this.gameover=false;

        this.pause=false;

        this.ongameOver=null;

        this.dom.onclick=this.clickHandler.bind(this);
        this.dom.onkeydown=this.keyDownHander.bind(this);
        this.dom.onkeyup=this.keyUpHander.bind(this);

        newlec.enemies=this.enemies;
    }

    run(){
        if(this.pause)
            return;

        this.update();
        this.draw();

        console.log("time Start");
        window.setTimeout(()=>{
            this.run();
        },17);
    }
    update(){
        this.boy.update();
        for(let enemy of this.enemies)
           enemy.update();

        this.enemyDelay--;
        if(this.enemyDelay==0){
            let x = Math.floor(Math.random()*(this.dom.width+50-50)+50)
            let y = -50;

            let enemy = new Enemy(x,y);
            enemy.onOutOfScreen=this.onOutOfScreenHandler.bind(this);

            this.enemies.push(enemy);

            this.enemyDelay=Math.floor(Math.random()*(60-30)+30)

        }
    }
    draw(){
        this.bg.draw(this.ctx);   // 23-01-06
        this.boy.draw(this.ctx);
        for(let enemy of this.enemies)
            enemy.draw(this.ctx);
        this.dlg.draw(this.ctx);
    }
    pause(){
        //this.pause=true;
    }

    dlgClickHandler(){
        if(this.ongameOver)
            this.ongameOver();

    }

    onNoLifeHandler(){
        console.log("소년이 주겅ㅆ씁니다.")
        this.dlg.show();
    }


    onOutOfScreenHandler(en){
        let idx = this.enemies.indexOf(en)
        this.enemies.splice(idx,1);


    }
    clickHandler(e){
        this.boy.moveTo(e.x,e.y);
        // this.pause = true;
        // this.boy.move(2);
        // this.boy.draw(this.ctx);
        this.dlg.notifyClick(e.x,e.y);
    }

    keyDownHander(e){
        switch(e.key){
            case "ArrowUp":
                this.boy.move(1);
            break;
            case "ArrowLeft":
                this.boy.move(4);
            break;
            case "ArrowRight":
                this.boy.move(2);
            break;
            case "ArrowDown":
                this.boy.move(3);
            break;
        }
    }

    keyUpHander(e){
        // this.boy.move(0);
        switch(e.key){
            case "ArrowUp":
                this.boy.stop(1);
            break;
            case "ArrowLeft":
                this.boy.stop(4);
            break;
            case "ArrowRight":
               this.boy.stop(2);
            break;
            case "ArrowDown":
                this.boy.stop(3);
            break;
        }

    }
}

//export default GameCanvas// app이 쓸 수 있또록 공게하는 방법2