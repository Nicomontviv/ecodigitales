function stringToArray(inputString) {
    // Dividir el string en palabras y convertirlas a minúsculas
    const words = inputString.toLowerCase().split(/\s+/);
  
    return words;
  }

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

// Función para obtener una respuesta aleatoria de la Biblia
function getBibleRandomVerse(texto) {
    const bibleVersesAmor = [

        'Génesis 29:20 - "Así que Jacob sirvió por Raquel siete años; pero le parecieron como pocos días, porque la amaba."',
'Deuteronomio 7:9 - "Conoce, pues, que Jehová tu Dios es Dios, Dios fiel, que guarda el pacto y la misericordia a los que le aman y guardan sus mandamientos."',
'Proverbios 10:12 - "El odio despierta rencillas, pero el amor cubre todas las faltas."',
'Cantares 8:7 - "Las muchas aguas no podrán apagar el amor, ni lo ahogarán los ríos. Si diese el hombre todos los bienes de su casa por este amor, de cierto lo menospreciarían."',
'Isaías 43:4 - "Porque eres precioso a mis ojos, eres honorable y yo te amo."',
'Jeremías 31:3 - "Jehová se manifestó a mí hace ya mucho tiempo, diciendo: Con amor eterno te he amado; por tanto, te prolongué mi misericordia."',
'Oseas 2:19 - "Yo te desposaré conmigo para siempre; sí, te desposaré conmigo en justicia, juicio, benignidad y misericordia."',
'Miqueas 6:8 - "Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer justicia, amar misericordia, y humillarte ante tu Dios."',
'Salmos 136:26 - "Alabad al Dios de los cielos, porque para siempre es su misericordia."',
'Ezequiel 16:8 - "Pasé junto a ti, y te vi, y he aquí que tu tiempo era tiempo de amores; y extendí mi manto sobre ti, y cubrí tu desnudez; y te di juramento y entré en pacto contigo, dice Jehová el Señor, y fuiste mía."',
'Proverbios 17:17 - "En todo tiempo ama el amigo, y es como un hermano en tiempo de angustia."',

        '"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente. Este es el primero y grande mandamiento. Y el segundo es semejante: Amarás a tu prójimo como a ti mismo." - Mateo 22:37-39',
  
  '"Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor." - 1 Corintios 13:13',
  
  '"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." - Juan 3:16',
  
  '"El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece; no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor." - 1 Corintios 13:4-5',
  
  '"Y ante todo, tened entre vosotros ferviente amor; porque el amor cubrirá multitud de pecados." - 1 Pedro 4:8',
  
  '"El que no ama, no ha conocido a Dios; porque Dios es amor." - 1 Juan 4:8',
  
  '"Porque el amor al dinero es la raíz de todos los males; y algunos, por codiciarlo, se han desviado de la fe y se han causado muchos dolores." - 1 Timoteo 6:10',
  
  '"Sobre todas las cosas, vestíos de amor, que es el vínculo perfecto." - Colosenses 3:14',
  
  '"En esto consiste el amor: no en que nosotros hayamos amado a Dios, sino en que él nos amó a nosotros, y envió a su Hijo en propiciación por nuestros pecados." - 1 Juan 4:10',
  
  '"Amados, amémonos unos a otros; porque el amor es de Dios. Todo aquel que ama, es nacido de Dios, y conoce a Dios." - 1 Juan 4:7',
  
  '"Y por sobre todas estas cosas vestíos de amor, que es el vínculo perfecto." - Colosenses 3:14',
  
  '"En esto conocemos lo que es el amor: en que Jesucristo entregó su vida por nosotros. Así también nosotros debemos entregar la vida por nuestros hermanos." - 1 Juan 3:16',
        ];
  
        const bibleVersesDinero = [

            'Deuteronomio 8:18 - "Sino acuérdate de Jehová tu Dios, porque él te da el poder para hacer las riquezas, a fin de confirmar su pacto que juró a tus padres, como en este día."',
            'Proverbios 13:11 - "Riquezas mal adquiridas disminuirán; pero el que las recoge con mano laboriosa las aumentará."',
            'Proverbios 22:7 - "El rico se enseñorea de los pobres, y el que toma prestado es siervo del que presta."',
            'Proverbios 28:22 - "El que acelera en enriquecerse no será sin culpa."',
            'Eclesiastés 5:10 - "El que ama el dinero, no se saciará de dinero; y el que ama el mucho tener, no sacará fruto. También esto es vanidad."',
            'Jeremías 17:11 - "Como perdiz que junta lo que no puso, así es el que hace riquezas, no con justicia; en la mitad de sus días las dejará, y en su postrimería será insensato."',
            'Proverbios 11:28 - "El que confía en sus riquezas caerá; mas los justos reverdecerán como ramas."',
            'Proverbios 22:16 - "El que oprime al pobre para aumentar sus ganancias, o que da al rico, ciertamente se empobrecerá."',
            'Proverbios 23:4 - "No te afanes por hacerte rico; sé prudente, y desiste."',
            'Proverbios 28:20 - "El hombre fiel abundará en bendiciones; mas el que se apresura a enriquecerse no quedará sin castigo."',
            'Salmos 62:10 - "No confiéis en la opresión, ni en la rapiña; no os envanezcáis; si las riquezas aumentan, no pongáis el corazón en ellas."',
            'Eclesiastés 5:13 - "Hay un grave mal que he visto debajo del sol: las riquezas guardadas por sus dueños para su mal."',

        ' "El dinero mal habido pronto se acaba; quien ahorra, poco a poco se enriquece." - Proverbios 13:11',
  
  '"Honra a Jehová con tus bienes, y con las primicias de todos tus frutos." - Proverbios 3:9',
  
  '"Mejor es lo poco con justicia, que la muchedumbre de frutos sin derecho." - Proverbios 16:8',
  
  '"No os hagáis tesoros en la tierra, donde la polilla y el orín corrompen, y donde ladrones minan y hurtan; sino haceos tesoros en el cielo, donde ni la polilla ni el orín corrompen, y donde ladrones no minan ni hurtan." - Mateo 6:19-20',
  
  '"El impío se presta y no paga; mas el justo tiene misericordia, y da." - Salmo 37:21',
  
  '"No os afanéis por vuestra vida, qué comeréis; ni por el cuerpo, qué vestiréis. La vida es más que la comida, y el cuerpo que el vestido." - Lucas 12:22-23',
  
  '"Guardaos de toda avaricia; porque la vida del hombre no consiste en la abundancia de los bienes que posee." - Lucas 12:15',
  
  '"Porque ¿qué aprovechará al hombre, si ganare todo el mundo, y perdiere su alma?" - Marcos 8:36',
  
  '"No seáis deudores a nadie, sino de amaros unos a otros; porque el que ama al prójimo, ha cumplido la ley." - Romanos 13:8',
  
  '"No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta." - Romanos 12:2',
  
  '"Y mi Dios proveerá a todas vuestras necesidades, conforme a sus riquezas en gloria en Cristo Jesús." - Filipenses 4:19',
  
  '"Más bienaventurado es dar que recibir." - Hechos 20:35',
        ];
  
        const bibleVersesSalud = [

            'Éxodo 15:26 - "Y dijo: Si oyeres atentamente la voz de Jehová tu Dios, e hicieres lo recto delante de sus ojos, y dieres oído a sus mandamientos, y guardares todos sus estatutos, ninguna enfermedad de las que envié a los egipcios te enviaré a ti, porque yo soy Jehová tu sanador."',
'Salmos 103:2-3 - "Bendice, alma mía, a Jehová, y no olvides ninguno de sus beneficios. Él es quien perdona todas tus iniquidades, quien sana todas tus dolencias."',
'Proverbios 4:20-22 - "Hijo mío, está atento a mis palabras; inclina tu oído a mis razones. No se aparten de tus ojos; guárdalas en medio de tu corazón; porque son vida a los que las hallan, y medicina a todo su cuerpo."',
'Éxodo 23:25 - "Mas a Jehová vuestro Dios serviréis, y él bendecirá tu pan y tus aguas; y yo quitaré toda enfermedad de en medio de ti."',
'Salmos 41:3 - "Jehová lo sustentará sobre el lecho del dolor; cambiarás toda su cama en su enfermedad."',
'Salmos 107:20 - "Envió su palabra, y los sanó, y los libró de su ruina."',
'Proverbios 17:22 - "El corazón alegre constituye buen remedio; mas el espíritu triste seca los huesos."',
'Salmos 147:3 - "Él sana a los quebrantados de corazón, y venda sus heridas."',
'Éxodo 15:2 - "Jehová es mi fortaleza y mi cántico, y ha sido mi salvación. Este es mi Dios, y lo alabaré; Dios de mi padre, y lo enalteceré."',
'Isaías 38:16 - "Oh Jehová, viviendo está él, viviendo está él; aun en ellas vivirá mi espíritu; pues me has curado, y me has hecho vivir."',
'Salmos 30:2 - "Jehová Dios mío, a ti clamé, y me sanaste."',
'Salmos 42:11 - "¿Por qué te abates, oh alma mía, y por qué te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, salvación mía y Dios mío."',
            
        '"No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia." - Isaías 41:10',
  
  '"Sana Señor mi alma, porque contra ti he pecado." - Salmos 41:4',
  
  '"El Señor te librará de toda enfermedad; él protegerá tu vida." - Salmos 41:3',
  
  '"El Señor está cerca de los quebrantados de corazón, y salva a los heridos de espíritu." - Salmos 34:18',
  
  'Mejor visita a un medico',
  
  '"Vengan a mí todos ustedes, los agotados de llevar cargas pesadas, y yo les daré descanso." - Mateo 11:28',
  
  '"Amado, yo deseo que tú seas prosperado en todas las cosas, y que tengas salud, así como prospera tu alma." - 3 Juan 1:2',
  
  '"Jesús les dijo: Yo soy el camino, la verdad y la vida. Nadie viene al Padre sino por mí." - Juan 14:6',
  
  '"Porque yo soy el Señor, tu Dios, que sostiene tu mano derecha; yo soy quien te dice: No temas, yo te ayudaré." - Isaías 41:13',
  
  '"El que perdona todas tus iniquidades, el que sana todas tus dolencias." - Salmos 103:3',
  
  '"Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados." - Isaías 53:5',
  
  '"Encomienda a Jehová tu camino, confía en Él, y Él hará." - Salmos 37:5',
        ];
        const bibleVersesIlegal = [
            "No malgastes mi tiempo",
            "Mejor ve a dormir, no puedo contestar eso",
            "No me involucro en temas ilegales",
            "No me hago cargo de tus decisiones, pero vas a ser juzgado",
            "Es mejor que dejes de indagar, hijo mío",
            "No puedo contestarte eso, hijo mío", 
        
        ]
        const bibleVersesNada = [
          "No tengo frases de la biblia para contestar eso",
          "La respuesta está en tu corazón",
          "¿Realmente esperas que una IA conteste eso? Si tu problema no es grave mejor consulta a un colega. Acabas de gastar tu pregunta",
          "La respuesta ya la sabes",
          "Creo que no",
          "La respuesta que buscas, siempre estuvo dentro tuyo",
          "Tal vez",
          "Podrías ir a la iglesia en vez de usar mi tiempo en vano",
          "Te recomiendo leer un libro de vez en cuando",

  
        ];
        

     

        textoInput = stringToArray(texto);

        let grupoDeFrases;

        let frasesAmor = [
            "amor","corazón","pareja","parejas","enamorado","beso","abrazo","pasión","pasion","cariño","romance","afecto","ternura","compromiso","sueño","deseo","ilusión","ilusion","devoción","devocion","matrimonio","felicidad","caricia","unión","union","admiración","atracción","alma","cariñoso","cariño","compañero","ternura","flechazo","suspiro","encanto","pasión","sincero","sentimiento","dulzura","risas","complicidad","fidelidad","conquista","amor","esposo","esposa","hombre","hombres","marido","mujer","mujeres","novio","novia","chica","chicas","chico","chicos","beso","besos","sexo","quiere","ama","amar","enamorarse","enamorado","enamorada", "enamorados","enamoradas"
          ];
          
        let frasesDinero = [
            "dinero","pobreza","pobres","pobre","ingreso","ingresos","salario", "salarios","ganancia","inversión","ahorro","riqueza","fortuna","presupuesto","deudas","crédito","finanzas","beneficio","bonanza","prosperidad","capital","dividendos","herencia","heredar","éxito","bolsa","mercados","mercado","emprendimiento","negocio","emprendedor","ganar","invertir","gastar","austeridad","riqueza","acumular","pagar","sueldo","salario","negocio","dinero","plata","economia","ganancia","emprender","negocios","emprendedores","billetera","trabajo","asenso","ascenso","elecciones","politica","crypto","cryptomoneda","bitcoin"
          ];
          
        let frasesSalud = [
            "salud","bienestar","enfermedad","medicina","prevención","tratamiento","nutrición","ejercicio","físico","actividad","física","higiene","sueño","descanso","bienestar","mental","emocional","equilibrio","saludable","prevención","diagnóstico","terapia","medicamentos","médico","medico","hospital","recuperación","bienestar","emocional","prevención","cuidado","enfermedades","vacunación","rehabilitación","bienestar","social","actividad","física","bienestar","emocional","salud","enfermedad","dolor","doler","duele","hinchado","medico","hospital","remedio","cancer","tos","morir","muerto","fallecer","matar","mal","siento","sangre"
          ];
          
        let frasesIlegales = ["armas", "pistola", "mierda", "idiota", "imbecil", "estupido", "concha","puto", "puta", "tarado", "droga", "merca", "falopa", "marihuana" ,"golpe", "piñas" ,"piña", "romper"];
        if (containsWord(textoInput, frasesAmor)){
             grupoDeFrases = bibleVersesAmor;
        }else if(containsWord(textoInput, frasesDinero)){
            grupoDeFrases = bibleVersesDinero;
        }else if(containsWord(textoInput, frasesSalud)){
            grupoDeFrases = bibleVersesSalud;
        }else if (containsWord(textoInput, frasesIlegales)){
          grupoDeFrases = bibleVersesIlegal;
        }else{
            grupoDeFrases = bibleVersesNada;
        }
  
  
    const randomIndex = Math.floor(Math.random() * grupoDeFrases.length);
    return grupoDeFrases[randomIndex];
  }
  
