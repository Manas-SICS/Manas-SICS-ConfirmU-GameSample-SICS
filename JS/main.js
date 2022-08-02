import { Background } from './background.js';
import { InputHandler } from './input.js';
import { startClick, startHover } from './ui.js';
import { MainCharacter, Phone, RightMBox, LeftMBox } from './character.js';
import { MainCharacter2, Phone2, RightMBox2, LeftMBox2 } from './characters2.js';
import { Dialogue1, Dialogue2, Dialogue3} from './text.js';

window.addEventListener('load', function () {
    const canvas = this.document.getElementById('demoGame');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 512;


    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.background = new Background(this);
            this.input = new InputHandler(this);
            this.mc = new MainCharacter(this);
            this.ph = new Phone(this);

            this.mBR = new RightMBox(this);
            this.mBL = new LeftMBox(this);
            this.mc2 = new MainCharacter2(this);
            this.ph2 = new Phone2(this);
            this.mBR2 = new RightMBox2(this);
            this.mBL2 = new LeftMBox2(this);
            this.dialogue1 = new Dialogue1(this);
            this.dialogue2 = new Dialogue2(this);
            this.dialogue3 = new Dialogue3(this);
            this.ui = [];
            this.fontColour = 'white';
        }

        update(deltaTime) {
            this.backgroundState = this.background.currentState.state;
            this.background.update(this.input.keys)
            if (this.ui.length = 1) this.addUI()


            if (this.backgroundState == 'OUTSIDE SHOP') {
                this.mc.update(deltaTime);
                if (this.mc.x == this.mc.walkingDistance) {
                    this.ph.update();
                }
                if (this.ph.x == this.ph.walkingDistance) {
                    this.mBR.update(deltaTime);

                    if (this.mBR.frameY == this.mBR.maxFrame) {
                        this.mc.frameY = 2;
                    }
                }
            } else if (

                this.backgroundState == 'OUTSIDE SHOP 2'

                ) {

                this.mc.frameY = 1;
                this.mBL.update(deltaTime);
            
            } else if (
                this.backgroundState == 'NEAR AISLE'
                ){
                this.mc2.update(deltaTime);

                if (this.mc2.x == this.mc2.walkingDistance) {
                    this.ph2.update();
                }
                if (this.ph2.x == this.ph2.walkingDistance) {
                    this.mBR2.update(deltaTime);

                    if (this.mBR2.frameY == this.mBR2.maxFrame) {
                        this.mc2.frameY = 2;
                    }
                }

            }


        }

        draw(context) {
            this.background.draw(context);

            if (this.backgroundState == "INTRO SCREEN") {
                this.ui.forEach(ui => {
                    ui.draw(context);
                })
            }

            if (this.backgroundState == "OUTSIDE SHOP") {
                this.mc.draw(context);
                this.ph.draw(context);
                this.mBR.draw(context);
                if (this.mBR.frameY == this.mBR.maxFrame) {
                    this.dialogue1.draw(context);
                }
            }

            if (this.backgroundState == "OUTSIDE SHOP 2") {
                this.mc.draw(context);
                this.mBL.draw(context);
                if (this.mBL.frameY == this.mBL.maxFrame) {
                    this.dialogue2.draw(context);
                }
            }

            if (this.backgroundState == "NEAR AISLE") {
                this.mc2.draw(context);
                this.ph2.draw(context);
                this.mBR2.draw(context);
                if (this.mBR2.frameY == this.mBR2.maxFrame) {
                this.dialogue3.draw(context);
                }
            }

        }

        addUI() {
            if (this.input.keys.includes('HOVER')) {
                this.ui.push(new startHover(this))
            } else this.ui.push(new startClick(this))
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);
    let lastTime = 0;



    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate(0);
})