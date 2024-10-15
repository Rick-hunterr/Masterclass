window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

function mostrar() {
  const settings = document.querySelector('.Settings');
  const Curso = document.querySelector('.Curso');
  if (settings.style.display === 'flex') {
    Curso.style.display = 'none';
      settings.style.display = 'none';
  } else {
      settings.style.display = 'flex';
  }
}

//mostrar cursos
function mostrarCurso() {
    const Curso = document.querySelector('.Curso');
    if (Curso.style.display === 'flex') {
        Curso.style.display = 'none';
    } else {
        Curso.style.display = 'flex';
    }
  }

  //Ocultar
  function Ocultar() {
    const checkbox = document.querySelector('.toggle-checkbox');
    const settings = document.querySelector('.Settings');
    const Curso = document.querySelector('.Curso');
    if (Curso.style.display === 'flex' || settings.style.display === 'flex') {
        Curso.style.display = 'none';
        settings.style.display = 'none';
        checkbox.checked = false;
    }
  }

// Programación código trivia
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
  const imgElement = document.querySelector('.Comenton img');
  
  if (opcion === preguntas[preguntaActual].correcta) {
      puntos += 1;
      imgElement.style.animation = 'parpadeoverde 1s ease-out forwards'; // Cambiar a verde
  } else {
      imgElement.style.animation = 'parpadeorojo 1s ease-out forwards'; // Cambiar a rojo
  }
  
  // Aplicar la animación de crecimiento después de un retraso
  setTimeout(() => {
      imgElement.style.animation = 'crecer2 5s ease-out infinite'; // Aplicar la animación de crecimiento
  }, 1000); // Espera 1 segundo antes de iniciar la animación de crecimiento

  preguntaActual += 1;
  mostrarPregunta();
}

function mostrarPuntaje() {
  const Pregunta = document.querySelector('#Pregunta');
  Pregunta.textContent = `Acertaste: ${puntos}/5`;
  
  document.querySelector("#btnPregunta1").style.display = 'none';
  document.querySelector("#btnPregunta2").style.display = 'none';
}
