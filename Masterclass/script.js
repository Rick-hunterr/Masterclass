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
//Programación codigo trivia
let puntos = 0;
let preguntaActual = 0;
const totalPreguntas = 5;

const preguntas = [
  {
    pregunta: '¿Qué es la ciberseguridad?',
    respuestas: [
      'A) La protección de la información personal.',
      'B) Un tipo de software antivirus.'
    ],
    correcta: 0
  },
  {
    pregunta: '¿Cuál es uno de los principales objetivos de la ciberseguridad?',
    respuestas: [
      'A) Proteger sistemas y datos confidenciales.',
      'B) Aumentar la velocidad de internet.'
    ],
    correcta: 0
  },
  {
    pregunta: '¿Qué es el phishing?',
    respuestas: [
      'A) Un tipo de virus informático.',
      'B) Una técnica de fraude para obtener información confidencial.'
    ],
    correcta: 1
  },
  {
    pregunta: '¿Por qué es importante conocer los ciberataques comunes?',
    respuestas: [
      'A) Para ignorarlos.',
      'B) Para implementar medidas preventivas.'
    ],
    correcta: 1
  },
  {
    pregunta: '¿Qué te protege de los ciberataques?',
    respuestas: [
      'A) Establecer medidas de seguridad robustas.',
      'B) Usar la misma contraseña para múltiples cuentas en diferentes plataformas.'
    ],
    correcta: 0
  }
];

function Iniciar() {
  const settings = document.querySelector('#btnJuego');
  settings.style.display = 'none';
  
  mostrarPregunta();
}

function mostrarPregunta() {
  const Pregunta = document.querySelector('#Pregunta');
  const btn1 = document.querySelector("#btnPregunta1");
  const btn2 = document.querySelector("#btnPregunta2");
  
  if (preguntaActual < totalPreguntas) {
    const { pregunta, respuestas } = preguntas[preguntaActual];
    Pregunta.textContent = pregunta;
    btn1.style.display = 'block';
    btn1.textContent = respuestas[0];
    btn1.onclick = () => seleccionarRespuesta(0);
    
    btn2.style.display = 'block';
    btn2.textContent = respuestas[1];
    btn2.onclick = () => seleccionarRespuesta(1);
  } else {
    mostrarPuntaje();
  }
}

function seleccionarRespuesta(opcion) {
  if (opcion === preguntas[preguntaActual].correcta) {
    puntos += 1;
  }
  
  preguntaActual += 1;
  mostrarPregunta();
}

function mostrarPuntaje() {
  const Pregunta = document.querySelector('#Pregunta');
  Pregunta.textContent = `Tu puntaje es: ${puntos}`;
  
  document.querySelector("#btnPregunta1").style.display = 'none';
  document.querySelector("#btnPregunta2").style.display = 'none';
}

