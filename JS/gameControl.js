import {IntroScreen ,OutsideShop1} from "./state.js";

export default class GameWindow {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [new IntroScreen(), new OutsideShop1()];
        this.currentState = this.states[0];
        this.bgImage = document.getElementById('cu-logo');
        this.x = 0;
        this.y = 0;

    }

    draw(context){
        context.drawImage(this.bgImage, this.x, this.y);
    }

    update(input){
        this.currentState.handleInput(input);
    }

    setState(state) {
        this.currentState = this.states[state];
        this.currentState.enter();
    }
} 