export default class ConfirmDlg{
    constructor(){
        this.x=100;
        this.y=100;
        this.width=400;
        this.height=200
        this.isVisible=false;

        this.btnYes={
            x:70,
            y:100,
            width:100,
            height:50,
            label:'Yes'
        }
        this.btnNo={
            x:230,
            y:100,
            width:100,
            height:50,
            label:'No'
        }

        this.onclick=null;

    }

    notifyClick(x,y){
            if((this.x<x && x < this.x+this.width)&&(this.y<y && y < this.y+this.height)&&this.isVisible){
                console.log("클릭");
                if(this.onclick!=null)
                    this.onclick(3);
            }
    }

    show(){
        this.isVisible=true;
    }

    update(){



    }

    draw(ctx){
        if(this.isVisible){
            

        let {x,y}=this;


        ctx.fillStyle='#fff7';
        ctx.fillRect(x,y,this.width,this.height);
        ctx.fillStyle="black"
        ctx.font="bold 48px serif"
        ctx.fillText("계속할래?", this.width/2.5, y+70)


        let btns = [this.btnYes,this.btnNo]

        for(let btn of btns){

            let {x,y,width:w, height:h, label} = btn;

            ctx.fillStyle="gray";
            ctx.fillRect(this.x+x,this.y+y,w,h);
            ctx.fillStyle="black"   
            ctx.font="bold 30px serif"
            ctx.fillText(label,this.x+x+20,this.y+135);

        }

    }
    }

}