function setUpGrid(e) {
    grid = document.querySelector('.grid_container')
    for (let i = 0; i < 16; i++) {
        for (let i = 0; i < 16 ; i++) {
            gridCell = document.createElement('div')
            gridCell.classList.add("grid_cell")
            grid.appendChild(gridCell)
        }
    }
}

window.addEventListener('load', setUpGrid);