// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');


sizePicker.addEventListener("submit", function (event){
    event.preventDefault();
    makeGrid();
});


function makeGrid() {
  const grid = document.getElementById('pixelCanvas');
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
// Create Grid
grid.innerHTML=null; //resets the grid
  for (var v = 0; v < height; v++){
    var row = document.createElement('tr');
    grid.appendChild(row);
    for(var h = 0; h < width; h++){
      var col = document.createElement('td');
      grid.lastChild.appendChild(col);

      //color adding
      col.addEventListener('click', function () {
        let color = colorPicker.value;
        this.style.backgroundColor = color;
      })
    }
  }
}
