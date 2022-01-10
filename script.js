function setUpGrid(e) {
    grid = document.querySelector('.grid_container')
    populateGrid(grid);
}

function populateGrid(grid, gridRowCount=4) {
    let cellDimension = (1 / gridRowCount) * 100;
    console.log(cellDimension);
    for (let i = 0; i < gridRowCount; i++) {
        for (let j = 0; j < gridRowCount ; j++) {
            gridCell = document.createElement('div')
            gridCell.classList.add("grid_cell")
            gridCell.style.width = `${cellDimension}%`
            gridCell.style.height = `${cellDimension}%`
            gridCell.addEventListener("mouseover", changeGridCellColor)
            grid.appendChild(gridCell)
        }
    }
}

function changeGridCellColor(e) {
    this.style.backgroundColor = "black";
}

function updateGrid(e) {
    grid = document.querySelector('.grid_container')
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    let newGridSize;
    do {
        newGridSize = parseInt(prompt("Please enter a custom grid size (Between 1 and 100):"));
    } while (newGridSize < 1 || newGridSize > 100);

    populateGrid(grid, parseInt(newGridSize));
}

window.addEventListener('load', setUpGrid);

const btn = document.querySelector('button')
btn.addEventListener('click', updateGrid);