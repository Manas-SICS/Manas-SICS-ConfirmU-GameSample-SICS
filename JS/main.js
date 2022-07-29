window.addEventListener('load', function(){
    const canvas = this.document.getElementById('demoGame');
    const ctx = canvas.getContext ('2d');
    canvas.width = 720;
    canvas.height = 512;


    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
        }

        update(){

        }

        draw(){
            
        }
    }
})