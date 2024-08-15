struct ValuePerson {
    var name: String
    var age: Int
}

class ReferencePerson {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
}

var valuePerson1 = ValuePerson(name: "Alice", age: 30)
var valuePerson2 = valuePerson1

var referencePerson1 = ReferencePerson(name: "Bob", age: 25)
var referencePerson2 = referencePerson1

valuePerson2.name = "Maria"
referencePerson2.name = "Rimidalv"

print("Value Type Example:")
print("valuePerson1: \(valuePerson1.name), \(valuePerson1.age)")
print("valuePerson2: \(valuePerson2.name), \(valuePerson2.age)")

print("\nReference Type Example:")
print("referencePerson1: \(referencePerson1.name), \(referencePerson1.age)")
print("referencePerson2: \(referencePerson2.name), \(referencePerson2.age)")
