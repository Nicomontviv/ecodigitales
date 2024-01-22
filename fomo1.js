const vectorNombres = ["Marcelo", "Giuliana", "Juan", "Esteban", "Martin ", "Camila" ,"Walter","Rocio","Julian","Guillermo", "Matias", "Eugenio","Ivan","Jorge","Santiago"];
const vectorApellidos = ["Andreani", "Lopez Vera", "Gonzalez","De Alesio","Moroni","Osornio","Areta","Fonseca", "Donoso","Lombardo","Venegas", "Martinez","Esposito", "Cardenas","Coria0"];
const vectorCursos = ["Curso de Google Ads", "Curso de Meta Ads", "Curso de Ebay y Amazon", "Curso de Youtube Marketing", "Curso de Diseño Web", "Curso de Excel", "Curso de Ecosistemas Verticales", " Curso de Alimentos Orgánicos"];
function getRandomInt(max){
    return Math.floor(Math.random() * max);
 }

function crearNombreCompleto(){
     let nombre = vectorNombres[getRandomInt(15)];
     let apellido = vectorApellidos[getRandomInt(15)];
     let nombreCompleto = ` ${nombre}`+" "+`${apellido}`;
     return nombreCompleto;
}
function buscarCurso(){
    let curso = vectorCursos[getRandomInt(8)];
    return curso;
}


const fomo = document.getElementById('FOMO');
const fomoH6 = document.getElementById('FOMO-h6');

const iterarFomo = setInterval(mostrarFomo, 25000);

function mostrarFomo(){
    let comprador = crearNombreCompleto();
    let curso = buscarCurso();
    fomo.style.transitionDelay = "2000ms";
    fomoH6.innerHTML = ` <font color = "yellow">${comprador}</font> a ingresado al ${curso}`;
    fomo.style.opacity = "1";
    setTimeout(dejarDeMostrar, 6000);
}

function dejarDeMostrar(){
    fomo.style.transition = "opacity 2000ms ease";
    fomo.style.opacity = "0";
   
}