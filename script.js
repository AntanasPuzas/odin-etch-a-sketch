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
            ${squareSize}px; filter: brightness(1)`;
            divRow.appendChild(square);
        }
        grid.appendChild(divRow);
    }
    bindMouseover();
}

function bindMouseover() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", () => {
        if (square.style.backgroundColor === "") {
            square.style.backgroundColor = `${generateRandomRGBColor()}`;
        } else {
            square.style.filter = `brightness(
                ${(square.style.filter.match((/([0-9]\.*[0-9]*)/))[0]) - 0.1})`;
        }
    }));
}

function removeRows() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.parentElement.removeChild(row));
}

generateTable(16);

function generateRandomNumber() {
    return (Math.round((Math.random() * 255) + 0));
}

function generateRandomRGBColor() {
    return `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
}