import GameCanvas from './panel/game-canvas.js';    // 모듈화
import RankCanvas from './panel/rank-canvas.js'
window.addEventListener("load", function(){
    const gameCanvas = new GameCanvas();
    gameCanvas.ongameOver=()=>{
        gameCanvas.dom.classList.add("d-none");
        rankCanvas.dom.classList.remove("d-none");

        gameCanvas.pause=true;
    }

    gameCanvas.run();

    //gameCanvas.pause();

    const rankCanvas = new RankCanvas();
    rankCanvas.run();
});