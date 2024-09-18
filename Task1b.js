// How do I run this? 
// node Task1b.js    

todoList = []; 
/**
 * COMPLETE: 
 * We do a lot in the addAndPrintTodos() funciton. It's also limited in
 * in what it can do because it takes no input.
 * Is there a way to seperate the concerns so that they could be tied to particular events
 * while also allowing us to add any todos that we want?
 *
 * Replace the __ in each of the todos and define some logic to accomplish these tasks
 * inspired by what you did in Part A
 */

function AddTodo(todoString) {
    // YOUR CODE HERE
    todoList.push(todoString);
}

function PrintTodo() {
    // YOUR CODE HERE
    console.log(todoList);

}

/**
 * Main is considered the entry point to a procedural program. Within y/cs,
 * it's rare for us to write procedures in JS, but for learning purposes
 * we do it here
 */
function mainTask1b() {
    // YOUR CODE HERE (simply call the functions you implemented above)
    AddTodo("Apply to y/cs");
    AddTodo("Pick my classes")
    PrintTodo();
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a funciton called
    // main by convention.
    mainTask1b();
}