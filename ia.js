// 🔐 Configuración
const API_KEY = "csk-46hehx3dphneedyrctk9kw39cc8tej6vdx3h8398jj8xekkw"; // Reemplaza con tu clave
const REFERER = "https://tusitio.com";
const TITULO = "KeyIA";

// 🧠 Elementos
const entrada = document.getElementById("Contenido");
const mensajes = document.getElementById("mensajes");

// 💬 Función para enviar mensaje
async function enviarMensaje() {
  const mensaje = entrada.value.trim();
  if (!mensaje) return;

  mensajes.value += `Tú: ${mensaje}\n\n`;
  entrada.value = "";

  // 💡 Respuestas especiales
  if (mensaje.includes("creador") || mensaje.includes("quién te creó")) {
    mensajes.value += `KeyIA: Mi creador es Kevin Moreno\n\n`;
    verificarYLimpiarTextarea();
    return;
  }

  if (mensaje.toLowerCase().includes("sub 20") || mensaje.toLowerCase().includes("categoria")) {
    mensajes.value += `KeyIA: kevin, Santiago, Oscar, wilber, jose luis, Para más información dirígete al menú, al apartado de jugadores.\n\n`;
    verificarYLimpiarTextarea();
    return;
  }

  if (mensaje.toLowerCase().includes("valeria")) {
    mensajes.value += `KeyIA: ✨ ¿Quién es Valeria? ✨ Valeria es luz en forma de persona... [Mensaje completo aquí]\n\n`;
    verificarYLimpiarTextarea();
    return;
  }

  // 🌐 Llamada a la API
  const respuesta = await fetch("https://api.cerebras.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": REFERER,
      "X-Title": TITULO
    },
    body: JSON.stringify({
      model: "qwen-3-235b-a22b-instruct-2507",
      messages: [{ role: "user", content: mensaje }]
    })
  });

  const datos = await respuesta.json();
  const respuestaIA = datos.choices?.[0]?.message?.content || "Sin respuesta.";
  mensajes.value += `KeyIA: ${respuestaIA}\n\n`;
  verificarYLimpiarTextarea();
}

// 📥 Evento para Enter
entrada.addEventListener("keydown", function(i) {
  if (i.key === "Enter") {
    i.preventDefault();
    enviarMensaje();
  }
});


var navVisible = false;

function togglenav(){
    var menu = document.getElementById("navmenu");
    navVisible = !navVisible;
    menu.style.display = navVisible ? "block" : "none";
}


// 🧼 Limpiar si se supera el límite
function verificarYLimpiarTextarea() {
  if (mensajes.value.length >= 3500) {
    mensajes.value += "\n⚠️ Limpiando mensajes en 1 minuto...\n\n";
    setTimeout(() => {
      mensajes.value = "";
    }, 60000);
  }
}

