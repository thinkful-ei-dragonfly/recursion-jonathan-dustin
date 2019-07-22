//1. Counting Sheep
function countSheep(num) {
  //Base Case
  if (num === 0) {
    console.log('All sheep jumped over fence');
    return;
  }

  console.log(`${num}: Another sheep jump over the fence`);
  countSheep(num - 1);
}

//countSheep(5)

//2. Power Calculator
function powerCalculator(base, exp) {
  //Base Case
  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return 'Exponent should be greater than or equal to 0';
  }
  return base * powerCalculator(base, exp - 1);
}

// console.log(powerCalculator(10, 3))
// console.log(powerCalculator(10, 0))
// console.log(powerCalculator(10, -1))

//3. Reverse String
function reverseString(str) {
  //Base Case
  if (str.length === 0) {
    return '';
  }

  const char = str[str.length - 1];
  return char + reverseString(str.slice(0, str.length - 1));
}

// console.log(reverseString('Hello'))
// console.log(reverseString(''))

//4. nth Triangular Number
function triangularNumber(n) {
  //Base Case
  if (n === 0) {
    return 0;
  }

  return n + triangularNumber(n - 1);
}

// console.log(triangularNumber(10))
// console.log(triangularNumber(0))
// console.log(triangularNumber(1))

//5. String Splitter

function stringSplit(str, separator) {
  //Base Case
  if (str.length === 0) {
    return '';
  }

  const char = str[0];
  if (char !== separator) {
    return char + stringSplit(str.slice(1), separator);
  }
  return stringSplit(str.slice(1), separator);
}

// console.log(stringSplit('02/20/2020', '/'))

//6. fibonacci
function fibonacci(n, count = n) {
  if (count === 0) {
    console.log(getFibonacci(n));
    return '';
  }
  function getFibonacci(num) {
    //Base Case
    if (num <= 0) {
      return 0;
    }
    if (num === 1) {
      return 1;
    }

    return getFibonacci(num - 1) + getFibonacci(num - 2);
  }
  console.log(getFibonacci(n - count));
  return fibonacci(n, count - 1);
}

// console.log(fibonacci(7));

//7. factorial

function factorial(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// console.log(factorial(5));
// console.log(factorial(0));

//8. Maze 1
function solveMaze(maze, x = 0, y = 0) {
  let position = maze[y][x];

  //Base Case
  if (position === 'e') {
    return '';
  }

  maze[y][x] = '*';

  // console.log(maze);
  // console.log('move');

  if (x + 1 >= maze[y].length || maze[y][x + 1] === '*') {
    if (maze[y + 1][x] !== '*' && y + 1 <= maze.length) {
      return 'D' + solveMaze(maze, x, y + 1);
    } else if (y === 0 || maze[y-1][x] === '*') {
      return 'L' + solveMaze(maze, x - 1, y);
    }
    return 'U' + solveMaze(maze, x, y - 1);
  }

  if (y + 1 >= maze.length || maze[y + 1][x] === '*') {
    if (x + 1 < maze[y].length && maze[y][x + 1] !== '*') {
      return 'R' + solveMaze(maze, x + 1, y);
    } else if (x > 0 && maze[y][x-1] !== '*') {
      return 'L' + solveMaze(maze, x - 1, y);
    }
    return 'U' + solveMaze(maze, x, y - 1);
  }

  return 'R' + solveMaze(maze, x + 1, y);
}

let mySmallMaze = [[' ', ' ', ' '], [' ', '*', ' '], [' ', ' ', 'e']];

let bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
let bigMaze2 = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
//0 -132
//1 -132
//2 -
console.log(solveMaze(mySmallMaze));
console.log(solveMaze(bigMaze));
console.log(solveMaze(bigMaze2));
