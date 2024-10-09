window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0)
});
window.addEventListener("scroll", function(){
    var Comenta = document.querySelector(".Comentario");
    Comenta.classList.toggle("Comenton", window.scrollY > 1500)
});
function mostrar() {
  const settings = document.querySelector('.Settings');
  if (settings.style.display === 'flex') {
    settings.style.display = 'none';
  } else {
    settings.style.display = 'flex';
  }
}

