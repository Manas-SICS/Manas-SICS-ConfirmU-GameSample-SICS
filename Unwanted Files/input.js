export default class InputHandler{
    constructor(){
        this.lastKey = '';
        window.addEventListener('mousedown' , (e) => {
            this.lastKey = 'Clicked';
        })

    }
}