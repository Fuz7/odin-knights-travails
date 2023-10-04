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



  function handleAnimation() {
    if(animationCounter === animationLenght) return
    

    const animationType = animationOffsets[animationCounter];
    const iterationCount = Math.abs(animationType)
    animatingKnight.style.animationIterationCount = iterationCount;
    if (
      (animationCounter % 2 === 0 || animationCounter === 0) &&
      animationType > 0 ) {
      animatingKnight.style.animationName = 'up';
    } 
    else if((animationCounter % 2 === 0 || animationCounter === 0) &&
      animationType < 0){
        animatingKnight.style.animationName = 'down';
      }  
    else if(animationCounter % 2 !== 0 && animationType > 0){
      animatingKnight.style.animationName = 'right'
    }
    else if(animationCounter % 2 !== 0 && animationType < 0){
      animatingKnight.style.animationName = 'left'
    }

    animationCounter += 1;
  }

  animatingKnight.addEventListener('animationend', handleAnimation);

  handleAnimation()
}

export {animateTravail}