document.addEventListener("DOMContentLoaded", function() {
  const icons = document.querySelectorAll(".icon");
  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      icon.style.transform = "scale(1.5)";
      setTimeout(() => { icon.style.transform = "scale(1)"; }, 200);
    });
  });
});
