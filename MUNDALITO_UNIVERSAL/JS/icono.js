
document.addEventListener("DOMContentLoaded", () => {
  // Like button logic
  document.querySelectorAll(".like-btn").forEach((btn) => {
    const icon = btn.querySelector(".like");

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      icon.classList.add("animate");

      setTimeout(() => {
        icon.classList.remove("animate");
      }, 200);
    });
  });

  //image button logic
  document.querySelectorAll(".IMG").forEach((btn) => {
    const icon = btn.querySelector(".image");

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      icon.classList.add("animate");

      setTimeout(() => {
        icon.classList.remove("animate");
      }, 200);
    });
  });

  //video button logic
  document.querySelectorAll(".VID").forEach((btn) => {
    const icon = btn.querySelector(".video");

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      icon.classList.add("animate");

      setTimeout(() => {
        icon.classList.remove("animate");
      }, 200);
    });
  });
  //emoji button logic
  document.querySelectorAll(".EMOJI").forEach((btn) => {
    const icon = btn.querySelector(".emo");

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      icon.classList.add("animate");

      setTimeout(() => {
        icon.classList.remove("animate");
      }, 200);
    });
  });


  //enviar comentario
  document.querySelectorAll(".sendto").forEach((btn) =>{
    const icon = btn.querySelector(".send");

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");

      //colocar un animate personalizado
      icon.classList.add("animate2");

      setTimeout(()=>{
        icon.classList.remove("animate2");
      }, 200);

      //hacer que borre el texto del textbox
      const post = btn.closest(".post");
      const input = post.querySelector(".inputs");
      if (input) {
        input.value = "";
      }

    });
  });
  document.querySelectorAll(".upload").forEach((btn) => { const icon = btn.querySelector(".yes");
  btn.addEventListener("click", () => { 
    btn.classList.toggle("active"); icon.classList.add("animate3");
    setTimeout(() => {
      icon.classList.remove("animate3");}, 200);
      

    }); 
 });

  //replico para el comentario

  document.querySelectorAll(".comment-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      const post = btn.closest(".post");
      const icon = btn.querySelector(".comentar");

      // Mostrar el campo de comentario activando la clase en el post
      post.classList.toggle("active");

      // Activar color y animación del ícono
      btn.classList.toggle("active");
      icon.classList.add("animate");

      setTimeout(() => {
        icon.classList.remove("animate");
      }, 200);
    });
  });
});
