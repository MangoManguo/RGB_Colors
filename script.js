// RGB Colors

// global variables
let redIn = document.getElementById("redBG");
let greenIn = document.getElementById("greenBG");
let blueIn = document.getElementById("blueBG");
let text = document.getElementById("rgbText");
let widthIn = document.getElementById("width");
let heightIn = document.getElementById("height");
// event listeners
redIn.addEventListener("change", preview);
greenIn.addEventListener("change", preview);
blueIn.addEventListener("change", preview);
widthIn.addEventListener("change", changeSize);
heightIn.addEventListener("change", changeSize);
document.getElementById("previewBtn").addEventListener("click", preview);

// function
function preview() {
  // input
  let red = +redIn.value;
  let green = +greenIn.value;
  let blue = +blueIn.value;
  let display = document.getElementById("display");

  // constrain colors 0 - 255
  if (red < 0) {
    red = 0;
    redIn.value = 0;
  } else if (red > 255) {
    red = 255;
    redIn.value = 255;
  }

  if (green < 0) {
    green = 0;
    greenIn.value = 0;
  } else if (green > 255) {
    green = 255;
    greenIn.value = 255;
  }

  if (blue < 0) {
    blue = 0;
    blueIn.value = 0;
  } else if (blue > 255) {
    blue = 255;
    blueIn.value = 255;
  }

  let rgbString = `rgb(${red}, ${green}, ${blue})`;
  display.style.backgroundColor = rgbString;
  text.innerHTML = rgbString;
}

function changeSize() {
  let width = +widthIn.value;
  let height = heightIn.value;
  let display = document.getElementById("display");

  // constrain width 50 - 400 + height 50 - 200
  if (width > 400) {
    width = 400;
    widthIn.value = 400;
  } else if (width < 50) {
    width = 50;
    widthIn.value = 50;
  }

  if (height > 200) {
    height = 200;
    heightIn.value = 200;
  } else if (height < 50) {
    height = 50;
    heightIn = 50;
  }

  display.style.width = `${width}px`;
  display.style.height = `${height}px`;
}
