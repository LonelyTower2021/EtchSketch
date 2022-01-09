function setUpGrid(e) {
    grid = document.querySelector('.grid_container')
    populateGrid(grid);
}

function populateGrid(grid) {
    for (let i = 0; i < 16; i++) {
        for (let i = 0; i < 16 ; i++) {
            gridCell = document.createElement('div')
            gridCell.classList.add("grid_cell")
            gridCell.addEventListener("mouseover", changeGridCellColor)
            grid.appendChild(gridCell)
        }
    }
}

function changeGridCellColor(e) {
    this.setAttribute('style', 'background-color: black');
}

function clearGrid(e) {
    grid = document.querySelector('.grid_container')
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    populateGrid(grid);
}

window.addEventListener('load', setUpGrid);

const btn = document.querySelector('button')
btn.addEventListener('click', clearGrid);