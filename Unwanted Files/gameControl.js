import {IntroScreen ,OutsideShop1, State} from "./state.js";

export default class GameWindow {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [new IntroScreen(this), new OutsideShop1(this)];
        this.currentState = this.states[0];
        this.bgImage = document.getElementById('cu-logo');
        this.x = 0;
        this.y = 0;

    }

    draw(context){
        context.drawImage(this.bgImage, this.x, this.y, this.gameWidth, this.gameHeight );
    }

    update(input){
        this.currentState.handleInput(input);
    }

    setState(state) {
        this.currentState = this.states[state];
        this.currentState.enter();
    }
} 