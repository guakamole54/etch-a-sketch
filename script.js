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

    const divs = mainDiv.querySelectorAll('div');

    divs.forEach(element => {
        element.classList.remove('colorHover');


    });
}


function createSketchPad(gridSize = 64, randomColor = false) {

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

            if (randomColor) {

                div.addEventListener('mouseover', (e) => {
                    r = Math.floor(Math.random() * 255);
                    g = Math.floor(Math.random() * 255);
                    b = Math.floor(Math.random() * 255);
                    e.target.style['background-color'] = `rgb(${r},${g},${b})`;
                })
            } else {

                div.addEventListener('mouseover', (e) => {
                    e.target.classList.add('colorHover');
                })
            }

            mainDiv.appendChild(div);
        }
    }
}

createSketchPad(gridSize = 16, randomColor = false);