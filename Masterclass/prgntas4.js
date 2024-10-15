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
  const totalPreguntas = 10;
  
  const preguntas = [
    {
      pregunta: '¿Qué es el phishing?',
      respuestas: [
        'A) Una técnica de engaño para obtener información confidencial.',
        'B) Un tipo de malware que se instala en tu computadora.'
      ],
      correcta: 0
    },
    
    {
      pregunta: '¿Qué es un firewall?',
      respuestas: [
        'A) Un programa que bloquea sitios web inapropiados.',
        'B) Un sistema de seguridad que controla el tráfico de red.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Por qué es importante usar contraseñas fuertes?',
      respuestas: [
        'A) Para proteger tus cuentas de accesos no autorizados.',
        'B) Para decorar tu perfil en las redes sociales.'
      ],
      correcta: 0
    },
    {
      pregunta: '¿Qué es el ransomware?',
      respuestas: [
        'A) Un tipo de malware que cifra tus archivos y pide un rescate.',
        'B) Un tipo de software que mejora el rendimiento del sistema.'
      ],
      correcta: 0
    },
    {
      pregunta: '¿Por qué es importante mantener actualizado tu sistema operativo?',
      respuestas: [
        'A) Para tener las últimas características y mejoras de rendimiento.',
        'B) Para parchear vulnerabilidades de seguridad y proteger contra amenazas.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Qué es la autenticación de dos factores (2FA)?',
      respuestas: [
        'A) Un método que requiere dos formas de verificación para acceder a una cuenta.',
        'B) Un método que requiere solo una contraseña para acceder a una cuenta.'
      ],
      correcta: 0
    },
    {
      pregunta: '¿Qué es un virus informático?',
      respuestas: [
        'A) Un tipo de malware que se replica y puede dañar tu sistema.',
        'B) Un programa que mejora el rendimiento del sistema.'
      ],
      correcta: 0
    },
    {
      pregunta: '¿Por qué es importante hacer copias de seguridad de tus datos?',
      respuestas: [
        'A) Para tener más espacio en tu disco duro.',
        'B) Para proteger tus datos en caso de pérdida o daño.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Qué es el spear phishing?',
      respuestas: [
        'A) Un tipo de phishing dirigido a una audiencia general.',
        'B) Un tipo de phishing dirigido a una víctima específica.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Qué es el HTTPS?',
      respuestas: [
        'A) Un protocolo de transferencia de hipertexto seguro.',
        'B) Un protocolo de transferencia de hipertexto inseguro.'
      ],
      correcta: 0
    },
    {
      pregunta: '¿Por qué es importante desconfiar de correos electrónicos sospechosos?',
      respuestas: [
        'A) Porque todos los correos electrónicos son seguros.',
        'B) Porque pueden contener enlaces o archivos maliciosos.'
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
    Pregunta.textContent = `Acertaste: ${puntos}/${totalPreguntas}`;
    
    document.querySelector("#btnPregunta1").style.display = 'none';
    document.querySelector("#btnPregunta2").style.display = 'none';
  }
  