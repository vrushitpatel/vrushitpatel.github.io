// **********************************
// *** Typing Style on Home Slide ***
// **********************************

var speed = 200;
var i = 0;
// Space Important
var txt1 = " Software Developer.";
var txt2 = " Website Developer.";

function typeWriterF1() {
  if (i < txt1.length) {
    document.getElementById("typer").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriterF1, speed);
  } else {
    setTimeout(typeWriterR1, speed * 8);
  }
}

function typeWriterR1() {
  if (i >= 0) {
    let rmv = document.getElementById("typer").innerHTML;
    document.getElementById("typer").innerHTML = ">>" + rmv.substr(8, i);
    i--;
    setTimeout(typeWriterR1, speed);
  } else {
    setTimeout(typeWriterF2, speed);
  }
}

function typeWriterF2() {
  if (i < txt2.length) {
    document.getElementById("typer").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriterF2, speed);
  } else {
    setTimeout(typeWriterR2, speed * 8);
  }
}

function typeWriterR2() {
  if (i >= 0) {
    let rmv = document.getElementById("typer").innerHTML;
    document.getElementById("typer").innerHTML = ">>" + rmv.substr(8, i);
    i--;
    setTimeout(typeWriterR2, speed);
  } else {
    setTimeout(typeWriterF1, speed);
  }
}

// **********************************
// ******* SVG Letter Length ********
// **********************************

// const logo = document.querySelectorAll(
//   "#one > div > div.intro > div > div > svg > path"
// );

// for (let i = 0; i < logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }

// **********************************
// ******** Parallax Effect *********
// **********************************

document.addEventListener("mousemove", function (e) {
  document.querySelectorAll(".floatingObj").forEach(function (move) {
    var parallax = move.getAttribute("data-parallax");
    var x = (e.clientX * parallax) / 75;
    var y = (e.clientY * (parallax / 1.5)) / 75;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
});

document.addEventListener("mousemove", function (e) {
  document.querySelectorAll(".sideParallax").forEach(function (move) {
    var parallax = move.getAttribute("data-parallax");
    var x = (e.clientX * parallax) / 75;

    move.style.transform = "translateX(" + x + "px)";
  });
});

// **********************************
// ********* Function Calls *********
// **********************************

setTimeout(typeWriterF1, 2000); // Typing Style on Home Slide
