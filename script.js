class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const polygon = [
  new Point(2, 2),
  new Point(10, 2),
  new Point(5, 5),
  new Point(13, 5),
];

let centruG = new Point(0, 0);
const center = new Point(0, 0);

showPolygonValues();

for (let point of polygon) {
  centruG.x += point.x;
  centruG.y += point.y;
}

centruG.x /= polygon.length;
centruG.y /= polygon.length;

console.log(`CentruG: x: ${centruG.x}, y: ${centruG.y}`);

for (let point of polygon) {
  point.x -= centruG.x;
  point.y -= centruG.y;
}

console.log("After translation:");
showPolygonValues();

for (let i = 0; i < polygon.length; i++) {
  for (let j = i; i < polygon.length; j++) {
    if (comparePoints(polygon[i], polygon[j]) == -1) {
      let temp = polygon[i];
      polygon[i] = polygon[j];
      polygon[j] = temp;
    }
  }
}

console.log("After sorting:");
showPolygonValues();

let M = new Point(6, 3);
M.x -= centruG.x;
M.y -= centruG.y;

let pos = 0;
for (let i = 0; i < polygon.length; i++) {
  if (comparePoints(M, polygon[i]) == 1) {
    pos = i;
    break;
  }
}

function comparePoints(a, b) {
  let quadrantA = checkQuadrant(a);
  let quadrantB = checkQuadrant(b);

  if (quadrantA < quadrantB) return 1;
  else if (quadrantA > quadrantB) return -1;
  else if (quadrantA == quadrantB)
    return getDeterminant(a, b, center) > 0 ? 1 : -1;

  return 0;
}

function checkQuadrant(point) {
  function checkQuadrant(point) {
    if (point.x > 0 && point.y >= 0) return 1; // First quadrant
    if (point.x <= 0 && point.y > 0) return 2; // Second quadrant
    if (point.x < 0 && point.y <= 0) return 3; // Third quadrant
    if (point.x >= 0 && point.y < 0) return 4; // Fourth quadrant
    return 0; // Origin or ambiguous case
  }
}

function getDeterminant(a, b, c) {
  return (
    a.x * b.y + b.x * c.y + c.x * a.y - (a.y * b.x + b.y * c.x + c.y * a.x)
  );
}

function showPolygonValues() {
  for (let point of polygon) {
    console.log(`x: ${point.x}, y: ${point.y}`);
  }
}
