let git = document.getElementById('git')
let ol = document.getElementById('ol')
let li = document.getElementById('li')
let firstName = document.getElementById('firstName')
let names = document.getElementById('name')


const addText = 'World from '

let name = prompt('Whats your name?,  " " ')
let bg = document.getElementById('body')

const gitThis2 = () => {
 


bg.style.backgroundColor='red'
bg.style.fontSize='2em'
bg.style.color='white'
bg.style.margin='10px'
}

li.innerHTML = 'Hello ' + addText + name

console.log(li.innerHTML)
console.log(firstName.value)

