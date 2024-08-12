# 😵‍💫 Exercise 10

## A society of classes

Create the class model for the following: You are designing a system to represent employees in a company. 
Each employee has the following attributes:

- Employee ID (a unique identifier)
- First name
- Middle name
- Last name
- Salary
- Contribution (76% of the salary)

Employees can receive salary increases, and their first and last names can be updated.

::: details Solution

```swift
class Employee {
    let employeeID: String
    var firstName: String
    var middleName: String
    var lastName: String
    var salary: Double
    var contribution: Double {
        salary * 0.76
    }

  init(employeeID: String, firstName: String, middleName: String, lastName: String, salary: Double) {
        self.employeeID = employeeID
        self.firstName = firstName
        self.middleName = middleName
        self.lastName = lastName
        self.salary = salary
    }
    
    func applySalaryIncrease(by percentage: Double) {
        // Implement logic to increase salary
        salary *= (1 + (percentage / 100))
    }
    
    func updateName(firstName: String, lastName: String) {
        // Update first name and last name
        self.firstName = firstName
        self.lastName = lastName
    }
}

let emp1 = Employee(employeeID: "VC", firstName: "Vladimir", middleName: "", lastName: "Cezar", salary: 1000)

```

:::
