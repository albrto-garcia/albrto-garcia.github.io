document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: "smooth",
    });
  });
});

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

function navResponsive() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
