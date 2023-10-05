class Node {
  constructor(position, path = []) {
    this.position = position;
    this.path = path;
    this.pathNum = 0
  }
}

export const knight = (() => {
  const position = null;
  const endCell = null;
  const pathLenght = null;
  const path = [];
  const knightMove = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ];
  return { endCell, pathLenght, path, position, knightMove };
})();

function checkValidity(arr, startingX, startingY) {
  const nextMovesX = arr[0] + startingX;
  const nextMovesY = arr[1] + startingY;
  if (nextMovesX > 7 || nextMovesX < 0) return null;
  if (nextMovesY > 7 || nextMovesY < 0) return null;
  return [nextMovesX, nextMovesY];
}

function knightsTravails(start, end) {
  const queue = [];
  const visited = [];
  let knightNode = new Node(start, [start]);
  queue.push(knightNode);
  while (queue) {
    knightNode = queue.shift();
    visited.push(knightNode.position);
    const xPos = knightNode.position[0];
    const yPos = knightNode.position[1];

    if (xPos === end[0] && yPos === end[1]) {
      return knightNode.path;
    }
    const knightPath = knightNode.path;
    knight.knightMove.forEach((move) => {
      const newMove = checkValidity(move, xPos, yPos);

      const moveVisited = newMove
        ? visited.find(
            (item) => item[0] === newMove[0] && item[1] === newMove[1],
          )
        : null;
      if (newMove !== null && !moveVisited) {
        const childNode = new Node(newMove, [...knightPath]);
        childNode.path.push(newMove);
        queue.push(childNode);
      }
    });
  }
  return knightNode.path;
}


function knightTour(start){
  const queue = [];
  const visited = [];
  let knightNode = new Node(start,[start])
  queue.push(knightNode)
  while(queue.length !== 0){
    knightNode = queue.shift()
    visited.push(knightNode.position)
    const knightPath = knightNode.path
    const xPos = knightNode.position[0]
    const yPos = knightNode.position[1]
    knight.knightMove.forEach((move)=>{
      const newMove = checkValidity(move, xPos, yPos)
      const moveVisited = newMove
      ? visited.find(
        (item) => item[0] === newMove[0] && item[1] === newMove[1],
        )
        : null;
        
      function getPathsNum(newMovez){
        let pathsNum = 0
        knight.knightMove.forEach((movez)=>{
          const possibleMove = checkValidity(movez,newMovez[0],newMovez[1])
      
          if (possibleMove !== null) {
            pathsNum += 1
            visited.forEach((visitedElement)=>{
              if(possibleMove[0] === visitedElement[0] && possibleMove[1] === visitedElement[1]) pathsNum -=1
            })
          }

        })
        return pathsNum
      }
      if(newMove !== null && !moveVisited){
        const newMovePathNum = getPathsNum(newMove)
        const childNode = new Node(newMove,[...knightPath]) 
        childNode.path.push(newMove)
        childNode.pathNum = newMovePathNum
        queue.push(childNode)
      }
    })
    queue.sort((a,b)=> a.pathNum - b.pathNum)
    queue.splice(1,queue.length - 1)
  }
  return visited
}

knightTour([2,3])
export default knightsTravails;
export {knightTour}