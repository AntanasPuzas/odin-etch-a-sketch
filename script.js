const grid = document.querySelector("#grid");
const gridSize = 960;

function generateTable(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        const divRow = document.createElement("div");
        divRow.id = `row-${i}`;
        divRow.classList.add("row");
        for (let j = 0; j < numberOfSquares; j++) {
            const square = document.createElement("div");
            square.id = `square-${i}-${j}`;
            square.classList.add("square");
            const squareSize = gridSize / numberOfSquares;
            square.style.cssText = `width: ${squareSize}px; height: 
            ${squareSize}px`;
            divRow.appendChild(square);
        }
        grid.appendChild(divRow);
    }
}

generateTable(20);

const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("mouseover", () =>
    square.classList.add("squareMouseover")));