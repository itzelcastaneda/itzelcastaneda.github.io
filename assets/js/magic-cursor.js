document.addEventListener("mousemove", function(e){
  const particle = document.createElement("div");
  particle.className = "cursor-particle";
  particle.style.left = e.pageX + "px";
  particle.style.top = e.pageY + "px";
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 1000);
});
