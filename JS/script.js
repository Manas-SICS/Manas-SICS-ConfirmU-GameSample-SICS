window.addEventListener('load', function(){
    const loading = this.document.getElementById('loading');
    loading.style.display = "none";
    const canvas = this.document.getElementById('demoGame');
    const ctx = canvas.getContext('2d');
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;
})