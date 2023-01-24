let input = prompt('What would you like to do?');
let todos = ['Finish Lecture 201'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('******Generating List of Todos******');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***********List Generated***********');
    }
    else if (input === 'new') {
        const newToDo = prompt('What is your new todo?');
        todos.push(newToDo);
        console.log(`${newToDo} has been added to the list`);
    }

    else if (input === 'delete') {
        const index = parseInt(prompt('Please enter an index to delete:'));
        if (!Number.isNaN(index) && index >= 0 && index < todos.length) {
            const deleted = todos.splice(index, 1);
            console.log(`You have selected ${index}.  Deleted ${deleted}`);
        } else {
            console.log('Invalid index entered.  Operation FAILED!');
        }
    }

    input = prompt('What would you like to do?');
}

console.log('Okay, you have quit the app for today');