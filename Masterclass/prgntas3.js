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
      pregunta: '¿Cuál es la mejor práctica para proteger contraseñas?',
      respuestas: [
        'A) Usar la misma contraseña para todas las cuentas.',
        'B) Usar contraseñas únicas y complejas para cada cuenta.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Qué es la autenticación de dos factores (2FA)?',
      respuestas: [
        'A) Un método que requiere solo una contraseña para acceder a una cuenta.',
        'B) Un método que requiere dos formas de verificación para acceder a una cuenta.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Por qué es importante mantener el software actualizado?',
      respuestas: [
        'A) Para mejorar el rendimiento del sistema.',
        'B) Para parchear vulnerabilidades de seguridad y proteger contra amenazas.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Qué es el respaldo de datos?',
      respuestas: [
        'A) El proceso de eliminar archivos innecesarios.',
        'B) El proceso de copiar y almacenar datos importantes en un lugar seguro.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Por qué es importante educarse sobre seguridad digital?',
      respuestas: [
        'A) Para aprender a crear malware.',
        'B) Para aprender a identificar y protegerse contra amenazas cibernéticas.'
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
  