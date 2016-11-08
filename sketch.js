

var trafficInc;
var rowCount;

function preload(){
  trafficInc =loadTable("2014_Traffic_Incidents.csv", "header");
}

function setup(){

createCanvas(640, 480);

rowCount = trafficInc.getRowCount()-15000;
println(rowCount);

// background(0);
fill(255,150);
noStroke();

//background(map(rowCount, 0, 30000, 0, 200));
}
function draw(){
  // background(0);
//  scale(2.0);

// translate(width/2 - 120, height/2+320);
// rotate(radians(270));
 scale(12);

  for (var i = 0; i <rowCount; i++){
    var district = trafficInc.getNum(i,"DISTRICT");
    // var subzone = trafficInc.getNum(i,"SUBZONE");

    println(district);
    setXY(i, district);
}
}

function setXY(n, dist){
  // var x = map(lat, -90, 90, 0, width);
  // var y = map(long, -180, 180, 0, height);
  fill(10, 100);
  ellipse(map(dist, 1, 4, 10, 50),height/2,10);


}
