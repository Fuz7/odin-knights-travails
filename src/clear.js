import { knight } from './knight_travail';

function clearBoard() {
  const startCell = document.getElementsByClassName('startPath')[0];
  if (startCell !== undefined) startCell.classList.remove('startPath');
  const boardCell = document.querySelectorAll(
    '[class^="board__boardRow__boardCell"]',
  );
  boardCell.forEach((element) => {
    // eslint-disable-next-line no-param-reassign
    element.classList.remove('traversed');
    for (let i = 0; i < element.childNodes.length; i += 1) {
      const child = element.childNodes[i];

      // Check if the child node is a text node
      if (child.nodeType === Node.TEXT_NODE) {
        // Remove only the text content of the text node
        child.nodeValue = '';
      }
    }
  });
  const knightImg = document.getElementById('knight');
  if (knightImg !== null) knightImg.classList.remove('finished');
}

function resetBoard() {
  clearBoard();
  const knightImg = document.getElementById('knight');
  if (knightImg !== null) knightImg.remove();
  const endPath = document.getElementById('endPath');
  if (endPath !== null) endPath.setAttribute('id', '');
  knight.position = null;
  knight.endCell = null;
  const board = document.getElementById('board');
  board.classList.remove('knightSelected');
  const knightButton = document.getElementById('knightButton');
  knightButton.classList.remove('knightSelected');
  knightButton.classList.remove('knightPlaced');
}

export default clearBoard;
export { resetBoard };
