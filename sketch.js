var n = 20
var arrSide = [];
var bright1 = 0;
var bright2 = 100;
function setup() {
  createCanvas(1000,500);
  frameRate(12);
  background(0)

  function Point(x,y){
    this.x = x;
    this.y = y;
  }

  // Pushing in leftSide Points
  for(x=0; x<n;x++){
    arrSide.push(new Point(0, height/n*x))
  }
      // Pushing in FirstLayer Points
  for(x=0; x<n;x++){
    arrSide.push(new Point(width/n*x , height))
  }
      // Pushing in FirstLayer Points
  for(x=0; x<n;x++){
    arrSide.push(new Point(width, height-height/n*x))
  }

    // Pushing in FirstLayer Points
  for(x=0; x<n;x++){
    arrSide.push(new Point(width-width/n*x, 0))
  }

      for(i=0; i<400; i++){
        var a = random(bright1,bright2);
        fill(a,a,a,60);

        var x = Math.floor(random(0,arrSide.length));
        var y = Math.floor(random(0,arrSide.length));
        var z = Math.floor(random(0,arrSide.length));

        noStroke();
            beginShape(TRIANGLES);
        vertex(arrSide[x].x,arrSide[x].y);
        vertex(arrSide[y].x,arrSide[y].y);
        vertex(arrSide[z].x,arrSide[z].y);
        endShape();
      }


}

function draw() {
  var a = random(bright1,bright2);
  fill(a,a,a,60);

  var x = Math.floor(random(0,arrSide.length));
  var y = Math.floor(random(0,arrSide.length));
  var z = Math.floor(random(0,arrSide.length));

  noStroke();
      beginShape(TRIANGLES);
  vertex(arrSide[x].x,arrSide[x].y);
  vertex(arrSide[y].x,arrSide[y].y);
  vertex(arrSide[z].x,arrSide[z].y);
  endShape();
}
function mousePressed(){
  console.log("pressed");
  bright1 = 200;
  bright2 = 255;
}
function mouseReleased(){
  console.log("released");
  bright1 = 0;
  bright2 = 150;
}
