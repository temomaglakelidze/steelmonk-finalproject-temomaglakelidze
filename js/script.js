function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");

  var header = document.getElementById("header");
  header.classList.toggle("active-header");

  var body = document.getElementById("body");
  body.classList.toggle("overflow-hidden");
}
document.querySelector(".hamburger").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("is-active");
});
