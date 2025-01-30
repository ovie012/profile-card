function updateTime() {
    document.getElementById("utc-time").textContent = new Date().toUTCString();
}
updateTime();