const body = document.querySelector("body");

for (let i = 0; i < 16; i++) {
    const divRow = document.createElement("div");
    divRow.id = `row-${i}`;
    divRow.classList.add("row");
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.id = `square-${i}-${j}`;
        square.classList.add("square");

        divRow.appendChild(square);
    }
    body.appendChild(divRow);
}

const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("mouseover", () =>
    square.classList.add("squareHover")));