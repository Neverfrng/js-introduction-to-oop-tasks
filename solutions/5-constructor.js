// BEGIN
function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.getX = function() {
    return this.x;
  };
  Point.prototype.getY = function() {
    return this.y;
  };
  
  // Функция-конструктор Segment с двумя свойствами и геттерами
  function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
  }
  Segment.prototype.getBeginPoint = function() {
    return this.beginPoint;
  };
  Segment.prototype.getEndPoint = function() {
    return this.endPoint;
  };
  
  function reverse(segment) {
    const newBeginPoint = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());
    const newEndPoint = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY());
  
    return new Segment(newBeginPoint, newEndPoint);
  }
  export {Point, Segment, reverse};
// END
