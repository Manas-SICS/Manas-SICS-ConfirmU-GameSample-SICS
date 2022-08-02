import { Background } from "./background.js";


export class MainCharacter2 {
    constructor(game) {
        this.game = game;
        this.spriteWidth = 110;
        this.spriteHeight = 290;
        this.width = 220;
        this.height = 580;
        this.x = -220;
        this.y = 173;
        this.mc2image = document.getElementById('mc-sprite');
        this.fps = 10;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 0;
        this.maxSpeed = 2;
        this.maxFrame = 7;
        this.walkingDistance = 40;
    }

    update(deltaTime) {
        if (this.x < this.walkingDistance) {

            if (this.frameTimer > this.frameInterval) {
                this.frameTimer = 0;

                if (this.frameX < this.maxFrame) {
                    this.frameX++
                } else {
                    this.frameX = 0;
                }

            } else {
                this.frameTimer += deltaTime;
            }

            this.x += this.speed;
            this.speed = this.maxSpeed;
        } else {
            this.x = this.walkingDistance;
            this.frameX = 0;
            this.frameY = 1;
        }
    }

    draw(context) {
        context.drawImage(this.mc2image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height,)
    }
}

export class Phone2 {
    constructor(game) {
        this.game = game;
        this.width = 150.5;
        this.height = 140;
        this.x = game.width;
        this.y = 173;
        this.phimage = document.getElementById('phone-b');
        this.speed = 0;
        this.maxSpeed = -4;
        this.walkingDistance = game.width - this.width - 40;
    }

    update() {

        if (this.x > this.walkingDistance) {

            this.x += this.speed;
            this.speed = this.maxSpeed;
        }

        else {
            this.x = this.walkingDistance;
        }

    }

    draw(context) {
        context.drawImage(this.phimage, this.x, this.y, this.width, this.height,)
    }
}

export class RightMBox2 {
    constructor(game) {
        this.game = game;
        this.spriteWidth = 620;
        this.spriteHeight = 205;
        this.width = 680;
        this.height = 225;
        this.x = (game.width - this.width) / 2
        this.y = game.height - this.height
        this.mBRimage = document.getElementById('mbox-right');
        this.fps = 30;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 10;
        }


    update(deltaTime) {


            if (this.frameTimer > this.frameInterval) {
                this.frameTimer = 0;

                if (this.frameY < this.maxFrame) {
                    this.frameY++
                } else {
                    this.frameY = this.maxFrame;
                }

            } else {
                this.frameTimer += deltaTime;
            }

    }

    draw(context) {
        context.drawImage(this.mBRimage, 0, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);

    }
}

export class LeftMBox2 {
    constructor(game) {
        this.game = game;
        this.spriteWidth = 620;
        this.spriteHeight = 205;
        this.width = 680;
        this.height = 225;
        this.x = (game.width - this.width) / 2
        this.y = game.height - this.height
        this.mBRimage = document.getElementById('mbox-left');
        this.fps = 30;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 10;

        }

    update(deltaTime) {


            if (this.frameTimer > this.frameInterval) {
                this.frameTimer = 0;

                if (this.frameY < this.maxFrame) {
                    this.frameY++
                } else {
                    this.frameY = this.maxFrame;
                }

            } else {
                this.frameTimer += deltaTime;
            }

    }

    draw(context) {
        context.drawImage(this.mBRimage, 0, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);

    }
}