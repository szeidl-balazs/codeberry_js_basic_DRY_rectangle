function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let size = canvas.width * .1;
    let position = 20; 
    

    for (let i = 0; i < 10; i++) {
        context.fillStyle = 'rgba(255,165,0,.5)';
        context.fillRect(position,position,size,size);
        position += size *.5;    
    }
     

}

window.addEventListener("load", pageLoaded);