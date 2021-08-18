// let age = prompt("Enter an age");
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log("FREE");
// } else if (age >= 10 && age < 65) {
//     console.log("$200");
// } else if (age >= 5 && age < 10) {
//     console.log("$100");
// } else {
//     console.log("INVALID AGE!!!");
// }

let type = prompt("Add to list");
const todos = [];
while (type !== 'quit' && type !== 'q') {
    if (type === 'list') {
        console.log('*********************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('*********************');
    } else if (type === 'new') {
        const newTodo = prompt("Ok, what's new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (type === 'delete') {
        const index = parseInt(prompt("OK, enter the index to be deleted: "));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else console.log("Unknown Index...!")
    }
    type = prompt("Add to the list");
}
console.log("Ok Quit the app!!!");


// if (type == "new") {
//     for (let i = 1; i < 100000; i++) {

//         let type2 = prompt("Enter new todo:");
//         if (type2 == "list") {
//             for(let i=0;i<100000;i++) 
//             console.log()
//             break;

//         }
//         console.log(`${i}: ${type2} added to list`);
//     }
// }
// else if(type=="list"){
//     for(let i=0;i)
//     console.log()
// }