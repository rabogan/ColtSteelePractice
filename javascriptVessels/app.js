console.log("Hello From Your First JS File!");

// const password2 = prompt("Please enter a password (6+ characters, no spaces):");
// if (password.length >= 6) {
//     if (password.find(' '))
//         console.log('No spaces!  Try again!');
// } else {
//     console.log('Password not long enough!  Must be 6+ characters');
// }

// // Alternatively, you can use
// if (password.indexOf(' ') === -1)
//     console.log('Password Cannot Contain Spaces!');

//Best
const password = prompt('Please enter a password (6+ characters, no spaces):');
if (password.length() > 6 && password.indexOf(' ') === -1) {
    console.log('Valid Password!');
} else {
    console.log('Try again!');
}