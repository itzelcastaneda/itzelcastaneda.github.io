// Floating papel picado animation
function spawnPapelPicado() {
  const header = document.querySelector("header");
  if (!header) return; // safety check

  const div = document.createElement("div");
  div.className = "papel-picado";

  // random horizontal position
  div.style.left = Math.random() * window.innerWidth + "px";

  // random color
  div.style.background = `hsl(${Math.random()*360}, 80%, 60%)`;

  header.appendChild(div);

  // remove after animation ends
  setTimeout(() => div.remove(), 5000);
}

// spawn every 500ms
setInterval(spawnPapelPicado, 500);

// Bounce headers on click
document.querySelectorAll("h1").forEach(h1 => {
  h1.addEventListener("click", () => {
    h1.style.transform = "scale(1.2)";
    setTimeout(() => h1.style.transform = "scale(1)", 200);
  });
});
