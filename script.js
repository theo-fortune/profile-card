const date = new Date();
const hour = date.getUTCHours();
const minute = String(date.getUTCMinutes()).padStart(2, "0");
const seconds = date.getSeconds();
const ampm = hour > 12 ? "am" : "pm";
const time = `${hour}:${minute}`;
document.getElementById("time").textContent = time;
document.getElementById("extra-time").textContent = time;