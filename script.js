const navbarEl = document.querySelector('.navbar');

const paragraphEl = document.querySelector(".paragraph");

console.log(navbarEl.offsetHeight);

console.log(paragraphEl.offsetTop);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    paragraphEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});