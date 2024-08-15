# 🤯 Exercises

## Exercise 1

Create a Git command to initialize a new repository in a specific directory and explain what this command does.

::: details Solution

```shell
# Command to initialize a new repository
git init

# Explanation
The `git init` command initializes a new Git repository in the specified directory. It creates a hidden `.git` folder which contains all the metadata, configuration, and history for the repository. This command is used to start version controlling an existing project.
```

:::

## Exercise 2

Write a Git command sequence to create a new branch named `feature-xyz`, switch to that branch, and add all changes in the current directory to the staging area. Explain each command.

::: details Solution

```shell
# Commands to create a new branch, switch to it, and stage changes
git branch feature-xyz
git checkout feature-xyz
git add .

# Explanation
1. `git branch feature-xyz` creates a new branch named `feature-xyz`.
2. `git checkout feature-xyz` switches to the newly created `feature-xyz` branch.
3. `git add .` stages all changes in the current directory, preparing them to be committed to the repository.
```

:::

## Exercise 3

Describe the process of merging two branches in Git and write a sequence of commands to merge a branch named `bugfix` into `main`. Also, include a command to check the history after merging.

::: details Solution

```shell
# Commands to merge branches and check history
git checkout main
git merge bugfix
git log --oneline

# Explanation
1. `git checkout main` switches to the `main` branch, which is the target branch where we want to merge changes.
2. `git merge bugfix` merges the changes from the `bugfix` branch into the `main` branch. If there are no conflicts, the merge will be completed automatically.
3. `git log --oneline` displays a concise commit history after the merge to verify the changes.
```

:::

## Exercise 4

Write a Git command sequence to rebase a branch `feature-login` onto the `main` branch. Explain what a rebase does and how to handle conflicts if they arise during the rebase process.

::: details Solution

```shell
# Commands to rebase a branch onto another
git checkout feature-login
git rebase main

# Explanation
Rebasing takes the commits from the `feature-login` branch and applies them on top of the `main` branch, creating a linear history. This method is used to keep a clean project history without merge commits.

If conflicts occur during rebasing, Git will stop and prompt for manual resolution:
1. Open the files with conflicts, manually resolve them, and save the changes.
2. Stage the resolved files with `git add <file>`.
3. Continue the rebase process with `git rebase --continue`.
4. If needed, abort the rebase with `git rebase --abort`.
```

:::

## Exercise 5

Create a Git command sequence to clone a remote repository, create and switch to a new branch `enhancement`, make changes to a file, commit those changes, push the branch to the remote repository, and open a pull request on GitHub.

::: details Solution

```shell
# Commands to clone, create a branch, make changes, commit, push, and open a pull request
git clone https://github.com/username/repository.git
cd repository
git checkout -b enhancement
# Make changes to a file using a text editor
git add .
git commit -m "Enhance feature X"
git push origin enhancement

# Explanation
1. `git clone https://github.com/username/repository.git` clones the remote repository to your local machine.
2. `cd repository` changes the current directory to the cloned repository folder.
3. `git checkout -b enhancement` creates a new branch named `enhancement` and switches to it.
4. After making changes to a file using a text editor, `git add .` stages all modified files.
5. `git commit -m "Enhance feature X"` commits the changes with a descriptive message.
6. `git push origin enhancement` pushes the new branch to the remote repository on GitHub.
7. Open a pull request on GitHub by navigating to the repository, clicking the "Pull requests" tab, and following the prompts to compare and create a pull request from the `enhancement` branch.
```

:::

## Exercise 6

Write a Swift function that initializes an empty array of integers and then uses a `for` loop to add numbers from 1 to 5 to the array. Finally, print each number using another `for` loop.

::: details Solution

```swift
func printNumbersImperatively() {
    var numbers: [Int] = []
    
    for i in 1...5 {
        numbers.append(i)
    }
    
    for number in numbers {
        print(number)
    }
}

printNumbersImperatively()
// Output: 1 2 3 4 5
```

:::

## Exercise 7

Implement the same functionality as in Question 6 using Swift's declarative `map` and `forEach` methods.

::: details Solution

```swift
func printNumbersDeclaratively() {
    let numbers = (1...5).map { $0 }
    numbers.forEach { print($0) }
}

printNumbersDeclaratively()
// Output: 1 2 3 4 5
```

:::

## Exercise 8

Create a SwiftUI view that displays a list of numbers from 1 to 5 using a `ForEach` loop within a `List` view.

::: details Solution

```swift
import SwiftUI

struct NumberListView: View {
    var body: some View {
        List {
            ForEach(1...5, id: \.self) { number in
                Text("Number: \(number)")
            }
        }
    }
}

#Preview {
    NumberListView()
}
```

:::

## Exercise 9

Write a SwiftUI view that displays a counter with a button to increment the counter. Use `@State` to manage the counter's state and update the view when the button is tapped.

::: details Solution

```swift
import SwiftUI

struct CounterView: View {
    @State private var count = 0

    var body: some View {
        VStack {
            Text("Count: \(count)")
                .font(.largeTitle)

            Button(action: {
                count += 1
            }) {
                Text("Increment")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
    }
}

#Preview {
    CounterView()
}
```

:::

## Exercise 10

Create a SwiftUI view that displays a number in a circle and provides two buttons: one to increment the number and another to reset it to zero. Implement state management using `@State`.

::: details Solution

```swift
import SwiftUI

struct ContentView: View {
    @State var myNumber = 0

    var body: some View {
        VStack {
            Text("\(myNumber)")
                .font(.largeTitle)
                .foregroundColor(.white)
                .padding()
                .background(
                    Circle()
                        .foregroundColor(.red)
                )
            
            HStack {
                Button("Increment") {
                    myNumber += 1
                }
                
                Button("Reset") {
                    myNumber = 0
                }
            }
        }
    }
}

#Preview {
    ContentView()
}
```

:::
