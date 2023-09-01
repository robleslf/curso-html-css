document.addEventListener("DOMContentLoaded", function() {
  let divElemento = document.getElementById("mi-div");

  let botonCambiar = document.getElementById("cambiar-div");

  botonCambiar.addEventListener("click", function(){
    divElemento.textContent = "Nuevo Contenido del Div";
    divElemento.style.backgroundColor = "yellow";
    divElemento.style.color = "red";
  });
});