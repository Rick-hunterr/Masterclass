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
      pregunta: '¿Qué es un virus informático?',
      respuestas: [
        'A) Un tipo de software que mejora el rendimiento del sistema.',
        'B) Un programa malicioso que se replica y puede dañar el sistema.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Cuál es el propósito principal de un troyano?',
      respuestas: [
        'A) Proteger el sistema contra amenazas.',
        'B) Permitir el acceso no autorizado a un sistema.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Qué es un gusano informático?',
      respuestas: [
        'A) Un tipo de virus que requiere la intervención del usuario para propagarse.',
        'B) Un tipo de malware que se replica automáticamente sin necesidad de intervención humana.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Qué es un hacker ético?',
      respuestas: [
        'A) Un ciberdelincuente que ataca sistemas sin autorización.',
        'B) Un profesional de la seguridad que identifica vulnerabilidades para mejorar la protección.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Qué es el ransomware?',
      respuestas: [
        'A) Un tipo de software que protege los archivos del usuario.',
        'B) Un tipo de malware que cifra los archivos del usuario y exige un rescate para desbloquearlos.'
      ],
      correcta: 1
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
  