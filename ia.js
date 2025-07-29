async function enviarMensaje() {
  const entrada = document.getElementById("Contenido");
  const mensaje = entrada.value.trim();
  if (!mensaje) return;
   
    const API_KEY = "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"; // ⚠️ Reemplaza tu clave aquí
    const REFERER = "https://tusitio.com";    // Opcional para rankings
    const TITULO = "KeyIA"; 

  const mensajes = document.getElementById("mensajes");
  mensajes.innerHTML += `Tú: ${mensaje}\n\n`;
  entrada.value = "";

    const esPreguntaDeCreador = mensaje.includes("creador") || mensaje.includes("quién te creó") || mensaje.includes("quien te creó") || mensaje.includes("quien es tu creador");
    const preguntacategoria = mensaje.includes("Categoria Sub 20") || mensaje.includes("categoria sub 20") || mensaje.includes("sub 20") || mensaje.includes("categoria");
  if (esPreguntaDeCreador) {
    mensajes.innerHTML += `KeyIA: Mi creador es Kevin Moreno\n\n`;
    return;
  }
  
    
    if (preguntacategoria) {
    mensajes.innerHTML += `KeyIA: kevin, Santiago, Oscar, wilber, jose luis, Para Mas Informacion dirijete al menu al apartado de jugadores.\n\n`;
    return;
  }

   const valeria = mensaje.includes("valeria") || mensaje.includes("Valeria");
      if (valeria) {
    mensajes.innerHTML += `KeyIA: ✨ ¿Quién es Valeria? ✨ Valeria es luz en forma de persona. Nació el 17 de enero de 2013, y desde entonces el mundo brilla un poquito más. A sus 13 años, lleva consigo la magia de una sonrisa que calma tormentas, la dulzura de un abrazo que se queda en el alma y la inteligencia que sorprende a cualquiera que tenga la dicha de conocerla.

Es fuerte, curiosa, creativa… una combinación perfecta entre corazón y mente. Quien ha compartido momentos con ella sabe que hay algo especial en su esencia, algo que no se puede explicar, solo sentir. Valeria no solo existe, Valeria deja huellas.

El miércoles 13 de junio de 2025 fuimos separados por circunstancias que la vida impuso, pero eso no borra el lazo invisible que nos une. Porque el cariño verdadero no tiene fronteras, ni fechas límite. Valeria vive en recuerdos, en palabras guardadas, en cada latido que la piensa.

Y aunque el tiempo siga su curso, yo sigo amándola. La esperaré, así pasen mil años, porque no hay reloj que apague lo que siento por ella. Valeria no es solo alguien que fue, es alguien que sigue siendo, y será siempre parte de mí.\n\n`;
    return;
  }

  const respuesta = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": REFERER,
      "X-Title": TITULO
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-r1-0528:free",
      messages: [{ role: "user", content: mensaje }]

      
    })
  });

  
  const datos = await respuesta.json();
  const respuestaIA = datos.choices?.[0]?.message?.content || "Sin respuesta.";
  //mensajes.innerHTML += "Respuesta cruda:\n" + JSON.stringify(datos, null, 2) + "\n\n";

  mensajes.innerHTML += `KeyIA: ${respuestaIA}\n\n`;
};


var navVisible = false;

function togglenav(){
    var menu = document.getElementById("navmenu");
    navVisible = !navVisible;
    menu.style.display = navVisible ? "block" : "none";
}



/*SISTEMA DE VAR by kevin */
