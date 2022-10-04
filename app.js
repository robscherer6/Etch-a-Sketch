let container = document.getElementById('container');

function createBoxes (numBoxes) {
  for (var i = 0; i < numBoxes; i++) {
    let row = container.appendChild(document.createElement('div'));
    for (let j = 0; j < numBoxes; j++) {
      let square = document.createElement('div');
      square.className = 'box';
      row.appendChild(square);
    }
  }
}

createBoxes(16);

let elements = document.getElementsByClassName('box');

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('mouseover', changeColor)
}

function changeColor() {
  this.style.backgroundColor = 'black';
}


