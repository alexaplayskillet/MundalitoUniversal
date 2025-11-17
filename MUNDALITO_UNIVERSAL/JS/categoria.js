document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = document.querySelectorAll(".inp");

  const expresiones = {
    titulo: /^[a-zA-Z0-9]{4,}$/ // Letras y números, mínimo 4 caracteres
  };

  const campos = {
    titulo: false,
    descripcion: false
  };

  const validarCampo = (expresion, input, campo) => {
    const validationsDiv = input.nextElementSibling;
    const pls = validationsDiv?.querySelector(".pls");
    const error = validationsDiv?.querySelector(".error");
    const valor = input.value.trim();

    if (valor === "") {
      input.classList.remove("correcto", "incorrecto");
      if (pls) pls.style.display = "block";
      if (error) error.style.display = "none";
      campos[campo] = false;
    } else if (expresion && !expresion.test(valor)) {
      input.classList.add("incorrecto");
      input.classList.remove("correcto");
      if (pls) pls.style.display = "none";
      if (error) error.style.display = "block";
      campos[campo] = false;
    } else {
      input.classList.add("correcto");
      input.classList.remove("incorrecto");
      if (pls) pls.style.display = "none";
      if (error) error.style.display = "none";
      campos[campo] = true;
    }
  };

  inputs.forEach(input => {
    const name = input.placeholder.toLowerCase().includes("titulo") ? "titulo" : "descripcion";
    input.setAttribute("name", name);
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
  });

  function validarFormulario(e) {
    const campo = e.target.name;
    if (campo === "titulo") {
      validarCampo(expresiones.titulo, e.target, "titulo");
    } else if (campo === "descripcion") {
      validarCampo(null, e.target, "descripcion"); // Solo verifica que no esté vacío
    }
  }

  form.addEventListener("submit", e => {
    inputs.forEach(input => validarFormulario({ target: input }));
    if (!campos.titulo || !campos.descripcion) {
      e.preventDefault();
      alert("Por favor completa correctamente los campos.");
    }
  });
});