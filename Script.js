const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }

  // Eleva el botón si está cerca del footer
  const footer = document.querySelector("footer").getBoundingClientRect();
  if (footer.top < window.innerHeight) {
    scrollBtn.style.bottom = "70px";
  } else {
    scrollBtn.style.bottom = "20px";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const sloganText = "Soñando, dibujando y creando futuros.";
const sloganElement = document.getElementById("slogan");

let index = 0;

function typeSlogan() {
  sloganElement.textContent = "";
  sloganElement.style.opacity = "1"; // reinicia opacidad
  index = 0;

  const typer = setInterval(() => {
    if (index < sloganText.length) {
      sloganElement.textContent += sloganText.charAt(index);
      index++;
    } else {
      clearInterval(typer);

      // Esperar 10 segundos y desvanecer
      setTimeout(() => {
        sloganElement.style.transition = "opacity 1s ease";
        sloganElement.style.opacity = "0";

        // Reiniciar después de 0.5s tras desvanecerse
        setTimeout(typeSlogan, 1500);
      }, 3000);
    }
  }, 100);
}

// Iniciar al cargar
typeSlogan();

function toggleCert(id) {
  const img = document.getElementById(id);
  const isVisible = img.classList.contains("visible");

  // Toggle visibilidad con clase
  if (isVisible) {
    img.classList.remove("visible");
  } else {
    img.classList.add("visible");
  }
}

