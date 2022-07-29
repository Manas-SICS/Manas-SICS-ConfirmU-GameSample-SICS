export const states = {
    INTRO_SCREEN: 0,
    OUTSIDE_SHOP_1: 1,
    // OUTSIDE_SHOP_2: 2,
    // NEAR_AISLE: 3,
    // SHOPPING: 4,
    // BILLING_START: 5,
    // ACCEPT_OFFER: 6,
    // ENTER_BARGAIN: 7,
    // BARGAIN_LOW: 8,
    // BARGAIN_MIDLOW: 9,
    // BARGAIN_MIDHIGH: 10,
    // BARGAIN_HIGH: 11,
    // BARGAIN_HIGHEST: 12,
    // DECLINE_OFFER: 13,
    // FAILED_PURCHASE: 14,
    // SUCCESSFUL_PURCHASE: 15,
    // GAMEOVER: 16, 
}

export class State {
    constructor(state){
        this.state = state;
    }
}

export class IntroScreen extends State{
    constructor(game){
        super('INTRO SCREEN');
        this.game = game;

    }

    enter(){
        this.game.bgImage = document.getElementById('cu-logo');
    }

    handleInput(input){
        console.log(this.game);
        if (input === "Clicked") this.game.setState(states.OUTSIDE_SHOP_1);
    }
}

export class OutsideShop1 extends State{
    constructor(game){
        super('OUTSIDE SHOP 1');
        this.game = game;
    }

    enter(){
        this.game.bgImage = document.getElementById('outer-bg');
    }

    handleInput(input){
    }
}