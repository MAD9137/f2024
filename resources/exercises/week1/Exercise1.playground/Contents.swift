/**
 
 Modify the code so that it prints the message
 "Hello, Swift!" three times on separate lines.
 What is the correct code?
 
*/

import Foundation

let message = "Hello, Swift!"
let times = 3
//for _ in 1...times {
//    print(message)
//}

for _ in 1..<times {
    print("\(message)")
}
