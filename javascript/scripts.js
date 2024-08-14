const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("subject").value;
    var mensaje = document.getElementById("message").value;

    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
      document.getElementById("popupMessage").textContent =
        "Error: Todos los campos deben estar llenos.";
      document.getElementById("popup").style.display = "flex";
      return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("popupMessage").textContent =
        "Error: Debe ingresar un formato de correo electrónico válido.";
      document.getElementById("popup").style.display = "flex";
      return;
    }

    document.getElementById("popupMessage").textContent =
      "¡Hola " + nombre + "! Tu mensaje ha sido enviado con éxito.";
    document.getElementById("popup").style.display = "flex";
  });

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop + -55,
      behavior: "smooth",
    });
    navDropdown();
  });
});

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
