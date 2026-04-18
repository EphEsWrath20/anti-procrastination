chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "breakAlarm") {
    // 1. Limpiar estado
    chrome.storage.local.set({ "isStudying": false, "endTime": null });
    chrome.action.setBadgeText({ text: "" });

    // 2. Sumar sesión completada
    chrome.storage.local.get(["totalSessions", "rewardUrl"], (data) => {
      const newTotal = (data.totalSessions || 0) + 1;
      chrome.storage.local.set({ "totalSessions": newTotal });

      // 3. Abrir recompensa
      chrome.tabs.create({ url: data.rewardUrl || "https://google.com" });

      // 4. Notificación visual
      chrome.notifications.create({
        type: "basic",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076134.png",
        title: "¡Sesión Completada! 🏆",
        message: `Has terminado tu sesión. ¡Llevas ${newTotal} hoy!`,
        priority: 2
      });
    });
  }
});