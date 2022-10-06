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
//console.log(elements)

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('mouseover', changeColor)
}

function changeColor() {
  this.style.backgroundColor = 'black';
}


let btn = document.querySelector('.numSquares');
btn.addEventListener('click', () => {
  container.innerHTML = '';
  let input = window.prompt('How many squares do you want in your grid?');
  createBoxes(input);
  let boxes = document.getElementsByClassName('box')
  for (var j = 0; j < boxes.length; j++) {
    boxes[j].addEventListener('mouseover', changeColor)
  }
});



