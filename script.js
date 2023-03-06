function createGrid(gridLength) { // Function that will be called to create the grid
    const container = document.querySelector('#grid-container'); // Get the container that will contain the divs
    for (let i = 0; i < gridLength; i++) { //Create the divs
        for (let j = 0; j < gridLength; j++){
            const divGrid = document.createElement('div');
            divGrid.classList.add('divGrid');
            divGrid.style.width  = `${320/gridLength}px`;
            divGrid.style.height = `${320/gridLength}px`;
            container.appendChild(divGrid)
        }
    
    }
    // Add EventListerners in the function to mange the grid
    const divs = document.querySelectorAll('.divGrid');
    const clear = document.querySelector('.clearButton');
    const color = document.querySelector('#colorpicker');
    const erase = document.querySelector('.erase');
    let colorValue = color.value;
    color.addEventListener('input', () => {
        colorValue = color.value;;
        // change the color as per color's input
    });
    
    divs.forEach((div) => {
        colorValue = color.value;;
       
       div.addEventListener('mouseover', () => {
           div.style.background = colorValue;
           // loop over the divs and change color if the mouse touches a div
       });

       clear.addEventListener('click', () => {
        div.style.background = "white";
        // loop over the divs and change color to white if the mouse touches a div
        });

        erase.addEventListener('click', () => {
            colorValue = "white";
            // loop over the divs and change color to white to all divs
        });
     });

}

createGrid(16); // initialize the grid with a size of 16
let slider = document.getElementById("gridRange");
let output = document.getElementById("value");
output.textContent = slider.value;

slider.oninput = function() {
  output.textContent = this.value + "  X " + this.value ;
}
let gridLength = slider.value;

slider.addEventListener('mouseup', function() {
    const container = document.querySelector('#grid-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    createGrid(slider.value);
});


