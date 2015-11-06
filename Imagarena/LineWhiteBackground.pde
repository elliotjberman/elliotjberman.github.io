void setup() {
  
  background(255);
  fullScreen();
}

void draw() {
  stroke(0);
  strokeWeight(8);
  if (mousePressed == true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}