var cities;
var rowCount;

function preload(){

  cities =loadTable("media/cities.csv", "header");
}

function setup(){

createCanvas(1024, 764);

rowCount = cities.getRowCount();
background(0);
fill(255);
noStroke();

//background(map(rowCount, 0, 30000, 0, 200));

}
function draw(){
translate(width/2 - 470, height/2- 320);
rotate(radians(270));
  for (var i = 0; i <rowCount; i++){
    var latitude = cities.getNum(i,"lat");
    var longitude = cities.getNum(i,"long");
    //console.log(latitude, longitude);
    setXY(latitude,longitude);
}
}

function setXY(lat,long){
  var x = map(lat, -90, 90, 0, height);
  var y = map(long, -180, 180, 0, width);
  ellipse(x,y,0.25);

}
