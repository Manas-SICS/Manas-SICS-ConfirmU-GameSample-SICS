import { startButton } from "./ui.js";
import { RightMBox } from "./character.js";


export class InputHandler {
    constructor(game) {
        this.game = game;
        this.buttons = new startButton();
        this.mRB = new RightMBox(game);
        this.startX = this.game.width / 2 - this.buttons.width / 2;
        this.startY = (this.game.height / 4) * 3 - this.buttons.height / 2;
        this.startWidth = this.startX + this.buttons.width;
        this.startHeight = this.startY + this.buttons.height;
        this.mX = this.game.width / 2 - this.mRB.width / 2;
        this.mY = this.game.height - this.mRB.height + 10;
        this.mWidth = this.mX + this.mRB.width;
        this.mHeight = this.mY + this.mRB.height - 10;

        this.canvas = document.getElementById('demoGame');

        this.keys = [];
        window.addEventListener('click', e => {

            this.mouseX = e.clientX - (window.innerWidth / 2 - game.width / 2);
            this.mouseY = e.clientY - (window.innerHeight / 2 - game.height / 2);

            if (

                this.game.backgroundState == 'INTRO SCREEN' &&
                this.mouseX > this.startX &&
                this.mouseX < this.startWidth &&
                this.mouseY > this.startY &&
                this.mouseY < this.startHeight

            ) {

                this.keys.length = 0;
                this.keys.push('Clicked')

            } else if (

                this.game.backgroundState == 'OUTSIDE SHOP' &&
                this.mouseX > this.mX &&
                this.mouseX < this.mWidth &&
                this.mouseY > this.mY &&
                this.mouseY < this.mHeight

            ) {

                this.keys.length = 0;
                this.keys.push('Clicked');

            } else if (

                this.game.backgroundState == 'OUTSIDE SHOP 2' &&
                this.mouseX > this.mX &&
                this.mouseX < this.mWidth &&
                this.mouseY > this.mY &&
                this.mouseY < this.mHeight

            ) {

                this.keys.length = 0;
                this.keys.push('Clicked');

            } else if (
                this.game.backgroundState == 'NEAR AISLE' &&
                this.mouseX > this.mX &&
                this.mouseX < this.mWidth &&
                this.mouseY > this.mY &&
                this.mouseY < this.mHeight
            ){
                this.keys.length = 0;
                this.keys.push('Clicked');

            } else if (

                this.game.backgroundState != 'OUTSIDE SHOP' && 
                this.game.backgroundState != 'OUTSIDE SHOP 2' &&
                this.game.backgroundState != 'INTRO SCREEN' &&
                this.game.backgroundState != 'NEAR AISLE'

            ){
                this.keys.length = 0;
                this.keys.push('Clicked');
            }
        })

        this.canvas.addEventListener('mousemove', e => {

            this.mouseX = e.clientX - (window.innerWidth / 2 - game.width / 2);
            this.mouseY = e.clientY - (window.innerHeight / 2 - game.height / 2);

            if (

                this.game.backgroundState == 'INTRO SCREEN' &&
                this.mouseX > this.startX &&
                this.mouseX < this.startWidth &&
                this.mouseY > this.startY &&
                this.mouseY < this.startHeight

            ) {

                this.keys.length = 0;
                this.keys.push('HOVER');

            } else {

                this.keys.splice('HOVER', 1);

            }
        })
    }

} 