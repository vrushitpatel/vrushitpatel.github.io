window.onscroll = function () {
  const backTop = document.getElementById("backTop");
  const vartLI = document.getElementsByClassName("vertLI");
  const underline = document.getElementsByClassName("underline");
  const social = document.getElementById("social");
  const socialSpan = social.getElementsByTagName("span");
  const iSpan = social.getElementsByTagName("i");
  const part2 = document.getElementById("partTwo");

  let top = window.scrollY;
  
  
  // ---------------------------
  if (top >= 1000) {
    backTop.style.display = "inline-block";
    backTop.classList.remove("goOut");
    backTop.classList.add("comeIn");
  } else if (top < 1000) {
    backTop.classList.remove("comeIn");
    backTop.classList.add("goOut");

    setTimeout(function() {
      backTop.style.display = "none";
    }, 250);
  }

  
  // ---------------------------
  if(part2.offsetTop - top <= 586 && (part2.offsetTop + part2.offsetHeight) - top >= 590) {
    vartLI[4].style.color = "#000000";
    underline[4].style.backgroundColor = "#000000";
  }
  else {
    vartLI[4].style.color = "#ffffff";
    underline[4].style.backgroundColor = "#ffffff";
  }
  if(part2.offsetTop - top <= 486 && (part2.offsetTop + part2.offsetHeight) - top >= 490) {
    vartLI[3].style.color = "#000000";
    underline[3].style.backgroundColor = "#000000";
  }
  else {
    vartLI[3].style.color = "#ffffff";
    underline[3].style.backgroundColor = "#ffffff";
  }
  if(part2.offsetTop - top <= 386 && (part2.offsetTop + part2.offsetHeight) - top >= 390) {
    vartLI[2].style.color = "#000000";
    underline[2].style.backgroundColor = "#000000";
  }
  else {
    vartLI[2].style.color = "#ffffff";
    underline[2].style.backgroundColor = "#ffffff";
  }
  if(part2.offsetTop - top <= 286 && (part2.offsetTop + part2.offsetHeight) - top >= 290) {
    vartLI[1].style.color = "#000000";
    underline[1].style.backgroundColor = "#000000";
  }
  else {
    vartLI[1].style.color = "#ffffff";
    underline[1].style.backgroundColor = "#ffffff";
  }
  if(part2.offsetTop - top <= 186 && (part2.offsetTop + part2.offsetHeight) - top >= 190) {
    vartLI[0].style.color = "#000000";
    underline[0].style.backgroundColor = "#000000";
  }
  else {
    vartLI[0].style.color = "#ffffff";
    underline[0].style.backgroundColor = "#ffffff";
  }

  // ---------------------------

  if(part2.offsetTop - top <= 100 && (part2.offsetTop + part2.offsetHeight) - top >= 50) {
    vartLI[5].style.color = "#000000";
    underline[5].style.backgroundColor = "#000000";
    vartLI[6].style.color = "#000000";
    underline[6].style.backgroundColor = "#000000";
    vartLI[7].style.color = "#000000";
    underline[7].style.backgroundColor = "#000000";
    socialSpan[0].style.backgroundColor = "#000000";
    socialSpan[1].style.backgroundColor = "#000000";
    socialSpan[2].style.backgroundColor = "#000000";
    socialSpan[3].style.backgroundColor = "#000000";
    socialSpan[4].style.backgroundColor = "#000000";
    socialSpan[5].style.backgroundColor = "#000000";
    socialSpan[6].style.backgroundColor = "#000000";
    socialSpan[7].style.backgroundColor = "#000000";
    socialSpan[8].style.backgroundColor = "#000000";
    socialSpan[9].style.backgroundColor = "#000000";
    socialSpan[10].style.backgroundColor = "#000000";
    socialSpan[11].style.backgroundColor = "#000000";
    iSpan[0].style.color = "#000000";
    iSpan[1].style.color = "#000000";
    iSpan[2].style.color = "#000000";
  }
  else {
    vartLI[5].style.color = "#ffffff";
    underline[5].style.backgroundColor = "#ffffff";
    vartLI[6].style.color = "#ffffff";
    underline[6].style.backgroundColor = "#ffffff";
    vartLI[7].style.color = "#ffffff";
    underline[7].style.backgroundColor = "#ffffff";
    socialSpan[0].style.backgroundColor = "#ffffff";
    socialSpan[1].style.backgroundColor = "#ffffff";
    socialSpan[2].style.backgroundColor = "#ffffff";
    socialSpan[3].style.backgroundColor = "#ffffff";
    socialSpan[4].style.backgroundColor = "#ffffff";
    socialSpan[5].style.backgroundColor = "#ffffff";
    socialSpan[6].style.backgroundColor = "#ffffff";
    socialSpan[7].style.backgroundColor = "#ffffff";
    socialSpan[8].style.backgroundColor = "#ffffff";
    socialSpan[9].style.backgroundColor = "#ffffff";
    socialSpan[10].style.backgroundColor = "#ffffff";
    socialSpan[11].style.backgroundColor = "#ffffff";
    iSpan[0].style.color = "#0175f6";
    iSpan[1].style.color = "#0175f6";
    iSpan[2].style.color = "#0175f6";
  }

  // ---------------------------

  const innerBar = document.getElementById("innerBar");
  const about = document.getElementById("about");
  const unique = document.getElementById("unique");
  const conclusion = part2.offsetTop + part2.offsetHeight;

  if (conclusion - top <= 250){
    innerBar.style.height = "422px";
  }
  else if (part2.offsetTop - top <= 250) {
    innerBar.style.height = "335px";
  }
  else if (unique.offsetTop - top <= -400) {
    innerBar.style.height = "215px";  
  }
  else if (about.offsetTop - top <= -400) {
    innerBar.style.height = "120px";
  }
  else {
    innerBar.style.height = "40px";
  }


  

};