"use-strict";

var cursor = document.querySelector(".cursor");
var cursorInner = document.querySelector(".cursor-inner");

document.addEventListener("mousemove", function (e) {
  // Gives Horizontal And Vertical Coordinates Of The Mouse When Mouse Event Was Occured.
  var x = e.clientX;
  var y = e.clientY;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

document.addEventListener("mousemove", function (e) {
  // Gives Horizontal And Vertical Coordinates Of The Mouse When Mouse Event Was Occured.
  var x = e.clientX;
  var y = e.clientY;

  cursorInner.style.left = x + "px";
  cursorInner.style.top = y + "px";
});

document.addEventListener("mousedown", function (e) {
  cursorInner.classList.add("click"); // CSS Class
});

document.addEventListener("mouseup", function (e) {
  cursorInner.classList.remove("click"); // CSS Class
});
