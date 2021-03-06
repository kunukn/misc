interface JavaScript {
    void showXYCoordinates(int x, int y);
}

JavaScript javascript;

void bindJavascript(JavaScript js) {
    javascript = js;
}

void setup() {
    size(200,200);
    stroke(255);
    background(0);
    noLoop();
}

void draw() {
    fill(0,0,0,40);
    rect(-1,-1,width+2,height+2);
}

void mouseMoved() {
    line(mouseX,0,mouseX,height);
    line(0,mouseY,width,mouseY);
    redraw();

    if(javascript!=null){
       javascript.showXYCoordinates(mouseX, mouseY);
     }
}