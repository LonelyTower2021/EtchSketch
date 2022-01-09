function setUpGrid(e) {
    grid = document.querySelector('.grid_container')
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

window.addEventListener('load', setUpGrid);