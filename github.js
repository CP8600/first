let git = document.getElementById('git')
let ol = document.getElementById('ol')
let li = document.getElementById('li')
let firstName = document.getElementById('firstName')
let names = document.getElementById('name')


const addText = 'World from '

let name = prompt('Whats your name?  ')
let bg = document.getElementById('body')
const gitThis2 = () => {

}


li.innerHTML = 'Hello ' + addText + name


/* let i;
for (i = 0; i < chooseColor.length; i++) {
    text += cars[i] + "<br>";
} */
const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor; /* thanks to css-tricks for the random color generator code!*/
    color.innerHTML = "#" + randomColor;
}


console.log(li.innerHTML)
console.log(firstName.value)

