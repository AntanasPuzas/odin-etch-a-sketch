const grid = document.querySelector("#grid");
const buttonGenerateNew = document.querySelector("#generate-grid");

buttonGenerateNew.addEventListener("click", () => {
    let userInput = prompt("Input a number between 1 and 100");
    if (isNaN(userInput)) {
        alert("Not a number");
        return;
    } else if (userInput > 100) {
        alert("Number too high")
        return;
    } else if (userInput < 0) {
        alert("Must be a positive number")
        return;
    } else {
        removeRows();
        generateTable(userInput);
    }
});

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

function removeRows() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.parentElement.removeChild(row));
}


generateTable(20);

const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("mouseover", () =>
    square.classList.add("squareMouseover")));