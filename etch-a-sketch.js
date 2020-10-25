const etchASketch = document.getElementById("etch-a-sketch");
const minGridSize = 1;
const maxGridSize = 100;
const gridSize = document.querySelector('#grid-size');

window.addEventListener('resize', (event) => {
    updateGapSize();
});

function createNewGrid(columns, rows){
    if((columns > maxGridSize) || (rows > maxGridSize)) return;
    if((columns < minGridSize) || (rows < minGridSize)) return;
    etchASketch.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    etchASketch.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    deleteChildren(etchASketch);
    for(let i = 0; i < columns * rows; ++i){
        const gridItem = document.createElement("div");
        gridItem.classList = ['not-colored'];
        gridItem.addEventListener('mouseover', function(event){
            gridItem.classList = ['colored'];
        });
        etchASketch.appendChild(gridItem);
    }

    updateGapSize();
}

function updateGridSize(){
    createNewGrid(gridSize.value, gridSize.value);
}

function deleteChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function updateGapSize(){
    const sizeToRemoveGap = 19;
    if(etchASketch.firstChild.clientHeight < sizeToRemoveGap){
        etchASketch.style.gap = '0px';
    }else{
        etchASketch.style.gap = '1px';
    }
}

gridSize.setAttribute('min', minGridSize.toString());
gridSize.setAttribute('max', maxGridSize.toString());

createNewGrid(16, 16);