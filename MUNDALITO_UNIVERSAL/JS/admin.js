  //accept button logic
  /*document.querySelectorAll(".accept").forEach((btn) => {
    const icon = btn.querySelector(".yes");

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      icon.classList.add("animate3");

      setTimeout(() => {
        icon.classList.remove("animate3");
      }, 200);
    });
  });

  //reject button logic
   document.querySelectorAll(".reject").forEach((btn) => {
    const icon = btn.querySelector(".no");

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      icon.classList.add("animate4");

      setTimeout(() => {
        icon.classList.remove("animate4");
      }, 200);
    });
  });
*/

document.querySelectorAll(".accept").forEach((btn) => {
  const icon = btn.querySelector(".yes");

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    icon.classList.add("animate3");

    const post = btn.closest(".posts");

    setTimeout(() => {
      icon.classList.remove("animate3");
      post.classList.add("fade-out");

      setTimeout(() => {
        post.style.display = "none"; // o post.remove() si quieres eliminarlo del DOM
      }, 300); // espera a que termine la animación de fade-out
    }, 200); // espera a que termine la animación del ícono
  });
});

document.querySelectorAll(".reject").forEach((btn) => {
  const icon = btn.querySelector(".no");

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    icon.classList.add("animate4");

    const post = btn.closest(".posts");

    setTimeout(() => {
      icon.classList.remove("animate4");
      post.classList.add("fade-out");

      setTimeout(() => {
        post.style.display = "none"; // o post.remove()
      }, 300);
    }, 200);
  });
});