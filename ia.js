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