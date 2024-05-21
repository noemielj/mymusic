const Todo = require('./database/setup');
const db = require('./database/setup'); // Do not edit/remove this line


// Create todo with name and priority (done = false by default)
function createTodo(name, priority) {
    const Todo = new db({
        name: name,
        priority: priority,
        done: false
    });
    
    Todo.save().then((newDoc) => console.log(newDoc))
}
createTodo("Buy milk", 2, false);

// Complete one todo by name (update property done = true)
function completeTodo(name) {
Todo.updateOne(
    {name: name},
    {done: true}
       ).then(() => {
    
    Todo.find().then(data => {
      console.log(data);
    });
   
   });}
completeTodo("Buy milk")
// Delete one todo by name
function deleteTodo(name) {
    Todo.deleteOne({ name: name }).then(() => {
      Todo.find().then(data => {
        console.log(data);
      });
    });
  }

  deleteTodo("Buy milk")

module.exports = { createTodo, completeTodo, deleteTodo }; // Do not edit/remove this line
