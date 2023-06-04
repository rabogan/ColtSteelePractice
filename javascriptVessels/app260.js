const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!");
}

function scream() {
    console.log("AAAAAAAAAHHHH!");
    console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

function twist() {
    console.log("TWIST!");
}

function shout() {
    console.log("SHOUT");
}

//If we do this then the LAST one ALONE is called...i.e. only shout will display
//tasButton.onclick = twist;
//tasButton.onclick = shout;

//With addEventListener(), BOTH are called!
const tasButton = document.querySelector('#tas');
tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);