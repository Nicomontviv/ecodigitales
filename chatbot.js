document.addEventListener("DOMContentLoaded", function() {
  const chatIcon = document.getElementById("chatIcon");
  const chatWindow = document.getElementById("chatWindow");
  const closeChat = document.getElementById("closeChat");
  const chatContent = document.getElementById("chatContent");
  const typingIndicator = document.getElementById("typingIndicator");
  const userInput = document.getElementById("userInput");
  const sendMessage = document.getElementById("sendMessage");

  const respuestasDinero = [
      "Al presionar el botón de VER CURSO vas a poder ir a la página de inscripciones. Los medios de pago varian dependiendo del país en que te encuentres.",
      "Los cursos no son gratuitos, por eso ofrecemos la mejor calidad. Los medios de pago se aclaran mejor en la página de inscripciones.",
      "Si tienes problemas para realizar algun pago puedes comunicarte por whatsapp al +5491141619459"
  ];
  const respuestasTiempo = [
    "Los cursos estan subidos a una plataforma, los puedes hacer a tu tiempo sin apuros. Al finalizar se te otorgará un certificado de finalización.",
    "El tiempo estimado de finalización es de 6 semanas. Pero depende de la intensidad y la cantidad de horas que le dediques.",
    "La idea es que puedas formarte en tu tiempo libre sin que te limite el tiempo. Por eso puedes acceder a la plataforma cuando quieras."
];
const respuestasContenido = [
  "El contenido del programa está bien detallado y explicado en la página de inscripción del curso que eligas.",
  "Todas tus dudas vas a ser contestadas y resueltas por el experto en el curso que eligas. Puedes ver la página de inscripción o ver la parte de preguntas frecuentes.",
  "No importa cual sea tu nivel, los cursos explican de 0 a experto el area que elijas. Puedes ver la página de inscripciones para mas información.",
];
const respuestasGenerales = [
  "Si estás en ésta página es por que ya tomaste la decisición de estudiar y por eso te felicito. Ahora solo falta resolver como y cuando. Te invito a que veas la página de inscripciones",
  "Soy un chatbot que está para ayudarte, pero si buscas resolver dudas puntuales puedes enviar un mensaje a nuestro asesor por whatsapp +5491141619459",
  "Te felicito por estar acá, significa que tomaste la decisión de estudiar. En que puedo ayudarte exactamente.",
  "Estarás de acuerdo conmigo que la única solución para crecer y progresar es estudiar. Ahora solo es cuestión de ver como y cuando. Aprovecha nuestras promociones con el código de descuento 031016"
]

  chatIcon.addEventListener("click", function() {
      chatIcon.style.display = "none";
      chatWindow.style.display = "block";
  });

  closeChat.addEventListener("click", function() {
      chatIcon.style.display = "block";
      chatWindow.style.display = "none";
  });

  function containsWord(texto1, texto2) {
    for (let word2 of texto2) {
      const lowerWord2 = word2.toLowerCase();
      for (let word1 of texto1) {
        if (word1.toLowerCase().includes(lowerWord2)) {
          console.log(lowerWord2);
          return true;
        }
      }
    }
    return false;
  } 

  function simulateTyping() {
      typingIndicator.style.display = "inline";
      setTimeout(function() {
          typingIndicator.style.display = "none";
          sendMessageToChat(getRandomResponse());
      }, 5000);
  }

  function stringToWordsArray(inputString) {
    // Convertimos el string a minúsculas y dividimos en palabras
    const words = inputString.toLowerCase().split(/\s+/);

    // Eliminamos espacios en blanco y elementos vacíos del array
    const cleanWords = words.filter(word => word !== "");

    return cleanWords;
}

  function filtrarInput(){
    let vec = stringToWordsArray(userInput.value);

    const dudaSobreDinero = ["dinero","sale","salen","plata","costo","costar","cuesta","pagar","transferencia","aceptan"];
    const dudasSobreTiempo = ["tiempo","dias","semanas","meses","años","horarios", "hora","horas","tardo","tarda", "dura", "duracion", "duración"];
    const dudasSobreContenido = ["temas", "modulos", "aprender", "enseñan","enseñar","nivel","niveles"];

    if (containsWord(vec, dudaSobreDinero)){
      return respuestasDinero;
    }else if(containsWord(vec, dudasSobreTiempo)){
      return repuestasTiempo;
    }else if(containsWord(vec,dudasSobreContenido)){
      return respuestasContenido;
    }else{
      return respuestasGenerales;
    }

  }

  function getRandomResponse() {
      let botResponses = filtrarInput();
      let randomIndex = Math.floor(Math.random() * botResponses.length);
      return `<div class="bot-message"><p>${botResponses[randomIndex]}</p></div>`;
  }

  function sendMessageToChat(message) {
      chatContent.innerHTML += message;
      chatContent.scrollTop = chatContent.scrollHeight;
  }

  sendMessage.addEventListener("click", function() {
      const message = userInput.value;
      if (message.trim() !== "") {
          sendMessageToChat(`<div class="user-message"><p>Tú: ${message}</p></div>`);
          userInput.value = "";
          simulateTyping();
      }
  });
});

