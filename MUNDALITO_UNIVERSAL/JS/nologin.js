document.addEventListener("DOMContentLoaded", () => {
  // Like button logic
  document.querySelectorAll(".like-btn").forEach((btn) => {
    const icon = btn.querySelector(".like");

    btn.addEventListener("click", () => {
     alert("¡No has iniciado sesion!");
    });
  });

  //image button logic
  document.querySelectorAll(".IMG").forEach((btn) => {
    const icon = btn.querySelector(".image");

    btn.addEventListener("click", () => {
      alert("¡No has iniciado sesion!");
    });
  });

  //video button logic
  document.querySelectorAll(".VID").forEach((btn) => {
    const icon = btn.querySelector(".video");

    btn.addEventListener("click", () => {
      alert("¡No has iniciado sesion!");
    });
  });
  //emoji button logic
  document.querySelectorAll(".EMOJI").forEach((btn) => {
    const icon = btn.querySelector(".emo");

    btn.addEventListener("click", () => {
      alert("¡No has iniciado sesion!");
    });
  });


  //enviar comentario
  document.querySelectorAll(".sendto").forEach((btn) =>{
    const icon = btn.querySelector(".send");

    btn.addEventListener("click", () => {
      alert("¡No has iniciado sesion!");
    });
  });

  //replico para el comentario

  document.querySelectorAll(".comment-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
    alert("¡Debes iniciar sesión para interactuar con el contenido!");
    });
  });
});