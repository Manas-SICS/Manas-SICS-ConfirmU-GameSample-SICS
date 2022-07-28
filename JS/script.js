import GameWindow from './gameControl.js';
import InputHandler from './input.js'

window.addEventListener('load', function(){
    const loading = this.document.getElementById('loading');
    loading.style.display = "none";
    const canvas = this.document.getElementById('demoGame');
    const ctx = canvas.getContext('2d');
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;

    const game = new GameWindow (1440, 1024);

    const input = new InputHandler();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(input.lastKey);
        console.log(input.lastKey);
        game.draw (ctx); 

        requestAnimationFrame (animate);
    }

    animate();
}) 