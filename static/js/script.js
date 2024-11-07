const grid = document.querySelector("#grid");

function createGrid(size){
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++){
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    grid.appendChild(gridSquare);

    gridSquare.addEventListener("mouseover", () =>{
      gridSquare.style.backgroundColor = "black";
    });

    const resetGrid = document.querySelector("#resetGrid");
      
    resetGrid.addEventListener("click", () => {
      gridSquare.style.backgroundColor = "white";
    })
  };
};

const changeGridSize = document.querySelector("#changeGridSize");

changeGridSize.addEventListener("click", () => {
    const newSize = prompt("Enter a value from 4-100");
    if (newSize && !isNaN(newSize) && newSize >= 4 && newSize <= 100) {
      createGrid(parseInt(newSize));
    } else {
      alert("Invalid value!");
    }
});

createGrid(16);