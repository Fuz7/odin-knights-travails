(function createBoard() {
  const body = document.getElementsByTagName('body')[0]
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('board');

  for (let i = 0; i < 8; i += 1) {
    const boardRow = document.createElement('div');
    boardRow.classList.add('board__boardRow')
    for (let j = 0; j < 8; j += 1) {
      const boardCell = document.createElement('div');
      boardCell.classList.add('board__boardRow__boardCell');
      if (i % 2 === 0 && j % 2 === 0) boardCell.classList.add('board__boardRow__boardCell--white');
      else if (i % 2 !== 0 && j % 2 === 0) boardCell.classList.add('board__boardRow__boardCell--black');
      else if (i % 2 === 0 && j % 2 !== 0) boardCell.classList.add('board__boardRow__boardCell--black');
      else if (i % 2 !== 0 && j % 2 !== 0) boardCell.classList.add('board__boardRow__boardCell--white');
      boardCell.setAttribute('data-row', i);
      boardCell.setAttribute('data-cell', j);
      boardRow.appendChild(boardCell);
    }
    boardContainer.append(boardRow);
  }
  body.prepend(boardContainer)
})();


