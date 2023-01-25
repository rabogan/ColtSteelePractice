function myFunction($event) {
    console.log(event);
    let temp = event.target;
    let temp1 = event.target.nextElementSibling;
    console.log(temp);
    console.log(temp1);
    if (temp1.className == "answerBlock") {
        temp1.classList.remove("answerBlock");
        temp.innerHTML = 'Show Answer';
    } else {
        temp1.classList.add("answerBlock");
        temp.innerHTML = 'Hide Answer';
    }
}

function makeBetweenFunct(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const genAlpha = makeBetweenFunct(0, 13);
const genZ = makeBetweenFunct(14, 26);
const millenial = makeBetweenFunct(27, 42);
const genX = makeBetweenFunct(43, 58);
const boomer = makeBetweenFunct(59, 77);
const silentGen = makeBetweenFunct(78, 94);
const greatestGen = makeBetweenFunct(95, 120);