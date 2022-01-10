const GRID_RGB_DICT = new Map();

function setUpGrid(e) {
    grid = document.querySelector('.grid_container')
    populateGrid(grid);
}

function populateGrid(grid, gridRowCount=4) {
    let cellDimension = (1 / gridRowCount) * 100;
    let borderStyle = "solid black 1px";
    console.log(cellDimension);
    for (let row = 0; row < gridRowCount; row++) {
        for (let column = 0; column < gridRowCount ; column++) {
            let gridCell = document.createElement('div')
            gridCell.classList.add("grid_cell")
            gridCell.classList.add(`${row}_${column}`);
            GRID_RGB_DICT.set(`${row}_${column}`, [0,0,0]);
            gridCell.style.width = `${cellDimension}%`
            gridCell.style.height = `${cellDimension}%`
            gridCell.style.borderTop = borderStyle;
            gridCell.style.borderLeft = borderStyle;
            gridCell.style.background = "rgb(255, 255, 255)";
            if (column === (gridRowCount - 1)) {gridCell.style.borderRight = borderStyle};
            if (row === (gridRowCount - 1)) {gridCell.style.borderBottom = borderStyle};
            gridCell.addEventListener("mouseover", changeGridCellColor)
            grid.appendChild(gridCell)
        }
    }
}

function changeGridCellColor(e) {
    const RED = 0;
    const GREEN = 1;
    const BLUE = 2;

    let backgroundColor = this.style.backgroundColor;
    let cellID = this.classList[1];
    let rgbArray = GRID_RGB_DICT.get(cellID);

    if (backgroundColor === "rgb(0, 0, 0)") {
        return;
    } else if (backgroundColor === "rgb(255, 255, 255)") {
        let red = getRandomNumber(255);
        let green = getRandomNumber(255);
        let blue = getRandomNumber(255);
        rgbArray[RED] = Math.ceil(red / 10);
        rgbArray[GREEN] = Math.ceil(green / 10);
        rgbArray[BLUE] = Math.ceil(blue / 10);
        this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
        let rgbCSV = backgroundColor.slice(4, -1);
        let rgbStrArray = rgbCSV.split(', ');
        let rgbIntArray = rgbStrArray.map(Number);
        rgbIntArray[RED] = rgbIntArray[RED] - rgbArray[RED]
        rgbIntArray[GREEN] = rgbIntArray[GREEN] - rgbArray[GREEN]
        rgbIntArray[BLUE] = rgbIntArray[BLUE] - rgbArray[BLUE]
        nonnegative = rgbIntArray.map((colorValue) => {
            if (colorValue < 0) {
                return 0;
            } else {
                return colorValue;
            }
        });
        console.log(nonnegative);
        this.style.backgroundColor = `rgb(${nonnegative[RED]}, ${nonnegative[GREEN]}, ${nonnegative[BLUE]})`
    }
}

function getRandomNumber(maxValue) {
    return Math.floor(Math.random() * maxValue);
}

function updateGrid(e) {
    GRID_RGB_DICT.clear();
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