var protoPlus = {
  plus: function(other){
    console.log((this.x + other.x) +","+ (this.y + other.y));
  }
}
var protoMinus = {
  minus: function(other){
    console.log(Math.abs(this.x - other.x) +","+ Math.abs(this.y - other.y));
  }
}
var Point_a = Object.create(protoPlus);
Point_a.x = 1;
Point_a.y = 2;

var Point_b = Object.create(protoMinus);
Point_b.x = 3;
Point_b.y = 4;

var Point_c = {
  x : 4,
  y : 4,
  get length(){
    return Math.sqrt(Math.pow(this.x , 2) + Math.pow(this.y , 2));
  }
}

Point_a.plus(Point_b);
Point_b.minus(Point_a);
console.log(Point_c.length)

var Line_a = {
  m : 2,
  b : 1,
  get slope(){
    return this.m;
  }
}

console.log(Line_a.slope);

function checkIntersect(slope1, y_int1, slope2, y_int2){
  if (slope1 === slope2){
    if (y_int1 === y_int2){
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return true;
  }
}

console.log(checkIntersect(3, 2, 2, 1))

function checkPerpendicular(slope1, y_int1, slope2, y_int2){
  if (slope1 === -(1/slope2)){
    return true;
  }
  else {
    return false;
  }
}

console.log(checkPerpendicular(1, 2, -1, 1))
