dots = ["#oneDot", "#twoDot", "#threeDot", "#fourDot", "#fiveDot", "#sixDot"];

var slide1Heading = document.getElementById("slide1Heading");
var slide1SVG = document.getElementById("slide1SVG");
var typer = document.getElementById("typer");
var slide1Para = document.getElementById("slide1Para");

var slide2Heading = document.getElementById("slide2Heading");
var slide2Para = document.getElementById("slide2Para");
var slide2Btn = document.getElementById("slide2Btn");
var slide2Img = document.getElementById("slide2Img");

var slide4Heading = document.getElementById("slide4Heading");
var slide4Para = document.getElementById("slide4Para");
var slide4Btn = document.getElementById("slide4Btn");
var slide4Img1 = document.getElementById("slide4Img1");
var slide4Img2 = document.getElementById("slide4Img2");
var slide4Img3 = document.getElementById("slide4Img3");
var slide4Img4 = document.getElementById("slide4Img4");

var slide5Heading = document.getElementById("slide5Heading");
var slide5Box1 = document.getElementById("slide5Box1");
var slide5Box2 = document.getElementById("slide5Box2");
var slide5Box3 = document.getElementById("slide5Box3");

var slide6Heading = document.getElementById("slide6Heading");
var slide6Para = document.getElementById("slide6Para");
var slide6Details = document.getElementById("slide6Details");
var name1 = document.getElementById("name1");
var email1 = document.getElementById("email1");
var msg1 = document.getElementById("msg1");
var submit1 = document.getElementById("submit1");

function removeall() {
  slide1Heading.classList.remove("fadingUp");
  slide1Heading.style.opacity = "0";
  slide1SVG.classList.remove("fadingUp");
  slide1SVG.style.opacity = "0";
  typer.classList.remove("fadingUp");
  typer.style.opacity = "0";
  slide1Para.classList.remove("fadingUp");
  slide1Para.style.opacity = "0";

  slide2Heading.classList.remove("fadingUp");
  slide2Heading.style.opacity = "0";
  slide2Para.classList.remove("fadingUp");
  slide2Para.style.opacity = "0";
  slide2Btn.classList.remove("fadingUp");
  slide2Btn.style.opacity = "0";
  slide2Img.classList.remove("fadingOut");
  slide2Img.style.opacity = "0";

  slide4Heading.classList.remove("fadingUp");
  slide4Heading.style.opacity = "0";
  slide4Para.classList.remove("fadingUp");
  slide4Para.style.opacity = "0";
  slide4Btn.classList.remove("fadingUp");
  slide4Btn.style.opacity = "0";
  slide4Img1.classList.remove("fadingInSlide1");
  slide4Img1.style.opacity = "0";
  slide4Img2.classList.remove("fadingInSlide2");
  slide4Img2.style.opacity = "0";
  slide4Img3.classList.remove("fadingInSlide3");
  slide4Img3.style.opacity = "0";
  slide4Img4.classList.remove("fadingInSlide4");
  slide4Img4.style.opacity = "0";

  slide5Heading.classList.remove("fadingUp");
  slide5Heading.style.opacity = "0";
  slide5Box1.classList.remove("fadingUp");
  slide5Box1.style.opacity = "0";
  slide5Box2.classList.remove("fadingUp");
  slide5Box2.style.opacity = "0";
  slide5Box3.classList.remove("fadingUp");
  slide5Box3.style.opacity = "0";

  slide6Heading.classList.remove("fadingUp");
  slide6Heading.style.opacity = "0";
  slide6Para.classList.remove("fadingUp");
  slide6Para.style.opacity = "0";
  slide6Details.classList.remove("fadingUp");
  slide6Details.style.opacity = "0";
  name1.classList.remove("fadingUp");
  name1.style.opacity = "0";
  email1.classList.remove("fadingUp");
  email1.style.opacity = "0";
  msg1.classList.remove("fadingUp");
  msg1.style.opacity = "0";
  submit1.classList.remove("fadingUp");
  submit1.style.opacity = "0";
}

