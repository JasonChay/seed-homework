var grid = [[' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']];
var turn = 'X';
var Countturn = 0;

printTurn();
printGrid(grid);

function printTurn(){
  var whoseTurn = document.getElementById("turn");
  whoseTurn.innerHTML = "It is " + turn + "'s Turn";
}

// Check coordinates; are they in the grid? If false, return -1 or false...
// Make sure move is valid.
function makeMove(grid,row,col){ //incorporate an "invalid move" function (no overriding previous moves)
  if ((row < grid.length) && (col < grid[0].length)){
    if (grid[row][col] !== ' '){
      return false;
    }
    else {
      grid[row][col] = turn;
    }
    Countturn++;
    if (turn === 'X'){
      turn = 'O';
    }
    else if (turn === 'O'){
      turn = 'X';
    }
    return true;
  }
  else {return false}
}

function browserMakeMove(){
  if (checkWinner(grid) !== false){
    return;
  }
  var row = document.getElementById("rownum").value;
  var col = document.getElementById("colnum").value;
  var legal = makeMove(grid,row,col);
  if (!legal){
    alert("That is an illegal move!");
  }
  printTurn();
  printGrid(grid);
  var winner = checkWinner(grid);
  if (winner === "Draw"){
    alert("It is a draw!");
  }
  else if (winner === 'X' || winner === 'O'){
    alert("Congratulations, " + winner + "! You are the winner!");
  }
}
// Check row, col, diagonal. Return null if no winner. 2 winners? (Whichever won first)
function checkWinner(grid){
  if (((grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) && grid[0][0] !== ' ')||
      ((grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) && grid[0][2] !== ' ')){
    return grid[1][1];
  }
  for (var i = 0; i < grid.length; i++){
    if ((grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) && grid[i][0] !== ' '){
      return grid[i][0];
    }
    else if ((grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) && grid[0][i] !== ' '){
      return grid[0][i];
    }
  }
  if (Countturn === 9){
    return "Draw";
  }
  return false;
}
//checkWinner checks for turn after it is changed. Check if all three spaces are equal

/*function printGrid(grid){
  for (var i = 0; i < 2; i++){
    console.log(grid[i][0] + ' # ' + grid[i][1] + ' # ' + grid[i][2] +'\n#########');
  }
    console.log(grid[2][0] + ' # ' + grid[2][1] + ' # ' + grid[2][2]);
}
*/
function printGrid(grid){
  var board = "";
  var x = document.getElementById("grid");
  for (var i = 0; i < 2; i++){
    board += (grid[i][0] + ' # ' + grid[i][1] + ' # ' + grid[i][2] +'\n#########\n');
  }
  board += (grid[2][0] + ' # ' + grid[2][1] + ' # ' + grid[2][2]);
  x.innerHTML = board;
}

//onclick function repeats the series of functions
