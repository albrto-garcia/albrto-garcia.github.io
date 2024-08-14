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

function navDropdown() {
  document.querySelector(".dropdown").classList.toggle("open");
  const isOpen = document.querySelector(".dropdown").classList.contains("open");
  document.getElementById("nav-dropdown").classList = isOpen
    ? "fa-solid fa-bars"
    : "fa fa-bars";
}

document.querySelectorAll(".smooth").forEach((anchor) => {
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
