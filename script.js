//Add div to
const myContainer = document.querySelector("#container");
for(let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.add('sketchRow');
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement('div');
        cell.classList.add('sketchCell');
        row.append(cell);
    }
    myContainer.append(row);
}

const sketchCells = document.querySelectorAll('.sketchCell');
sketchCells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        cell.classList.add('sketched');
    });
});

