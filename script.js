//Add div to
function addCells(numCells) {
    const myContainer = document.querySelector("#container");

    //Remove all children from container
    while(myContainer.lastElementChild) {
        myContainer.removeChild(myContainer.lastElementChild);
    }

    //create a grid of numCells x numCells
    for(let i = 0; i < numCells; i++) {
        let row = document.createElement('div');
        row.classList.add('sketchRow');
        for (let j = 0; j < numCells; j++) {
            let cell = document.createElement('div');
            cell.classList.add('sketchCell');
            row.append(cell);
        }
        myContainer.append(row);
    }

    //Adds event listener for etch a sketch behavior
    const sketchCells = document.querySelectorAll('.sketchCell');
    sketchCells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            cell.classList.add('sketched');
        });
    });
}

addCells(16);

const slider = document.querySelector('.slider');
const sliderLabel = document.querySelector('.slideLabel')
slider.addEventListener('change', function() {
    let val = this.value;
    sliderLabel.textContent = val;
    let rangeValue = parseInt(this.value);
    addCells(rangeValue);
});