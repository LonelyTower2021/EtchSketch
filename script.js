function setUpGrid(e) {
    grid = document.querySelector('.grid_container')
    populateGrid(grid);
}

function populateGrid(grid, gridRowCount=4) {
    let cellDimension = (1 / gridRowCount) * 100;
    let borderStyle = "solid black 1px";
    console.log(cellDimension);
    for (let i = 0; i < gridRowCount; i++) {
        for (let j = 0; j < gridRowCount ; j++) {
            let gridCell = document.createElement('div')
            gridCell.classList.add("grid_cell")
            gridCell.style.width = `${cellDimension}%`
            gridCell.style.height = `${cellDimension}%`
            gridCell.style.borderTop = borderStyle;
            gridCell.style.borderLeft = borderStyle;
            gridCell.style.background = "rgb(255, 255, 255)";
            if (j === (gridRowCount - 1)) {gridCell.style.borderRight = borderStyle};
            if (i === (gridRowCount - 1)) {gridCell.style.borderBottom = borderStyle};
            gridCell.addEventListener("mouseover", changeGridCellColor)
            grid.appendChild(gridCell)
        }
    }
}

function changeGridCellColor(e) {
    backgroundColor = this.style.backgroundColor;
    console.log(backgroundColor);
    let red = getRandomNumber(255);
    let green = getRandomNumber(255);
    let blue = getRandomNumber(255);
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function getRandomNumber(maxValue) {
    return Math.floor(Math.random() * maxValue);
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