import * as math from "mathjs"
import * as CL from "./coordsLists"
import * as R from "./rotations"
import * as U from "./utils"

const coordsToFaces = (vmin, vmax, x, y, z) => ({
  up: y === vmax ? "U" : "-",
  down: y === vmin ? "D" : "-",
  left: x === vmin ? "L" : "-",
  right: x === vmax ? "R" : "-",
  front: z === vmax ? "F" : "-",
  back: z === vmin ? "B" : "-"
})

const pieceHasCoords = (piece, coords) =>
  piece.x === coords[0] &&
  piece.y === coords[1] &&
  piece.z === coords[2]

export const getPieces = (cube, coordsList) =>
  coordsList.map(coords =>
    cube.find(piece => pieceHasCoords(piece, coords)))

const isPieceInCoordsList = (piece, coordsList) =>
  coordsList.findIndex(coords => pieceHasCoords(piece, coords)) >= 0

const rotatePiece = (piece, rotationMatrix3) => {
  const vector3 = math.matrix([piece.x, piece.y, piece.z])
  const rotatedVector3 = math.multiply(vector3, rotationMatrix3)
  return {
    ...piece,
    x: rotatedVector3.get([0]),
    y: rotatedVector3.get([1]),
    z: rotatedVector3.get([2]),
    accTransform3: math.multiply(piece.accTransform3, rotationMatrix3)
  }
}

const rotatePieces = (coordsList, rotationMatrix3) => cube =>
  cube.map(piece => isPieceInCoordsList(piece, coordsList)
    ? rotatePiece(piece, rotationMatrix3)
    : piece)

const makeKvp = (id, oppositeMoveId, rotationMatrix3, coordsList, numTurns) => {
  const key = id
  const value = {
    id,
    oppositeMoveId,
    makeMove: rotatePieces(coordsList, rotationMatrix3),
    rotationMatrix3,
    coordsList,
    numTurns
  }
  return [key, value]
}

const makeKvpsForSlice = ([rotationMatrices3, coordsList], index) => {
  const baseId = index * 3
  const move90Id = baseId
  const move180Id = baseId + 1
  const move270Id = baseId + 2
  const move90 = makeKvp(move90Id, move270Id, rotationMatrices3[0], coordsList, 1)
  const move180 = makeKvp(move180Id, move180Id, rotationMatrices3[1], coordsList, 2)
  const move270 = makeKvp(move270Id, move90Id, rotationMatrices3[2], coordsList, 1)
  return [move90, move180, move270]
}

const angles = [90, 180, 270]
const xRotationMatrices3 = angles.map(R.makeXRotation)
const yRotationMatrices3 = angles.map(R.makeYRotation)
const zRotationMatrices3 = angles.map(R.makeZRotation)

const makeMoveIdsToMoves = cubeSize => {
  const { values } = CL.getCubeDimensions(cubeSize)
  const allCoordsList = CL.makeAllCoordsList(cubeSize)
  const slices = [
    ...values.map(xSlice => [xRotationMatrices3, CL.pitchSliceCoordsList(allCoordsList, xSlice)]),
    ...values.map(ySlice => [yRotationMatrices3, CL.yawSliceCoordsList(allCoordsList, ySlice)]),
    ...values.map(zSlice => [zRotationMatrices3, CL.rollSliceCoordsList(allCoordsList, zSlice)])
  ]
  const nestedKvps = slices.map(makeKvpsForSlice)
  console.log("nestedKvps", slices)
  return new Map(U.flatten(nestedKvps))
}

