import { RightMBox,LeftMBox } from "./character.js";
import { RightMBox2 } from "./characters2.js";
var canvasTxt = window.canvasTxt.default

export class Dialogue1{
    constructor(game){
        this.game = game;
        this.mBR = new RightMBox(this);
        this.width = this.mBR.width
        this.height = this.mBR.height
        this.x = 20;
        this.y = 327;
        this.txt = 'Hey Rohan, The farming season is right around the corner and you need to start with your preparation for the same. You need to go to the local Agrocenter and gear up to start farming. You have ₹5000 to buy seeds, manure, pesticide and a new hoe. Happy shopping!';


        this.textMargin = 20;
        this.textX = this.x + this.textMargin + 10;
        this.textY = this.y + this.textMargin;
        this.textWidth = this.width - (this.textMargin*2);
        this.textHeight = this.height- (this.textMargin*2);

    }

    draw(context){
        context.fillStyle = 'white'
        canvasTxt.fontSize = 21;
        canvasTxt.font = 'game-font';
        canvasTxt.align = 'left';
        canvasTxt.vAlign = 'top';
        canvasTxt.drawText(context, this.txt, this.textX, this.textY, this.textWidth, this.textHeight);
    }
}

export class Dialogue2{
    constructor(game){
        this.game = game;
        this.mBL = new LeftMBox(this);
        this.width = this.mBL.width
        this.height = this.mBL.height
        this.x = 20;
        this.y = 327;
        this.txt = "Last year's harvest was really great. Let's go buy all the equipment that we need for this year as well. I hope Mohan Das at the center won't drive a hard bargain today!";


        this.textMargin = 20;
        this.textX = this.x + this.textMargin + 10;
        this.textY = this.y + this.textMargin;
        this.textWidth = this.width - (this.textMargin*2);
        this.textHeight = this.height- (this.textMargin*2);

    }

    draw(context){
        context.fillStyle = 'white'
        canvasTxt.fontSize = 21;
        canvasTxt.font = 'game-font';
        canvasTxt.align = 'left';
        canvasTxt.vAlign = 'top';
        canvasTxt.drawText(context, this.txt, this.textX, this.textY, this.textWidth, this.textHeight);
    }
}

export class Dialogue3{
    constructor(game){
        this.game = game;
        this.mBR2 = new RightMBox2(this);
        this.width = this.mBR2.width
        this.height = this.mBR2.height
        this.x = 20;
        this.y = 327;
        this.txt = "It is time to buy all your required items. Drag and drop any one of the options into your cart. Make sure to pay attention the price and the quality of the product while purchasing your items. You can keep also keep track of your total cart cost by looking at the top right of your screen. Don't forget that your farms needs all these items desperately and you have to select one of each.";


        this.textMargin = 20;
        this.textX = this.x + this.textMargin + 10;
        this.textY = this.y + this.textMargin;
        this.textWidth = this.width - (this.textMargin*2);
        this.textHeight = this.height- (this.textMargin*2);

    }

    draw(context){
        context.fillStyle = 'white'
        canvasTxt.fontSize = 21;
        canvasTxt.font = 'game-font';
        canvasTxt.align = 'left';
        canvasTxt.vAlign = 'top';
        canvasTxt.drawText(context, this.txt, this.textX, this.textY, this.textWidth, this.textHeight);
    }
}