const date = new Date();
const hour = date.getUTCHours();
const minute = String(date.getUTCMinutes()).padStart(2, "0");
const seconds = date.getSeconds();
const ampm = hour > 12 ? "am" : "pm";
const time = `${hour}:${minute}`;
document.getElementById("time").textContent = time;
document.getElementById("extra-time").textContent = time;

function createShootingStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";

  // Random starting position in top-right quadrant
  const startX = window.innerWidth + 100;
  const startY = Math.random() * window.innerHeight * 0.3;

  // Random animation variations
  const duration = 2500 + Math.random() * 1500; // 2.5-4 seconds
  const delay = Math.random() * 3000; // Max 3s delay between stars

  star.style.cssText = `
    top: ${startY}px;
    left: ${startX}px;
    animation-duration: ${duration}ms;
    animation-delay: ${delay}ms;
  `;

  document.body.appendChild(star);

  // Remove element after animation
  setTimeout(() => star.remove(), duration + delay);
}

// Create stars in random intervals
function startStarShower() {
  // Initial burst
  setTimeout(createShootingStar, 100);
  setTimeout(createShootingStar, 300);
  setTimeout(createShootingStar, 500);

  // Continuous random shooting
  setInterval(() => {
    if (Math.random() > 0.3) {
      // 70% chance to create a star
      createShootingStar();
    }
  }, 3000);
}

// Start when page loads
window.addEventListener("load", startStarShower);

// Reset on window resize
window.addEventListener("resize", () => {
  document.querySelectorAll(".shooting-star").forEach((star) => star.remove());
});
