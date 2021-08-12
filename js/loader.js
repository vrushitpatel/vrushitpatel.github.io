function loader() {
  var vertNav = document.getElementById("vert-nav");
  setTimeout(function () {
    vertNav.style.opacity = 1;
  }, 1500);
}

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preload");
  preloader.classList.add("preload-finish");
});
