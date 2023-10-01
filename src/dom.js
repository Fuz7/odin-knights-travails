import './assets/images/knightPlaced.svg';

(function createInterface() {
  const body = document.getElementsByTagName('body')[0];
  const interfaceContainer = document.createElement('section');
  interfaceContainer.classList.add('interface');


  const title = document.createElement('h1')
  title.classList.add('interface__title')
  title.textContent = 'Knights Travails'
  interfaceContainer.append(title)  
  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('interface__buttonContainer')
  const knightButton = document.createElement('button')
  knightButton.classList.add('interface__buttonContainer__knightButton')
  knightButton.setAttribute('id','knightButton')
  knightButton.setAttribute('type','button')
  buttonContainer.append(knightButton)  
  const resetButton = document.createElement('button')
  resetButton.classList.add('interface__buttonContainer__resetButton')
  resetButton.setAttribute('id','resetButton')
  resetButton.setAttribute('type','button')
  resetButton.textContent = 'Reset'
  buttonContainer.append(resetButton)
  const pathTravailContainer = document.createElement('div')
  pathTravailContainer.classList.add(
    'interface__buttonContainer__pathTravailContainer')
  const selectPathButton = document.createElement('button')
  selectPathButton.classList.add(
    'interface__buttonContainer__pathTravailContainer__selectPathButton')
  selectPathButton.setAttribute('id','selectPathButton')
  selectPathButton.textContent = 'Select Path'
  pathTravailContainer.append(selectPathButton)
  const travailButton = document.createElement('button')
  travailButton.classList.add(
    'interface__buttonContainer__pathTravailContainer__travailButton')
  travailButton.setAttribute('id','travailButton')
  travailButton.textContent = 'Travail'
  pathTravailContainer.append(travailButton)
  buttonContainer.append(pathTravailContainer)
  const knightsTourButton = document.createElement('button')
  knightsTourButton.classList.add(
    'interface__buttonContainer__knightsTourButton')
  knightsTourButton.setAttribute('id','knightsTourButton')
  knightsTourButton.textContent = 'Knights Tour'
  buttonContainer.append(knightsTourButton)

  interfaceContainer.append(buttonContainer)



  body.prepend(interfaceContainer);

})();


/* eslint-disable-next-line prefer-arrow-callback */
(function createBoard(){
  const body = document.getElementsByTagName('body')[0];
  const boardContainer = document.createElement('section');
  boardContainer.classList.add('board');
  boardContainer.setAttribute('id','board')

  for (let i = 0; i < 8; i += 1) {
    const boardRow = document.createElement('div');
    boardRow.classList.add('board__boardRow');
    for (let j = 0; j < 8; j += 1) {
      const boardCell = document.createElement('div');
      boardCell.classList.add('board__boardRow__boardCell');
      if (i % 2 === 0 && j % 2 === 0)
        boardCell.classList.add('board__boardRow__boardCell--white');
      else if (i % 2 !== 0 && j % 2 === 0)
        boardCell.classList.add('board__boardRow__boardCell--black');
      else if (i % 2 === 0 && j % 2 !== 0)
        boardCell.classList.add('board__boardRow__boardCell--black');
      else if (i % 2 !== 0 && j % 2 !== 0)
        boardCell.classList.add('board__boardRow__boardCell--white');
      boardCell.setAttribute('data-row', i);
      boardCell.setAttribute('data-cell', j);
      boardRow.appendChild(boardCell);
    }
    boardContainer.append(boardRow);
  }
  body.prepend(boardContainer);
})();

(function knightEvents(){
  let board = document.getElementById('board')
  let knightButton = document.getElementById('knightButton');
  knightButton.addEventListener('click',()=>{
    board.classList.add('knightSelected')
    knightButton.classList.add('knightSelected')
  })



})();

const placeKnight = (e)=>{
  let targetedElement = e.target
  let board = document.getElementById('board')
  if(board.classList.contains('knightSelected')){
    let prevKnight = document.getElementById('knight')
    if(prevKnight) prevKnight.remove()

    const img = new Image()
    img.src = './assets/images/knightPlaced.svg'
    img.setAttribute('id','knight')
    targetedElement.append(img)
    board.classList.remove('knightSelected')
  }


  
}

(function boardKnightPlacement(){
  const boardCell = document.querySelectorAll(
    '[class^="board__boardRow__boardCell board__boardRow__boardCell"]')
  boardCell.forEach(element =>{
    element.addEventListener('click',placeKnight)
  })

})()