function applyBlock() {
  chrome.storage.local.get(["isStudying", "blacklist"], (data) => {
    if (data.isStudying && data.blacklist) {
      const sites = data.blacklist.split(',').map(s => s.trim().toLowerCase());
      const currentHost = window.location.hostname.toLowerCase();

      // Si la URL actual contiene alguna de las palabras prohibidas
      const isForbidden = sites.some(site => site.length > 0 && currentHost.includes(site));

      if (isForbidden) {
        // Matamos la carga de la página
        window.stop(); 
        
        // Sustituimos TODA la página por nuestro mensaje
        document.documentElement.innerHTML = `
          <head><title>BLOQUEADO</title></head>
          <body style="background:#000; color:white; font-family:sans-serif; display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; margin:0; overflow:hidden;">
            <h1 style="font-size:50px;">🚫 MODO ESTUDIO</h1>
            <p style="font-size:20px;">Esta web está bloqueada. ¡Vuelve al trabajo!</p>
          </body>
        `;
      }
    }
  });
}

// Ejecutar inmediatamente
applyBlock();

// Revisar cada segundo por si cambias de video en YouTube sin recargar
setInterval(applyBlock, 1000);