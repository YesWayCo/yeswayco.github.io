const logoColors = ["#bc20a6", "#801ad6", "#0276b5"];
let colorIndex = 0;

function getRandomColor() {
  let chosenColor = logoColors[colorIndex];
  colorIndex++;
  if (colorIndex > logoColors.length - 1) {
    colorIndex = 0;
  }
  return chosenColor;
}

function setRandomColor() {
  const randomColor = getRandomColor();
  document.documentElement.style.setProperty('--random-color', randomColor);
}
