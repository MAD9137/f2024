# 😵‍💫 Exercise 6

## The Scrambler

Create a function that receives a string as input and returns an [anagram](https://www.merriam-webster.com/dictionary/anagram) of that string.

For example:

```swift
let firstAnagram = anagram("quadrivium")
let secondAnagram = anagram("quadrivium")

print(firstAnagram) // iuqmvuadir
print(SecondAnagram) // uauqidmirv

```

::: details Solution

```swift
func anagram(_ word: String) -> String {
  return word.split(separator: "").shuffled().joined(separator: "")
}

print(anagram("quadrivium"))
// prints something like iuiqdaumrv or aqrdimvuiu.

```

:::
