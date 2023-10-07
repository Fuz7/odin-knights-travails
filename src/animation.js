import { knight } from './knight_travail';

function getOffset(paths) {
  const arrOffset = [];
  for (let i = 0; i < paths.length - 1; i += 1) {
    const xOffset = paths[i + 1][0] - paths[i][0];
    const yOffset = paths[i + 1][1] - paths[i][1];
    arrOffset.push(xOffset);
    arrOffset.push(yOffset);
  }
  return arrOffset;
}
function animateTravail(paths) {
  const animationOffsets = getOffset(paths);
  const animationLenght = animationOffsets.length;
  const animatingKnight = document.getElementsByClassName('animating')[0];
  let animationCounter = 0;
  let xPos = 0;
  let yPos = 0;

  function handleAnimation() {
    if (animationCounter === animationLenght) {
      knight.position = paths[animationCounter / 2];
      console.log(knight.position);
      const newCurrentCell = document.querySelector(
        `div[data-row="${knight.position[0]}"][data-column="${knight.position[1]}"]`,
      );
      animatingKnight.remove();
      const img = new Image();
      img.src = './assets/images/knightPlaced.svg';
      img.setAttribute('id', 'knight');
      img.classList.add('finished');
      const touchedCell = document.querySelector(
        `div[data-row="${paths[animationCounter / 2][0]}"][data-column="${
          paths[animationCounter / 2][1]
        }"]`,
      );
      touchedCell.textContent = animationCounter / 2;
      newCurrentCell.append(img);
      if (animationCounter === 126) {
        const finishCell = document.querySelector(
          `div[data-row="${paths[63][0]}"][data-column="${paths[63][1]}"]`,
        );
        finishCell.setAttribute('id', 'endPath');
      }
      return;
    }

    if (animationCounter % 2 === 0 && animationCounter !== 0) {
      const touchedCell = document.querySelector(
        `div[data-row="${paths[animationCounter / 2][0]}"][data-column="${
          paths[animationCounter / 2][1]
        }"]`,
      );
      touchedCell.classList.add('traversed');
      touchedCell.textContent = animationCounter / 2;
    }

    const animationValue = animationOffsets[animationCounter];
    const animationPx = animationValue * 100;

    if (animationCounter % 2 === 0 || animationCounter === 0) {
      animatingKnight.style.transform = `translate(${parseInt(xPos, 10)}px,${
        parseInt(yPos, 10) + -animationPx
      }px)`;
      yPos = parseInt(yPos, 10) + -animationPx;
    } else if (animationCounter % 2 !== 0) {
      animatingKnight.style.transform = `translate(${
        parseInt(xPos, 10) + animationPx
      }px,${parseInt(yPos, 10)}px)`;
      xPos = parseInt(xPos, 10) + animationPx;
    }

    animationCounter += 1;
  }

  animatingKnight.addEventListener('transitionend', handleAnimation);

  handleAnimation();
}

export default animateTravail;