const makeSolvedCube = cubeSize => {
  const { vmin, vmax } = CL.getCubeDimensions(cubeSize)
  console.log("vmin, vmax", vmin, vmax)
  const allCoordsList = CL.makeAllCoordsList(cubeSize)
  console.log("allCoordsList", allCoordsList)
  return allCoordsList.map(([x, y, z], index) => ({
    id: index,
    x, y, z,
    faces: coordsToFaces(vmin, vmax, x, y, z),
    accTransform3: R.Identity
  }))
}
const cubeState = [
  { x: -2, y: -2, z: -2 },   
  { x: -2, y: -2, z: -1 },  
  { x: -2, y: -2, z: 0 },  
  { x: -2, y: -2, z: 1 },  
  { x: -2, y: -2, z: 2 },  
  { x: -2, y: -1, z: -2 },  
  { x: -2, y: -1, z: -1 },  
  { x: -2, y: -1, z: 0 },
  { x: -2, y: -1, z: 1 },
  { x: -2, y: -1, z: 2 },
  { x: -2, y: 0, z: -2 },
  { x: -2, y: 0, z: -1 },
  { x: -2, y: 0, z: 0 },
  { x: -2, y: 0, z: 1 },
  { x: -2, y: 0, z: 2 },
  { x: -2, y: 1, z: -2 },
  { x: -2, y: 1, z: -1 },
  { x: -2, y: 1, z: 0 },
  { x: -2, y: 1, z: 1 },
  { x: -2, y: 1, z: 2 },
  { x: -2, y: 2, z: -2 },
  { x: -2, y: 2, z: -1 },
  { x: -2, y: 2, z: 0 },
  { x: -2, y: 2, z: 1 },
  { x: -2, y: 2, z: 2 },
  { x: -1, y: -2, z: -2 },
  { x: -1, y: -2, z: -1 },
  { x: -1, y: -2, z: 0 },
  { x: -1, y: -2, z: 1 },
  { x: -1, y: -2, z: 2 },
  { x: -1, y: -1, z: -2 },
  { x: -1, y: -1, z: -1 },
  { x: -1, y: -1, z: 0 },
  { x: -1, y: -1, z: 1 },
  { x: -1, y: -1, z: 2 },
  { x: -1, y: 0, z: -2 },
  { x: -1, y: 0, z: -1 },
  { x: -1, y: 0, z: 0 },
  { x: -1, y: 0, z: 1 },
  { x: -1, y: 0, z: 2 },
  { x: -1, y: 1, z: -2 },
  { x: -1, y: 1, z: -1 },
  { x: -1, y: 1, z: 0 },
  { x: -1, y: 1, z: 1 },
  { x: -1, y: 1, z: 2 },
  { x: -1, y: 2, z: -2 },
  { x: -1, y: 2, z: -1 },
  { x: -1, y: 2, z: 0 },
  { x: -1, y: 2, z: 1 },
  { x: -1, y: 2, z: 2 },
  { x: 0, y: -2, z: -2 },
  { x: 0, y: -2, z: -1 },
  { x: 0, y: -2, z: 0 },
  { x: 0, y: -2, z: 1 },
  { x: 0, y: -2, z: 2 },
  { x: 0, y: -1, z: -2 },
  { x: 0, y: -1, z: -1 },
  { x: 0, y: -1, z: 0 },
  { x: 0, y: -1, z: 1 },
  { x: 0, y: -1, z: 2 },
  { x: 0, y: 0, z: -2 },
  { x: 0, y: 0, z: -1 },
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 0, y: 0, z: 2 },
  { x: 0, y: 1, z: -2 },
  { x: 0, y: 1, z: -1 },
  { x: 0, y: 1, z: 0 },
  { x: 0, y: 1, z: 1 },
  { x: 0, y: 1, z: 2 },
  { x: 0, y: 2, z: -2 },
  { x: 0, y: 2, z: -1 },
  { x: 0, y: 2, z: 0 },
  { x: 0, y: 2, z: 1 },
  { x: 0, y: 2, z: 2 },
  { x: 1, y: -2, z: -2 },
  { x: 1, y: -2, z: -1 },
  { x: 1, y: -2, z: 0 },
  { x: 1, y: -2, z: 1 },
  { x: 1, y: -2, z: 2 },
  { x: 1, y: -1, z: -2 },
  { x: 1, y: -1, z: -1 },
  { x: 1, y: -1, z: 0 },
  { x: 1, y: -1, z: 1 },
  { x: 1, y: -1, z: 2 },
  { x: 1, y: 0, z: -2 },
  { x: 1, y: 0, z: -1 },
  { x: 1, y: 0, z: 0 },
  { x: 1, y: 0, z: 1 },
  { x: 1, y: 0, z: 2 },
  { x: 1, y: 1, z: -2 },
  { x: 1, y: 1, z: -1 },
  { x: 1, y: 1, z: 0 },
  { x: 1, y: 1, z: 1 },
  { x: 1, y: 1, z: 2 },
  { x: 1, y: 2, z: -2 },
  { x: 1, y: 2, z: -1 },
  { x: 1, y: 2, z: 0 },
  { x: 1, y: 2, z: 1 },
  { x: 1, y: 2, z: 2 },
  { x: 2, y: -2, z: -2 },
  { x: 2, y: -2, z: -1 },
  { x: 2, y: -2, z: 0 },
  { x: 2, y: -2, z: 1 },
  { x: 2, y: -2, z: 2 },
  { x: 2, y: -1, z: -2 },
  { x: 2, y: -1, z: -1 },
  { x: 2, y: -1, z: 0 },
  { x: 2, y: -1, z: 1 },
  { x: 2, y: -1, z: 2 },
  { x: 2, y: 0, z: -2 },
  { x: 2, y: 0, z: -1 },
  { x: 2, y: 0, z: 0 },
  { x: 2, y: 0, z: 1 },
  { x: 2, y: 0, z: 2 },
  { x: 2, y: 1, z: -2 },
  { x: 2, y: 1, z: -1 },
  { x: 2, y: 1, z: 0 },
  { x: 2, y: 1, z: 1 },
  { x: 2, y: 1, z: 2 },
  { x: 2, y: 2, z: -2 },
  { x: 2, y: 2, z: -1 },
  { x: 2, y: 2, z: 0 },
  { x: 2, y: 2, z: 1 },
  { x: 2, y: 2, z: 2 }
];

