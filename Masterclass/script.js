window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0)
})
window.addEventListener("scroll", function(){
    var Comentar = document.querySelector(".Comentario");
    Comentar.classList.toggle("Comenton", window.scrollY > 2400)
})