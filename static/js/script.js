// Creates 256 div elements to make a 16x16 grid

const grid = document.querySelector("#grid");

for (let i = 0; i < 256; i++) {
  const gridSquare = document.createElement('div');
  gridSquare.style.width = "40px";
  gridSquare.style.height = "40px";
  gridSquare.textContent = i + 1;
  grid.appendChild(gridSquare);
}