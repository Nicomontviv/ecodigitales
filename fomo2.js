
let visitantes = 72;
const iterarFomo2 = setInterval(mostrarFomo2, 11000);

function mostrarFomo2(){
    
    fomo.style.transitionDelay = "1000ms";
    fomoH6.innerHTML = ` <font color = rgb(9, 255, 0)>${visitantes}</font> personas están viendo la página`;
    fomo.style.backgroundColor = `rgba(63, 80, 110, 0.856)`;
    fomo.style.opacity = "1";
    
    setTimeout(dejarDeMostrar2, 5000);
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
 }

function dejarDeMostrar2(){
    fomo.style.transition = "opacity 2000ms ease";
    fomo.style.opacity = "0";
    let suma = getRandomInt(5);  
    visitantes = visitantes + suma;
}