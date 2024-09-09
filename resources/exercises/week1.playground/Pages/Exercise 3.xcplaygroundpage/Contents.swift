struct Point {
    var x: Int
    var y: Int
}

class Circle {
    var radius: Double
    init(radius: Double) {
        self.radius = radius
    }
}

let point1 = Point(x: 5, y: 10)
var point2 = point1
point2.x = 15

let circle1 = Circle(radius: 10.0)
let circle2 = circle1
circle2.radius = 15.0

print(point1.x, point2.x)
print(circle1.radius, circle2.radius)


// Answer
// 5 15
// 15
