const container = document.querySelector('#grid-container'); // Get the container that will contain the divs

let gridLength = 16;
for (let i = 0; i < gridLength; i++) {
  for (let j = 0; j < gridLength; j++){
    const divGrid = document.createElement('div');
    divGrid.classList.add('divGrid');
    divGrid.style.width  = "20px";
    divGrid.style.height = "20px";
    container.appendChild(divGrid)
   }
   
 }

 const divs = document.querySelectorAll('.divGrid');

 divs.forEach((div) => {

    // and for each one we add a 'mouseover' listener
    div.addEventListener('mouseover', (e) => {
        div.style.background = "black";
  
    });
  });