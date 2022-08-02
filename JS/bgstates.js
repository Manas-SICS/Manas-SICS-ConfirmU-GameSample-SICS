const bgStates = {
    INTRO_SCREEN: 0,
    OUTSIDE_SHOP: 1,
    OUTSIDE_SHOP2: 2,
    NEAR_AISLE: 3,
    SHELVES_BG: 4,
    CHECKOUT_BG: 5,
    OUTRO_SCREEN: 6,
}

class State {
    constructor(state){
        this.state = state;

    }
}

export class introScreen extends State{
    constructor(background){
        super('INTRO SCREEN');
        this.background = background;
    }

    enter(){
        this.background.image = document.getElementById('intro-screen');
    }

    handleInput(input){
        if(input.includes('Clicked')){
            this.background.setState(bgStates.OUTSIDE_SHOP);
            input.length = 0;
        }
    }
}

export class outsideShop extends State{
    constructor(background){
        super('OUTSIDE SHOP');
        this.background = background;
    }

    enter(){
        this.background.image = document.getElementById('outer-bg');
    }

    handleInput(input){
        if(input.includes('Clicked')){
            this.background.setState(bgStates.OUTSIDE_SHOP2);
            input.length = 0;
        }

    }
}


export class outsideShop2 extends State{
    constructor(background){
        super('OUTSIDE SHOP 2');
        this.background = background;
    }

    enter(){
        this.background.image = document.getElementById('outer-bg');
    }

    handleInput(input){
        if(input.includes('Clicked')){
            this.background.setState(bgStates.NEAR_AISLE);
            input.length = 0;
        }

    }
}

export class nearIsle extends State{
    constructor(background){
        super('NEAR AISLE');
        this.background = background;
    }

    enter(){
        this.background.image = document.getElementById('near-aisle');
    }

    handleInput(input){
        if(input.includes('Clicked')){
            this.background.setState(bgStates.SHELVES_BG);
            input.length = 0;
        }

    }
}

export class shelvesBG extends State{
    constructor(background){
        super('SHELVES');
        this.background = background;
    }

    enter(){
        this.background.image = document.getElementById('shelves-bg');
    }

    handleInput(input){
        if(input.includes('Clicked')){
            this.background.setState(bgStates.CHECKOUT_BG);
            input.length = 0;
        }

    }
}

export class checkout extends State{
    constructor(background){
        super('CHECKOUT');
        this.background = background;
    }

    enter(){
        this.background.image = document.getElementById('checkout-bg');
    }

    handleInput(input){
        if(input.includes('Clicked')){
            this.background.setState(bgStates.OUTRO_SCREEN);
            input.length = 0;
        }

    }
}

export class outroScreen extends State{
    constructor(background){
        super('OUTRO SCREEN');
        this.background = background;
    }

    enter(){
        this.background.image = document.getElementById('outro-screen');
    }

    handleInput(input){
        if(input.includes('Clicked')){
            this.background.setState(bgStates.INTRO_SCREEN);
            input.length = 0;
        }

    }
}