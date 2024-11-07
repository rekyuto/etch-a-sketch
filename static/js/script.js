// Creates a new grid

const grid = document.querySelector("#grid");

function createGrid(size){
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++){
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    grid.appendChild(gridSquare);

    // "Draws" on the grid by changing the background color of a gridSquare

    gridSquare.addEventListener("mousedown", () => {
      if (rainbowToggle === true){
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        selection = `rgb(${red}, ${green}, ${blue})`;
      } else if (normalToggle === true){
        selection = "black";
      }

      gridSquare.style.backgroundColor = selection;
    });

    gridSquare.addEventListener("mouseover", () => {gridSquare.style.opacity = "50%";});
    gridSquare.addEventListener("mouseout", () => {gridSquare.style.opacity = "100%";})

    // Allows the user to draw like using a pen tool

    let isDragging = false;
    gridSquare.addEventListener("mousedown", () => {isDragging = true;});
    document.addEventListener("mouseup", () => {isDragging = false;});
    document.addEventListener("mousemove", (event) => {
      if (isDragging && event.target.classList.contains("grid-square")) {
        if (rainbowToggle === true){
          const red = Math.floor(Math.random() * 256);
          const green = Math.floor(Math.random() * 256);
          const blue = Math.floor(Math.random() * 256);

          selection = `rgb(${red}, ${green}, ${blue})`;
        }
        event.target.style.backgroundColor = selection;
      }
    });

    // Clears the entire grid

    const resetGrid = document.querySelector("#resetGrid");
      
    resetGrid.addEventListener("click", () => {
      gridSquare.style.backgroundColor = "white";
    })
  };
};

// Toggles between the normal and rainbow pen

let normalToggle = true;
let rainbowToggle = false;

const rainbowButton = document.querySelector("#rainbowButton");
const normalButton = document.querySelector("#normalButton");

function toggle(){
  rainbowToggle = !rainbowToggle;
  normalToggle = !normalToggle;
}

rainbowButton.addEventListener("click", () => {
toggle();
});
normalButton.addEventListener("click", () => {
  toggle();
});

// Creates a new grid size by promting the user for a value between 4-100

const changeGridSize = document.querySelector("#changeGridSize");

changeGridSize.addEventListener("click", () => {
    const newSize = prompt("Enter a value from 4-100");
    if (newSize && !isNaN(newSize) && newSize >= 4 && newSize <= 100) {
      createGrid(parseInt(newSize));
    } else {
      alert("Invalid value!");
    }
});

// Initializes a 16x16 grid on load

createGrid(16);