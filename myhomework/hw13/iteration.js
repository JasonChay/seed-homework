/*
 * Write a function to swap all O's with X's
 * and swap all X's with O's in a grid
 */

function swapXO(grid){
  for (var row = 0; row < grid.length; row++){
		for (var col = 0; col < grid[0].length; col++){
      if (grid[row][col] === 'O'){
        grid[row][col] = 'X';
      }
      else if (grid[row][col] === 'X'){
        grid[row][col] = 'O';
      }
    }
	}
}

var XOgrid = [
	['O', 'O', 'X'],
	['X', 'X', 'O'],
	['X', 'X', 'O'],
	['X', 'O', 'O'],
];

console.log(XOgrid);

swapXO(XOgrid);

console.log(XOgrid);

/* Should now look like
[
	['X', 'X', 'O'],
	['O', 'O', 'X'],
	['O', 'O', 'X'],
	['O', 'X', 'X'],
]
*/
/*
 * Write a function that takes in width and height as input
 * Return a 2D array with those dimensions and have the numbers go from
 * 1 to width*height
 */
/*
width = 2; height = 3
(0,0) -> 1 0
(0,1) -> 2 1
(1,0) -> 3 2
(1,1) -> 4 3
(2,0) -> 5 4
(2,1) -> 6 5
*/
function range2D(width, height){
  var arr = [];
  //var counter = 1;
  for (var row = 0; row < height; row++){
    arr.push([]);
    for (var col = 0; col < width; col++){
  //    arr[row][col] = counter++;
        arr[row][col] = width*row + col + 1;
    }
  }
  return arr;
}
console.log(range2D(3,4));

/*
[
	[1, 2],
	[3, 4],
	[5, 6],
]
*/

//console.log(range2D(3,1));
/*
[
	[1, 2, 3],
]
*/
