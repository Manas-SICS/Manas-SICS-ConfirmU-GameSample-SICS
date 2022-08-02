import GameWindow from './Unwanted Files/gameControl.js.js';
import InputHandler from '../JS/input.js/index.js'

window.addEventListener('load', function(){
    const canvas = this.document.getElementById('demoGame');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 512;

    // const game = new GameWindow (720, 512);

    // const input = new InputHandler();

    // function animate() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     game.update(input.lastKey);
    //     console.log(input.lastKey);
    //     game.draw (ctx); 

    //     requestAnimationFrame (animate);
    // }

    // animate();

    class Game {
        constructor (width, height){
            this.width = width;
            this.height = height;
        }

        update(){

        }

        draw(){

        }
    }
}) 