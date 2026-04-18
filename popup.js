let countdownInterval;
let selectedSeconds = 0;

const display = document.getElementById('timeLeft');
const startBtn = document.getElementById('startBtn');
const urlInput = document.getElementById('userUrl');
const blacklistInput = document.getElementById('blacklist');
const sessionsDisplay = document.getElementById('totalSessions');

// 1. Formatear segundos a MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// 2. Recuperar estado al abrir el popup
function restoreTimer() {
  chrome.storage.local.get(["endTime", "isStudying", "blacklist", "rewardUrl", "totalSessions"], (data) => {
    // Restaurar textos de los inputs
    if (data.blacklist) blacklistInput.value = data.blacklist;
    if (data.rewardUrl) urlInput.value = data.rewardUrl;
    
    // Mostrar sesiones completadas hoy
    if (data.totalSessions) {
      sessionsDisplay.innerText = data.totalSessions;
    }

    if (data.isStudying && data.endTime) {
      const now = Date.now();
      const remaining = Math.round((data.endTime - now) / 1000);

      if (remaining > 0) {
        startTimerVisual(remaining);
        startBtn.disabled = true;
        startBtn.innerText = "🛡️ MODO ACTIVO";
      } else {
        // Si el tiempo ya pasó mientras el popup estaba cerrado
        chrome.storage.local.set({ "isStudying": false });
        display.innerText = "00:00";
      }
    }
  });
}

// 3. El contador visual (el que ves moverse)
function startTimerVisual(seconds) {
  clearInterval(countdownInterval);
  let timeLeft = seconds;
  
  display.innerText = formatTime(timeLeft);
  
  countdownInterval = setInterval(() => {
    timeLeft--;
    
    if (timeLeft < 0) {
      clearInterval(countdownInterval);
      display.innerText = "00:00";
      startBtn.disabled = false;
      startBtn.innerText = "ACTIVAR ENFOQUE";
      // Refrescar sesiones al terminar
      chrome.storage.local.get("totalSessions", (d) => {
        sessionsDisplay.innerText = d.totalSessions || 0;
      });
      return;
    }

    display.innerText = formatTime(timeLeft);
    
    // Actualizar el número pequeño en el icono (Badge)
    const minsLeft = Math.ceil(timeLeft / 60);
    chrome.action.setBadgeText({ text: timeLeft > 0 ? minsLeft.toString() : "" });
  }, 1000);
}

// 4. Eventos de los botones de tiempo
document.getElementById('add1').addEventListener('click', () => { 
  selectedSeconds += 60; 
  display.innerText = formatTime(selectedSeconds); 
});

document.getElementById('add5').addEventListener('click', () => { 
  selectedSeconds += 300; 
  display.innerText = formatTime(selectedSeconds); 
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(countdownInterval);
  selectedSeconds = 0;
  display.innerText = "00:00";
  chrome.storage.local.set({ "isStudying": false, "endTime": null });
  chrome.alarms.clear("breakAlarm");
  chrome.action.setBadgeText({ text: "" });
  startBtn.disabled = false;
  startBtn.innerText = "ACTIVAR ENFOQUE";
});

// 5. Botón principal de ACTIVAR
startBtn.addEventListener('click', () => {
  if (selectedSeconds <= 0) return alert("¡Añade minutos de estudio!");

  const userUrl = urlInput.value || "https://google.com";
  const blacklist = blacklistInput.value;
  const endTime = Date.now() + (selectedSeconds * 1000);

  // Guardar todo en el almacenamiento local
  chrome.storage.local.set({ 
    "isStudying": true, 
    "blacklist": blacklist, 
    "rewardUrl": userUrl, 
    "endTime": endTime 
  });

  // Crear la alarma real que despertará al background.js
  chrome.alarms.create("breakAlarm", { delayInMinutes: selectedSeconds / 60 });
  
  // Iniciar visualmente y bloquear botón
  startTimerVisual(selectedSeconds);
  startBtn.disabled = true;
  startBtn.innerText = "🛡️ MODO ACTIVO";
  
  // Resetear el contador de selección para la próxima vez
  selectedSeconds = 0;
});

// Inicializar al abrir
restoreTimer();