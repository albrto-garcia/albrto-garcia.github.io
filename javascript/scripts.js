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
      alert("Error: Todos los campos deben estar llenos.");
      return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Error: Debe ingresar un formato de correo electrónico válido.");
      return;
    }

    alert("¡Hola " + nombre + "! Tu mensaje ha sido enviado con éxito.");
  });
