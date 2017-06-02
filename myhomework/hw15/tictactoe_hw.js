var grid = [['X', 'O', 'X'],
            ['X', 'X', 'O'],
            ['O', 'X', 'O']]
var turn = 0

// Check coordinates; are they in the grid? If false, return -1 or false...
// Make sure move is valid.
function makeMove(grid,turn,row,col){ //text field
  if (turn % 2 == 0){
    if (row <= grid.length - 1){
      if (col <= grid[0].length - 1){
        grid[row][col] = turn;
      }
      else {return false}
    }
    else {return false}
    turn++;
  }
  else if (turn % 2 == 1){
    if (row <= grid.length - 1){
      if (col <= grid[0].length - 1){
        grid[row][col] = turn;
      }
      else {return false}
    }
    else {return false}
    turn++;
  }
}
/*
// Check row, col, diagonal. Return null if no winner. 2 winners? (Whichever won first)
function checkWinner(grid){
  for (var i = 0, i <= grid.length, i++){
    if ((grid[i][0] === turn && grid[i][1] === turn && grid[i][2] === turn) ||
        (grid[0][i] === turn && grid[1][i] === turn && grid[2][i] === turn)){
      return turn;
    }
    else if ((grid[0][0] === turn && grid[1][1] === turn && grid[2][2] === turn) ||
        (grid[0][2] === turn && grid[1][1] === turn && grid[2][0] === turn)){
      return turn;
    }
    else if (turn === 9){
      return null;
    }
    else{
      return false;
    }
  }
}
*/
function printGrid(grid){
  for (var i = 0; i < 2; i++){
    console.log(grid[i][0] + ' # ' + grid[i][1] + ' # ' + grid[i][2] +'\n#########');
  }
    console.log(grid[2][0] + ' # ' + grid[2][1] + ' # ' + grid[2][2]);
}

printGrid(grid);

//onclick function repeats the series of functions
