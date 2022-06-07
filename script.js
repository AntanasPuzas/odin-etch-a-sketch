const grid = document.querySelector("#grid");

function generateTable(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        const divRow = document.createElement("div");
        divRow.id = `row-${i}`;
        divRow.classList.add("row");
        for (let j = 0; j < numberOfSquares; j++) {
            const square = document.createElement("div");
            square.id = `square-${i}-${j}`;
            square.classList.add("square");
    
            divRow.appendChild(square);
        }
        grid.appendChild(divRow);
    }
}

generateTable(10);

const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("mouseover", () =>
    square.classList.add("squareMouseover")));