// Función para enviar el mensaje del usuario y obtener una respuesta
function sendMessage() {
    const userQuestion = document.getElementById("userQuestion").value.trim();
    const chatMessages = document.getElementById("chatMessages");
    const sendButton = document.getElementById("sendButton");
  
    
    if (userQuestion !== "") {
      sendButton.disabled = true; // Deshabilitar el botón mientras se procesa la pregunta
  
      const waitTime = 4000; // 5 segundos en milisegundos
      const lastQuestionTime = localStorage.getItem("lastQuestionTime");
  
      if (!lastQuestionTime || (Date.now() - lastQuestionTime) >= waitTime) {
        // Si es la primera pregunta o ha pasado más de 5 segundos
        let texto = document.getElementById("userQuestion").value;
        const response = getBibleRandomVerse(texto);
  
        const userMessageElement = document.createElement("div");
        userMessageElement.classList.add("message", "user");
        userMessageElement.textContent = userQuestion;
  
        const typingMessageElement = document.createElement("div");
        typingMessageElement.classList.add("message", "typing");
        typingMessageElement.textContent = "Escribiendo...";
  
        const botMessageElement = document.createElement("div");
        botMessageElement.classList.add("message", "bot");
        botMessageElement.textContent = response;
  
        chatMessages.appendChild(userMessageElement);
        chatMessages.appendChild(typingMessageElement);
  
        // Simulamos un efecto de demora de 1.5 segundos antes de mostrar la respuesta
        setTimeout(function () {
          chatMessages.removeChild(typingMessageElement);
          chatMessages.appendChild(botMessageElement);
          chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll al final del chat
  
          localStorage.setItem("lastQuestionTime", Date.now()); // Guardamos la hora de la última pregunta
  
          sendButton.disabled = false; // Habilitar nuevamente el botón
        }, 4500);
      } else {
        alert("Solo puedes hacer una pregunta a dios cada 1 hora.");
        sendButton.disabled = false; // Habilitar nuevamente el botón en caso de error
      }
    }
  }