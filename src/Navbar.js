// import React from 'react';
// // import "./index.css"

// function Navbar() {
//   return (

//     <nav className="bg-slate-50 border-gray-200">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="https://mma.prnewswire.com/media/1320682/October_27___Rubik_s_Logo_3.jpg?w=400" className="flex items-center">
//           <img src="https://mma.prnewswire.com/media/1320682/October_27___Rubik_s_Logo_3.jpg?w=400" className="h-8 mr-3" alt="Flowbite Logo" />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Rubik's Cube Solver</span>
//         </a>
//         {/* <div className="flex md:order-2"> */}
//           {/* <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" > */}
//             {/* <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg> */}
//             {/* <span className="sr-only">Search</span> */}
//           {/* </button> */}
//           {/* <div className="relative hidden md:block"> */}
//             {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> */}
//               {/* <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg> */}
//               {/* <span className="sr-only">Search icon</span> */}
//             {/* </div> */}
//             {/* <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."> */}
//           {/* </div> */}
//           {/* <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
//             <span className="sr-only">Open menu</span>
//             <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//           </button> */}
//         {/* </div> */}
//         {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search"> */}
//           {/* <div className="relative mt-3 md:hidden"> */}
//             {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
//             </div> */}
//             {/* <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."> */}
//           {/* </div> */}
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
//           <li>
//               <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent" aria-current="page">Input String</a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent" aria-current="page">Home</a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent" aria-current="page">About</a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent" aria-current="page">Feed Colour</a>
//             </li>
//             {/* <li>
//               <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//             </li> */}
//           </ul>
//         {/* </div> */}
//       </div>
//     </nav>

//   );
// }

// export default Navbar;
import React from 'react';
// import kociemba from "kociemba";
const colorMapping = {
  W: 'U', // White -> Up
  Y: 'D', // Yellow -> Down
  R: 'R', // Red -> Right
  O: 'L', // Orange -> Left
  G: 'F', // Green -> Front
  B: 'B', // Blue -> Back

  U: 'U',
  D: 'D', 
  R: 'R', 
  L: 'L',
  F: 'F',
  B: 'B', 
};

const moves = ["U", "D", "R", "L", "F", "B", "U'", "D'", "R'", "L'", "F'", "B'"];

const initialCubeState = {
  U: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
  R: ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
  F: ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
  D: ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'],
  L: ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  B: ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
};

function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

function getRandomMove() {
const randomIndex = getRandomInt(moves.length);
return moves[randomIndex];
}


function applyMove(cubeState, move) {
  const newState = { ...cubeState };

  switch (move) {
      case "U":
      rotateFace(newState.U);
      rotateEdges(newState, 'U');
      break;
      case "D":
      rotateFace(newState.D);
      rotateEdges(newState, 'D');
      break;
      case "R":
      rotateFace(newState.R);
      rotateEdges(newState, 'R');
      break;
      case "L":
      rotateFace(newState.L);
      rotateEdges(newState, 'L');
      break;
      case "F":
      rotateFace(newState.F);
      rotateEdges(newState, 'F');
      break;
      case "B":
      rotateFace(newState.B);
      rotateEdges(newState, 'B');
      break;
      case "U'":
      rotateFace(newState.U);
      rotateFace(newState.U);
      rotateFace(newState.U);
      rotateEdges(newState, 'U');
      rotateEdges(newState, 'U');
      rotateEdges(newState, 'U');
      break;
      case "D'":
      rotateFace(newState.D);
      rotateFace(newState.D);
      rotateFace(newState.D);
      rotateEdges(newState, 'D');
      rotateEdges(newState, 'D');
      rotateEdges(newState, 'D');
      break;
      case "R'":
      rotateFace(newState.R);
      rotateFace(newState.R);
      rotateFace(newState.R);
      rotateEdges(newState, 'R');
      rotateEdges(newState, 'R');
      rotateEdges(newState, 'R');
      break;
      case "L'":
      rotateFace(newState.L);
      rotateFace(newState.L);
      rotateFace(newState.L);
      rotateEdges(newState, 'L');
      rotateEdges(newState, 'L');
      rotateEdges(newState, 'L');
      break;
      case "F'":
      rotateFace(newState.F);
      rotateFace(newState.F);
      rotateFace(newState.F);
      rotateEdges(newState, 'F');
      rotateEdges(newState, 'F');
      rotateEdges(newState, 'F');
      break;
      case "B'":
      rotateFace(newState.B);
      rotateFace(newState.B);
      rotateFace(newState.B);
      rotateEdges(newState, 'B');
      rotateEdges(newState, 'B');
      rotateEdges(newState, 'B');
      break;
  }

  return newState;
}

function rotateFace(face) {
  const temp = [...face];
  face[0] = temp[6];
  face[1] = temp[3];
  face[2] = temp[0];
  face[3] = temp[7];
  face[4] = temp[4];
  face[5] = temp[1];
  face[6] = temp[8];
  face[7] = temp[5];
  face[8] = temp[2];
}

