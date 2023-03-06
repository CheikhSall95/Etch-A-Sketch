function createGrid(gridLength) {
    const container = document.querySelector('#grid-container'); // Get the container that will contain the divs
    for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < gridLength; j++){
            const divGrid = document.createElement('div');
            divGrid.classList.add('divGrid');
            divGrid.style.width  = `${320/gridLength}px`;
            divGrid.style.height = `${320/gridLength}px`;
            container.appendChild(divGrid)
        }
    
    }
    const divs = document.querySelectorAll('.divGrid');
    const clear = document.querySelector('.clearButton');
    const color = document.querySelector('#colorpicker');
    let colorValue = color.value;
    color.addEventListener('mouseover', () => {
        colorValue = color.value;;

    });
    
    divs.forEach((div) => {
   
       // and for each one we add a 'mouseover' listener
       div.addEventListener('mouseover', () => {
           div.style.background = colorValue;
            
       });

       clear.addEventListener('click', () => {
        div.style.background = "white";
  
        });
     });

}

createGrid(16);
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