function verticalNav(selected) {
  let dots1 = document.getElementsByClassName("dotsVN");

  for (let i = 0; i < dots1.length; i++) {
    dots1[i].classList.remove("active");
  }
  // console.log(dots.indexOf("#" + selected.id));
  index = dots.indexOf("#" + selected.id);
  if (index == 0) {
    removeall();
    oneSlide();
  } else if (index == 1) {
    removeall();
    twoSlide();
  } else if (index == 2) {
    removeall();
  } else if (index == 3) {
    removeall();
    fourSlide();
  } else if (index == 4) {
    removeall();
    fiveSlide();
  } else if (index == 5) {
    removeall();
    sixSlide();
  }
  selected.classList.add("active");
}

let dotsVN = document.querySelectorAll(".dotsVN");
let mainSlide = document.querySelectorAll("#mainSlide");

dots = ["#oneDot", "#twoDot", "#threeDot", "#fourDot", "#fiveDot", "#sixDot"];

function oneSlide() {
  slide1Heading.classList.add("fadingUp");
  slide1Heading.style.animationDelay = "0.5s";
  slide1SVG.classList.add("fadingUp");
  slide1SVG.style.animationDelay = "0.8s";
  typer.classList.add("fadingUp");
  typer.style.animationDelay = "1.2s";
  slide1Para.classList.add("fadingUp");
  slide1Para.style.animationDelay = "1.5s";
}

function twoSlide() {
  slide2Heading.classList.add("fadingUp");
  slide2Heading.style.animationDelay = "0.3s";
  slide2Para.classList.add("fadingUp");
  slide2Para.style.animationDelay = "1s";
  slide2Btn.classList.add("fadingUp");
  slide2Btn.style.animationDelay = "1.5s";
  slide2Img.classList.add("fadingOut");
  slide2Img.style.animationDelay = "0.7s";
}

function fourSlide() {
  slide4Heading.classList.add("fadingUp");
  slide4Heading.style.animationDelay = "0.3s";
  slide4Para.classList.add("fadingUp");
  slide4Para.style.animationDelay = "0.8s";
  slide4Btn.classList.add("fadingUp");
  slide4Btn.style.animationDelay = "1.2s";
  slide4Img1.classList.add("fadingInSlide1");
  slide4Img1.style.animationDelay = "1.5s";
  slide4Img2.classList.add("fadingInSlide2");
  slide4Img2.style.animationDelay = "2.5s";
  slide4Img3.classList.add("fadingInSlide3");
  slide4Img3.style.animationDelay = "3.5s";
  slide4Img4.classList.add("fadingInSlide4");
  slide4Img4.style.animationDelay = "4.5s";
}

function fiveSlide() {
  slide5Heading.classList.add("fadingUp");
  slide5Heading.style.animationDelay = "0.3s";
  slide5Box1.classList.add("fadingUp");
  slide5Box1.style.animationDelay = "1s";
  slide5Box2.classList.add("fadingUp");
  slide5Box2.style.animationDelay = "1.2s";
  slide5Box3.classList.add("fadingUp");
  slide5Box3.style.animationDelay = "1.4s";
}

function sixSlide() {
  slide6Heading.classList.add("fadingUp");
  slide6Heading.style.animationDelay = ".2s";
  slide6Para.classList.add("fadingUp");
  slide6Para.style.animationDelay = "0.5s";
  slide6Details.classList.add("fadingUp");
  slide6Details.style.animationDelay = "0.7s";
  name1.classList.add("fadingUp");
  name1.style.animationDelay = "0.5s";
  email1.classList.add("fadingUp");
  email1.style.animationDelay = "0.8s";
  msg1.classList.add("fadingUp");
  msg1.style.animationDelay = "1.1s";
  submit1.classList.add("fadingUp");
  submit1.style.animationDelay = "1.4s";
}

function nextSlide() {
  var currentDots = document.querySelectorAll(".dotsVN");

  for (index = 0; index < currentDots.length; index++) {
    if (currentDots[index].classList.length == 2) {
      current = index;
      break;
    }
  }

  temp = index + 1;
  if (temp == dots.length) {
    return;
  }

  newDot = document.querySelector(dots[temp]);
  newDot.click();

  // console.log(document.querySelector("#two").offsetTop);
  // console.log(document.querySelector("#mainSlide").offsetTop);
}

function prevSlide() {
  var currentDots = document.querySelectorAll(".dotsVN");

  for (index = 0; index < currentDots.length; index++) {
    if (currentDots[index].classList.length == 2) {
      current = index;
      break;
    }
  }

  temp = index - 1;
  if (temp == -1) {
    return;
  }

  newDot = document.querySelector(dots[temp]);
  newDot.click();
}
