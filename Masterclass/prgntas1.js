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
      pregunta: '¿Cuál es el objetivo principal de un ataque de spear phishing?',
      respuestas: [
        'A) Enviar spam masivo a miles de destinatarios.',
        'B) Dirigirse específicamente a un individuo o grupo pequeño con información personalizada.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Qué es el whaling?',
      respuestas: [
        'A) Una técnica de phishing dirigida a empleados de nivel medio.',
        'B) Una forma sofisticada de phishing que se dirige específicamente a ejecutivos y altos cargos.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Cuál es la característica principal del smishing?',
      respuestas: [
        'A) Utilizar correos electrónicos para engañar a las víctimas.',
        'B) Usar mensajes de texto SMS para realizar ataques de phishing.'
      ],
      correcta: 1
    },
    {
      pregunta: '¿Qué es el vishing?',
      respuestas: [
        'A) Una técnica de phishing que utiliza llamadas telefónicas para obtener información confidencial.',
        'B) Un tipo de malware que afecta los sistemas de voz sobre IP.'
      ],
      correcta: 0
    },
    {
      pregunta: '¿Cuál es la principal diferencia entre phishing y pretexting?',
      respuestas: [
        'A) El phishing utiliza correos electrónicos, mientras que el pretexting usa llamadas telefónicas.',
        'B) El phishing crea una historia falsa para obtener información, mientras que el pretexting establece un contexto falso para engañar a la víctima.'
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
  