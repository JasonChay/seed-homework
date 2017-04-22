QUnit.test( "Vector Tests", function(assert) {
  var grid = new Grid(5, 5);

  assert.notOk(grid.get(new Vector(1, 1)));
  assert.notOk(grid.isInside(new Vector(6,0)));
  assert.notOk(grid.isInside(new Vector(-3,0)));
  assert.notOk(grid.isInside(new Vector(3,-1)));
  assert.ok(grid.isInside(new Vector(0,0)));
  assert.ok(grid.isInside(new Vector(3,1)));

  grid.set(new Vector(1, 1), "X");
  assert.equal(grid.get(new Vector(1, 1)), "X");

  grid.set(new Vector(1, 3), "R");
  assert.equal(grid.get(new Vector(1, 3)), "R");
});

QUnit.test("World Tests", function(assert){
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
  wallElt = elementFromChar(legend, "#");
  assert.ok(wallElt instanceof Wall);
  bounceCritterElt = elementFromChar(legend, "o");
  assert.ok(bounceCritterElt instanceof BouncingCritter);

  var w = new World(plan, legend);
  assert.ok(w.grid.get(new Vector(0,0)) instanceof Wall);
  assert.equal(w.legend, legend);
  assert.equal(w.toString(), plan.join('\n')+"\n");
});
