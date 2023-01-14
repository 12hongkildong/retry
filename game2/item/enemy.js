export default class Enemy{
    constructor(x,y){
        this.img=document.querySelector("#enemy");

        this.x= x||350;
        this.y= y||100;

        this.sw=this.img.width;
        this.sh=this.img.height;

        this.speed=1

        this.onOutOfScreen=null;

        //폭발 이미지
        this.imgExpl=document.querySelector("#hit");
        this.imgCount=0;
        this.eix=0;
        this.eiy=0;

        
        this.esw=this.imgExpl.width/4;
        this.esh=this.imgExpl.height/5;
        
        this.esx=this.eix*this.esw;
        this.esy=this.eiy*this.esh;
        this.isChungdol=false;
    }

    chungdol(){
        this.isChungdol=true;
    }



    draw(ctx){
        ctx.drawImage(this.img,this.x-this.img.width/2,this.y-this.img.height/2);

        if(this.isChungdol){
            this.imgCount++;
            
            this.eix=this.imgCount%4;
            this.eiy=this.imgCount/4;

            this.esx=this.eix*this.esw;
            this.esy=this.eiy*this.esh;

            ctx.drawImage(this.imgExpl,
                this.esx,this.esy,this.esw,this.esh,
                this.x-this.esw/2,this.y-this.esh+58,this.esw,this.esh);
            if(this.imgCount==18)
                this.onOutOfScreen(this);
        }
        
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.sw/2,0,Math.PI*2)
        ctx.stroke();

    }
    update(){
        this.y+=this.speed;

        if(this.y>500)
            if(this.onOutOfScreen!=null)
                this.onOutOfScreen(this);


    }

}