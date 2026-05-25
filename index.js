

let slides = document.querySelectorAll(".slide");

let index = 0;

function mostrarSlide(n){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[n].classList.add("active");
}

// SIGUIENTE
function siguienteSlide(){

    index++;

    if(index >= slides.length){
        index = 0;
    }

    mostrarSlide(index);
}

// ANTERIOR
function anteriorSlide(){

    index--;

    if(index < 0){
        index = slides.length - 1;
    }

    mostrarSlide(index);
}

// BOTONES
document.querySelector(".next").addEventListener("click", siguienteSlide);

document.querySelector(".prev").addEventListener("click", anteriorSlide);

// AUTO SLIDER
setInterval(siguienteSlide, 4000);




let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value;

    if(nombre === ""){
        alert("Ingrese su nombre");
    }else{
        alert("Gracias " + nombre + ", su cita fue enviada correctamente");
        formulario.reset();
    }

});




let btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        btnTop.style.display = "block";
    }else{
        btnTop.style.display = "none";
    }

});

btnTop.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});




let links = document.querySelectorAll(".nav a");

links.forEach(link => {

    link.addEventListener("click", function(){

        links.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});




console.log("Proyecto Clínica Andina cargado correctamente");
//imagen al pasar el maus
// IMAGEN PRINCIPAL
const imagenInicial =
"https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1200&auto=format&fit=crop";

// IMAGEN TECNOLOGICA MODERNA
const imagenMouse =
"https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop";

// CAMBIAR IMAGEN
function cambiarImagen(){

    const imagen = document.getElementById("imagen");

    imagen.src = imagenMouse;

    imagen.alt = "Tecnología médica moderna en Clínica Andina";

}

// VOLVER A LA ORIGINAL
function volverImagen(){

    const imagen = document.getElementById("imagen");

    imagen.src = imagenInicial;

    imagen.alt = "Instalaciones modernas de Clínica Andina";

}
//botan de whatsapp

botonWhatsApp.addEventListener("click", () => {
  console.log("El usuario hizo clic en el botón de WhatsApp.");
});



