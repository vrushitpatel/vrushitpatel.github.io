"use-strict";

var skillsSide = document.querySelectorAll(".skillsSide");
var threeSlide = document.querySelectorAll("#three");
var skillsType1 = document.querySelector(".skillsType1");
var skillsType2 = document.querySelector(".skillsType2");

var skillDots = document.querySelectorAll(".skillDot");
var dotLefts = [15, 10, 30, 18, 5, 29, 25, 14, 81, 86, 72, 86, 72, 68, 80];

var flag = 1;
var flag2 = 1;

function skillOn() {
  threeSlide[0].addEventListener("mousemove", function (e) {
    // document.removeEventListener("mousemove", outerCursor);

    var x = e.clientX;
    var y = e.clientY;

    var width = threeSlide[0].clientWidth;

    var min = width * 0.35;
    var mid = width * 0.5;
    var max = width * 0.65;

    var delta = width * 0.15;
    var delta2 = 360 / 2;
    var delta3 = Math.round((min - 3) / 3);

    if (x >= max - delta2 + 100 && flag == 1) {
      for (let i = 0; i < 8; i++) {
        skillDots[i].style.left = dotLefts[i] - 40 + "%";
      }
      flag = 0;
    } else if (x <= max - delta2 + 100 && flag == 0) {
      for (let i = 0; i < 8; i++) {
        skillDots[i].style.left = dotLefts[i] + "%";
      }
      flag = 1;
    }
    if (x >= min + delta3 - 100 && flag2 == 0) {
      for (let i = 8; i < 15; i++) {
        skillDots[i].style.left = dotLefts[i] + "%";
      }
      flag2 = 1;
    } else if (x <= min + delta3 - 100 && flag2 == 1) {
      for (let i = 8; i < 15; i++) {
        skillDots[i].style.left = dotLefts[i] + 40 + "%";
      }
      flag2 = 0;
    }

    // if (x >= max - delta2 + 100 && flag == 1) {
    //   document.querySelectorAll(".skillDot").forEach(function (dot) {
    //     var side = dot.getAttribute("data-side");
    //     if (side == 1)
    //       dot.style.left = dot.computedStyleMap().get("left").value - 60 + "%";
    //   });

    //   flag = 0;
    // } else if (x <= max - delta2 + 100 && flag == 0) {
    //   document.querySelectorAll(".skillDot").forEach(function (dot) {
    //     var side = dot.getAttribute("data-side");
    //     if (side == 1)
    //       dot.style.left = dot.computedStyleMap().get("left").value + 60 + "%";
    //   });
    //   flag = 1;
    // }

    // if (x >= min + delta3 - 100 && flag2 == 0) {
    //   document.querySelectorAll(".skillDot").forEach(function (dot) {
    //     var side = dot.getAttribute("data-side");
    //     if (side == 2)
    //       dot.style.left = dot.computedStyleMap().get("left").value - 60 + "%";
    //   });

    //   flag2 = 1;
    // } else if (x <= min + delta3 - 100 && flag2 == 1) {
    //   document.querySelectorAll(".skillDot").forEach(function (dot) {
    //     var side = dot.getAttribute("data-side");
    //     if (side == 2)
    //       dot.style.left = dot.computedStyleMap().get("left").value + 60 + "%";
    //   });
    //   flag2 = 0;
    // }

    // console.log(skillDot.computedStyleMap().get("left").value);

    // ------------------------------------------------------------

    if (min <= x && mid >= x) {
      skillsSide[0].style.width = mid + (mid - x) + "px";

      // ----------------------------------

      skillsType1.style.left = 0 + "px";

      // ----------------------------------

      skillsType2.style.left = mid + (mid - x) - 360 + "px";

      if (min <= x && min + delta2 >= x) {
        skillsType2.style.left =
          mid + (mid - x) - 360 + (min + delta2 - x) * 2 + "px";
      }
    }

    // ------------------------------------------------------------

    if (min >= x) {
      skillsSide[0].style.width = mid + delta + "px";

      skillsType1.style.left = 0 + "px";

      skillsType2.style.left =
        mid + (mid - min) - 360 + (min + delta2 - min) * 2 + "px";
    }

    // ------------------------------------------------------------

    if (mid <= x && max >= x) {
      skillsSide[0].style.width = mid - (x - mid) + "px";

      // ----------------------------------

      skillsType1.style.left = 0 + "px";

      if (max - delta3 <= x && max >= x) {
        skillsType1.style.left = (x - (max - delta3)) * 3 + "px";
      }

      // ----------------------------------

      skillsType2.style.left = mid + (mid - x) - 360 + "px";
    }

    // ------------------------------------------------------------

    if (max <= x) {
      skillsSide[0].style.width = mid - delta + "px";

      skillsType1.style.left = (max - (max - delta3)) * 3 + "px";

      skillsType2.style.left = mid + (mid - x) - 360 + "px";
    }
  });
}

threeSlide[0].addEventListener("mousemove", function (e) {
  document.querySelectorAll(".skillDot").forEach(function (move) {
    var width = threeSlide[0].clientWidth;

    var min = width * 0.35;
    var mid = width * 0.5;
    var max = width * 0.65;

    var side = move.getAttribute("data-side");
    var x = e.clientX;

    if (x <= mid && side != 2) {
      var parallax = move.getAttribute("data-parallax");
    } else if (x >= mid && side == 2) {
      var parallax = move.getAttribute("data-parallax");
    } else {
      var parallax = move.getAttribute("data-parallax") / 2;
    }

    // move.style.left = move.computedStyleMap().get("left").value - 60 + "%";

    // if (side == 1 && x >= max) {
    //   move.style.left = move.computedStyleMap().get("left").value - 60 + "%";
    // } else if (side == 1 && x <= max) {
    //   move.style.left = move.computedStyleMap().get("left").value + 60 + "%";
    // }

    x = (e.clientX * parallax) / 75;
    var y = (e.clientY * (parallax / 1.5)) / 75;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
});
