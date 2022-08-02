export class UI {
    constructor(){
        this.frameY = 0;
        this.width = 0;
        this.height = 0;
        this.x = 0; 
        this.y = 0;


    }

    update(){

    }

    draw(context){
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height)
    }

}

export class startButton extends UI{
    constructor(){
        super();
        this.width = 180;
        this.height = 45;
    }
}

export class startClick extends startButton{
    constructor(game){
        super();
        this.game = game;
        this.frameX = 0;
        this.x = game.width/2 - this.width/2;
        this.y = ((game.height/4)*3)-this.height/2;
        this.image = document.getElementById('start-button');
    }
}

export class startHover extends startButton{
    constructor(game){
        super();
        this.game = game;
        this.frameX = 1;
        this.x = game.width/2 - this.width/2;
        this.y = ((game.height/4)*3)-this.height/2;
        this.image = document.getElementById('start-button');
    }
}