let input = prompt("What would you like to do?");
const todo = ["Running", "Hiking", "Coding"];

while (input !== "quit" && input !== "q"){
    if(input === "list"){
        console.log("***************")
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`)
        }
            console.log("***************")
    } else if(input === "new"){
        let newItem = prompt("What would you like to add to your list?")
            todo.push(newItem);
            console.log(`Your new list: ${todo}`)
    } else if(input === "delete"){
            let index = parseInt(prompt("What would you like to delete? Write an index!"))
            if(!Number.isNaN(index)){
            let deleteItem = todo.splice(index, 1)
            console.log(`The task: ${deleteItem} got deleted from your list.`)
        } else {
            console.log("Unknown Index.")
        }
    }
    input = prompt("What would you like to do?")
}

console.log("You quit the application!")