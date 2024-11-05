// Creates 256 div elements to make a 16x16 grid

const grid = document.querySelector("#grid");

for (let i = 0; i < 256; i++) {
  const gridSquare = document.createElement('div');

  gridSquare.style.width = "40px";
  gridSquare.style.height = "40px";
  grid.appendChild(gridSquare);

  // Makes a square black on hover

  gridSquare.addEventListener("mouseover", () => {
    gridSquare.style.backgroundColor = "black";
  });

  // Resets the entire grid

  const resetGrid = document.querySelector("#resetGrid");

  resetGrid.addEventListener("click", () =>{
    gridSquare.style.backgroundColor = "white";
  });
}

/*
const changeGridSize = document.querySelector("#changeGridSize");

changeGridSize.addEventListener("click", () => {
    const size = prompt("Enter a value from 1-100:");
    
});
*/