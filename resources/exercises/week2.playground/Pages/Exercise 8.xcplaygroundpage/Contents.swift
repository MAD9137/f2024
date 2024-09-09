/*
 
 Write a Swift for loop that iterates through a dictionary of
 names and ages, and prints a message for each person indicating
 if they are an adult (18 or older) or a minor.
 
 */

let people = ["Alice": 30, "Bob": 17, "Charlie": 20]

for (name, age) in people {
    if age >= 18 {
        print("\(name) is an adult.")
    } else {
        print("\(name) is a minor.")
    }
}