function rotateEdges(tempState, type) {

  if(type === 'U')
  {
      const temp = [...tempState.F];

      tempState.F[0] = tempState.R[0];
      tempState.F[1] = tempState.R[1];
      tempState.F[2] = tempState.R[2];

      tempState.R[0] = tempState.B[0];
      tempState.R[1] = tempState.B[1];
      tempState.R[2] = tempState.B[2];

      tempState.B[0] = tempState.L[0];
      tempState.B[1] = tempState.L[1];
      tempState.B[2] = tempState.L[2];

      tempState.L[0] = temp[0];
      tempState.L[1] = temp[1];
      tempState.L[2] = temp[2];
  }
  else if(type === 'D')
  {
      const temp = [...tempState.F];
      tempState.F[6] = tempState.L[6];
      tempState.F[7] = tempState.L[7];
      tempState.F[8] = tempState.L[8];

      tempState.L[6] = tempState.B[6];
      tempState.L[7] = tempState.B[7];
      tempState.L[8] = tempState.B[8];

      tempState.B[6] = tempState.R[6];
      tempState.B[7] = tempState.R[7];
      tempState.B[8] = tempState.R[8];

      tempState.R[6] = temp[6];
      tempState.R[7] = temp[7];
      tempState.R[8] = temp[8];
  }
  else if(type === 'R')
  {
      const temp = [...tempState.F];
      tempState.F[2] = tempState.D[2];
      tempState.F[5] = tempState.D[5];
      tempState.F[8] = tempState.D[8];

      tempState.D[2] = tempState.B[6];
      tempState.D[5] = tempState.B[3];
      tempState.D[8] = tempState.B[0];

      tempState.B[6] = tempState.U[2];
      tempState.B[3] = tempState.U[5];
      tempState.B[0] = tempState.U[8];

      tempState.U[2] = temp[2];
      tempState.U[5] = temp[5];
      tempState.U[8] = temp[8];

  }
  else if(type === 'L')
  {
      const temp = [...tempState.F];
      tempState.F[0] = tempState.U[0];
      tempState.F[3] = tempState.U[3];
      tempState.F[6] = tempState.U[6];

      tempState.U[0] = tempState.B[8];
      tempState.U[3] = tempState.B[5];
      tempState.U[6] = tempState.B[2];

      tempState.B[8] = tempState.D[0];
      tempState.B[5] = tempState.D[3];
      tempState.B[2] = tempState.D[6];

      tempState.D[0] = temp[0];
      tempState.D[3] = temp[3];
      tempState.D[6] = temp[6];
  }
  else if(type === 'F')
  {
      const temp = [...tempState.U];
      tempState.U[8] = tempState.L[2];
      tempState.U[7] = tempState.L[5];
      tempState.U[6] = tempState.L[8];

      tempState.L[2] = tempState.D[0];
      tempState.L[5] = tempState.D[1];
      tempState.L[8] = tempState.D[2];

      tempState.D[2] = tempState.R[0];
      tempState.D[1] = tempState.R[3];
      tempState.D[0] = tempState.R[6];

      tempState.R[0] = temp[6];
      tempState.R[3] = temp[7];
      tempState.R[6] = temp[8];
  }
  else if(type === 'B')
  {
      const temp = [...tempState.U];
      tempState.U[0] = tempState.R[2];
      tempState.U[1] = tempState.R[5];
      tempState.U[2] = tempState.R[8];

      tempState.R[2] = tempState.D[8];
      tempState.R[5] = tempState.D[7];
      tempState.R[8] = tempState.D[6];

      tempState.D[6] = tempState.L[0];
      tempState.D[7] = tempState.L[3];
      tempState.D[8] = tempState.L[6];

      tempState.L[0] = temp[2];
      tempState.L[3] = temp[1];
      tempState.L[6] = temp[0];
  }

  return tempState;
}

function getRandomScramble(numMoves) {
  let scramble = "";
  let cubeState = { ...initialCubeState };

  for (let i = 0; i < numMoves; i++) {
      let randomMove = getRandomMove();

      scramble += randomMove + " ";
      cubeState = applyMove(cubeState, randomMove);
  }

  return { scramble: scramble.trim(), cubeState };
}

function getColors(cubeState) {
  let colors = "";

  Object.keys(cubeState).forEach((face) => {
      const faceColors = cubeState[face];
      faceColors.forEach((color) => {
      colors += color;
      });
});

  return colors;
}

let scrambledColors;
function Navbar() {
  const handleScramble = () => {
    // Logic to scramble the cube goes here
    const { scramble, cubeState: scrambledState } = getRandomScramble(20);
    scrambledColors = getColors(scrambledState);
    console.log(scramble,scrambledColors);
    // these variables contain the scramblled state
    console.log('Cube scrambled!');
  };

  const handleSolve = () => {
    // Logic to solve the cube goes here
    let cubeState = '';

    for (let i = 0; i < 54; i++) {
      const color = colorMapping[scrambledColors[i]];
      cubeState += color || '?';
    }

    // const solution = kociemba.solve(cubeState);
    // console.log(solution);
    console.log('Cube solved!');
  };

  return (
    <nav className="bg-slate-50 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://mma.prnewswire.com/media/1320682/October_27___Rubik_s_Logo_3.jpg?w=400" className="flex items-center">
          <img src="https://mma.prnewswire.com/media/1320682/October_27___Rubik_s_Logo_3.jpg?w=400" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Rubik's Cube Solver</span>
        </a>
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
          {/* <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent" aria-current="page">Input String</a>
          </li> */}
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent" aria-current="page">About</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent" aria-current="page">Feed Colour</a>
          </li>
          <div className = "scramble-button">
            <li>
              <button onClick={handleScramble} className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent focus:outline-none">Scramble!</button>
            </li>
          </div>
          <div className = "solve-button">
            <li>
              <button onClick={handleSolve} className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent focus:outline-none">Solve!</button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
