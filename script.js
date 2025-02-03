const date = new Date();
const hour = String(date.getUTCHours() + 1).padStart(2, "0"); // Ensures two-digit hours
const minute = String(date.getUTCMinutes()).padStart(2, "0"); // Ensures two-digit minutes
const seconds = String(date.getUTCSeconds()).padStart(2, "0"); // Ensures two-digit seconds (optional)

const time = `${hour}:${minute}`; // Adjust if you want to include seconds
document.getElementById("time").textContent = time;
document.getElementById("extra-time").textContent = time;
