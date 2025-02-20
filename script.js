const mainDiv = document.querySelector('.mainDiv');
const clearSketchpad = document.querySelector('#clear');
const resizeSketchpad = document.querySelector('#resize');
clearSketchpad.addEventListener('click', resetSketch);

resizeSketchpad.addEventListener('click', () => {
    let gridSize = 0;
    do {
        gridSize = Number.parseInt(prompt("Enter grid size (1-100): "));
    } while (gridSize > 100 || gridSize < 1);

    createSketchPad(gridSize);
});


function calculatePixelWidth(gridSize, gridWidth = 800) {

    return (gridWidth - 2 * gridSize - 2) / gridSize;

}

function resetSketch() {

    const divs = document.querySelectorAll('.colorHover');

    divs.forEach(element => {

        element.classList.remove('colorHover');

    });
}


function createSketchPad(gridSize = 64) {

    const grid = document.querySelectorAll('.mainDiv > div');
    if (grid) {
        grid.forEach(element => {
            element.remove();
        });
    }

    for (let i = 0; i < gridSize; i++) {

        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');

            div.style.width = `${calculatePixelWidth(gridSize)}px`;

            div.addEventListener('mouseover', (e) => {
                e.target.classList.add('colorHover');
            })

            mainDiv.appendChild(div);
        }
    }
}

createSketchPad();