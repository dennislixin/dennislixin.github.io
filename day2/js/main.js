document.getElementById("btn-random-bg-color").addEventListener("click", function(){
    color = '#' + Math.random().toString(16).slice(-6);
    document.body.style.backgroundColor = color;
});