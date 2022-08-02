import { introScreen, outsideShop, outsideShop2, nearIsle, shelvesBG, checkout, outroScreen  } from './bgstates.js'

export class Background {
    constructor(game){
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        this.x = 0;
        this.y = 0;
        this.image = document.getElementById('outer-bg');
        this.states = [ new introScreen(this), new outsideShop(this), new outsideShop2(this), new nearIsle(this), new shelvesBG(this), new checkout(this), new outroScreen(this)];
        this.currentState = this.states [0];
        this.currentState.enter();
        this.colour = 'black';
    }

    update(input){
        this.currentState.handleInput(input);
    }

    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    setState(state){
        this.currentState = this.states[state];
        this.currentState.enter();
    }
}