console.log("stae", cubeState)
const makeCubeFromState = (cubeSize, cubeState) => {
  const { vmin, vmax } = CL.getCubeDimensions(cubeSize);
  const allCoordsList = CL.makeAllCoordsList(cubeSize);

  return allCoordsList.map(([x, y, z], index) => {
    const state = cubeState[index];
    const { x: stateX, y: stateY, z: stateZ } = state;

    return {
      id: index,
      x: stateX,
      y: stateY,
      z: stateZ,
      faces: coordsToFaces(vmin, vmax, stateX, stateY, stateZ),
      accTransform3: R.Identity
    };
  });
};




const makePerCubeSizeDataEntry = cubeSize => {
  const moveIdsToMoves = makeMoveIdsToMoves(cubeSize)
  const moves = Array.from(moveIdsToMoves.values())

  const solvedCube = makeSolvedCube(cubeSize)
  console.log("solvedCube", solvedCube)
  console.log("cubeSize", moves)

  return [cubeSize, { moveIdsToMoves, moves, solvedCube }]
}

const PER_CUBE_SIZE_DATA = new Map([
  makePerCubeSizeDataEntry(2),
  makePerCubeSizeDataEntry(3),
  makePerCubeSizeDataEntry(4),
  makePerCubeSizeDataEntry(5)
])

export const getSolvedCube = cubeSize => {
  const perCubeSizeData = PER_CUBE_SIZE_DATA.get(cubeSize)
  return perCubeSizeData.solvedCube
}

export const lookupMoveId = (cubeSize, id) => {
  const perCubeSizeData = PER_CUBE_SIZE_DATA.get(cubeSize)
  return perCubeSizeData.moveIdsToMoves.get(id)
}

export const convertMovesStringToCubeMoves = (cubeSize, movesString) => {
  const perCubeSizeData = PER_CUBE_SIZE_DATA.get(cubeSize);
  const moveIdsToMoves = perCubeSizeData.moveIdsToMoves;

  const moves = [];
  const movesArray = movesString.split(',').map(move => move.trim());

  for (const moveString of movesArray) {
    const move = moveIdsToMoves.get(moveString.toUpperCase());
    if (move) {
      moves.push(move);
    }
  }

  return moves;
};
export const convertStringToNumbers = (inputString) => {
  const map = {
    L: 0,
    L2: 1,
    "L'": 2,
    M: 3,
    M2: 4,
    "M'": 5,
    "R'": 6,
    R2: 7,
    R: 8,
    D: 9,
    D2: 10,
    "D'": 11,
    E: 12,
    E2: 13,
    "E'": 14,
    "U'": 15,
    U2: 16,
    U: 17,
    "B'": 18,
    B2: 19,
    B: 20,
    S: 21,
    S2: 22,
    "S'": 23,
    F: 24,
    F2: 25,
    "F'": 26,
  };

  const inputArray = inputString.split("");
  const result = [];

  for (let i = 0; i < inputArray.length; i++) {
    let move = inputArray[i];
    if (move === "2" || move === "'") {
      move = inputArray[i - 1] + move;
      result.pop(); // remove the previous move
    }
    result.push(map[move]);
  }

  return result;
}


// console.log(sequence); // Output: [1, 7, 2, 16, 13]
// for(let i =0;i<length;i++){
//   console.log("sequence[i]", sequence[i])
// }



// export const getRandomMove = cubeSize => {
//   const perCubeSizeData = PER_CUBE_SIZE_DATA.get(cubeSize)
//   // const randomIndex = Math.floor(0.11 * perCubeSizeData.moves.length)
//   // console.log("randomIndex", randomIndex)
//   // console.log("perCubeSizeData.moves", perCubeSizeData.moves[randomIndex])
  

  let i =0;

  export const getRandomMove = (cubeSize, sequence,length) => {
    
    const perCubeSizeData = PER_CUBE_SIZE_DATA.get(cubeSize);
    const moveIndex = i % length;
    i++;
    console.log("length", length)
    // for(i =0;i<length;i++){
    
    
      // console.log("sequence[i]", sequence[i]);
      // console.log("perCubeSizeData.moves", perCubeSizeData.moves[sequence[i]]);
      // return perCubeSizeData.moves[sequence[i]];

      console.log("sequence[moveIndex]", sequence[moveIndex]);
      console.log("perCubeSizeData.moves", perCubeSizeData.moves[sequence[moveIndex]]);

      return perCubeSizeData.moves[sequence[moveIndex]];
    // }
  };





export const removeRedundantMoves = moves => {
  for (; ;) {
    let removedSomething = false
    const indexes = U.range(moves.length)
    for (const index of indexes.slice(1)) {
      const move = moves[index]
      const previousMove = moves[index - 1]
      if (move.id === previousMove.oppositeMoveId) {
        moves.splice(index, 1)
        removedSomething = true
        break
      }
    }
    if (!removedSomething) break
  }
}

export const makeMoves = (moves, initialCube) =>
  moves.reduce((cube, move) => move.makeMove(cube), initialCube)
