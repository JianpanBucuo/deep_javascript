function Point (x,y) {
    this.x = x;
    this.y = y;
}
Point.prototype.say = function () {
    console.log(this.x);
}
var p = new Point(1,2);

class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        console.log(this.x);
    }
}