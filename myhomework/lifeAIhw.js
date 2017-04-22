function Vector(x, y){
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y +other.y);
};

var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

var legend = {
  "#": Wall,
  "o": BouncingCritter
};

function Grid(width, height) {
  // space will hold our "world", which will eventually be objects
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}

Grid.prototype.isInside = function(vector) {
  if (vector.x < this.width && vector.y < this.height){
    return (vector.x >= 0 && vector.y >= 0);
  }
  else {
    return false;
  }
}

Grid.prototype.get = function(vector) {
  return this.space[vector.x-1, vector.y-1];
};

Grid.prototype.set = function(vector, value) {
  this.space[vector.x-1, vector.y-1] = value;
};

////////////////////////////////////////////////
// Now, to the critter
////////////////////////////////////////////////

var directions = {
  "n":  new Vector( 0, -1),
  "ne": new Vector( 1, -1),
  "e":  new Vector( 1,  0),
  "se": new Vector( 1,  1),
  "s":  new Vector( 0,  1),
  "sw": new Vector(-1,  1),
  "w":  new Vector(-1,  0),
  "nw": new Vector(-1, -1)
};

function randomElement(array) {
  return array[Math.floor(Math.random)*array.length];
}

var directionNames = "n ne e se s sw w nw".split(" ");

// Create constructor for BouncingCritter
// These guys keep moving in a direction until they hit something
// Then, they randomly bounce towards an empty area
function BouncingCritter() {
  this.direction = randomElement(directionNames);
};

// we will define the view class later, but let's assume it has three methods
// look - takes direction as input and outputs the character in that direction
// find - takes in character and returns a direction with that character, else null
// findAll - takes in a character and returns an array of directions that points to it

// for act, we are given a view and want to return an object that looks like this
// { type: "move", direction: this.direction }
// act should also update this.direction
BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction)!== " ") {
    this.direction = view.find(" ") || "s";
  }
  return { type: "move", direction: this.direction };
};

//////////////////////////////
// The World Object
//////////////////////////////

// Converts a character from the plan to an element (object)
// Introduce a new member variable to the object called originChar
// originChar represents the original character of the element
function elementFromChar(legend, ch) {
  if (ch === " "){
    return null;
  }
  var element = new legend[ch]();
  element.originChar = ch;
  return element;
}

// Converts the element back into char
// Luckily, we should have the originChar member variable to refer to
function charFromElement(element) {
  if (element === null){
    return " ";
  }
  else {
    return element.originChar;
  }
}


// Our World Constructor, we take in the map (our plan) and the legend (key)
// Has two member variables, grid and legend
// Remember that the map must be converted to grid
function World(plan, legend) {
  var grid = new Grid(plan[0].length, plan.length);
  this.grid = grid;
  this.legend = legend;
}

// Represent the world as a string
// Remember to convert the elements in the grid back to chars
World.prototype.toString = function() {
  var worldstring = " ";
  for (var row = 0; row < this.grid.height; row ++){
    for (var col = 0; col < this.grid.width; col ++){
      
    }
  }
};

///////////////////
// Our Wall class
///////////////////
// Nothing to do here really
function Wall() {}

//////////////////////
// Test our world!
//////////////////////
// var world = new World(plan, legend);
// console.log(world.toString());
// → ############################
//   #      #    #      o      ##
//   #                          #
//   #          #####           #
//   ##         #   #    ##     #
//   ###           ##     #     #
//   #           ###      #     #
//   #   ####                   #
//   #   ##       o             #
//   # o  #         o       ### #
//   #    #                     #
//   ############################

/////////////////////////////////////////
// That View class we saw before
/////////////////////////////////////////

// The View class is supposed to provide a "view" of the world from a point
// Takes in a world and vector
function View(world, vector) {
  this.world = world;
  this.vector = vector;
}

// look returns the character in the given direction (ex. "ne")
View.prototype.look = function(dir) {

  grid.get(directions.dir)
};

// findAll returns an array of all the directions that has char in it
View.prototype.findAll = function(ch) {
  var all = [];
  if (this.look(dir) = ch){
    all.push(dir);
  }
  return all;
};

// find returns a random direction that has char in it
// if none exists, return null
View.prototype.find = function(ch) {
  if (all.length === 0){
    return null;
  }
  else {
    return randomElement(all);
  }
};

/////////////////////////////////////
// Animate our world
/////////////////////////////////////

// This is our main function to get the next turn of our world!
// We need to iterate through through our grid and have each critter act
// Use letAct as a helper function for this!
// Subtle issue to remember here...
World.prototype.turn = function() {
};

// takes in a critter and vector as input and creates a view to provide to
// the critter act method, which is an action object that looks like this:
// {type: "move", direction: "ne"} as an example
// Use the checkDestination function as a helper to process move!
World.prototype.letAct = function(critter, vector) {
};

// Takes in an action and vector
// Returns a vector of the new location if possible
World.prototype.checkDestination = function(action, vector) {
};

/////////////////////////////////////
// The fruits of our labor
/////////////////////////////////////

// for (var i = 0; i < 5; i++) {
//   world.turn();
//   console.log(world.toString());
// }
// → … five turns of moving critters

// A better way
// animateWorld(world);
