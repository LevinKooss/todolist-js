let endWord = "hello"
input = prompt("Guess the secret word.")


while (input !== "hello") {
    console.log(`I am sorry ${input} is not the secret word.`)
    input = prompt("Guess the secret word.")
        
}
console.log(`Congrats! You found the right secret word: ${endWord}`)
