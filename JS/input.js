export default class InputHandler{
    constructor(){
        this.lastKey = '';
        window.addEventListener('click' , (e) => {
            this.lastKey = 'Clicked';
        })
    }
}