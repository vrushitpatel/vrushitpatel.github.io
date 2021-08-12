// function loader() {
//   var vertNav = document.getElementById("vert-nav");
//   setTimeout(function () {
//     vertNav.style.opacity = 1;
//   }, 1500);
// }

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preload");
  var vertNav = document.getElementById("vert-nav");
  setTimeout(function () {
    vertNav.style.opacity = 1;
    preloader.classList.add("preload-finish");
  }, 1000);
});
