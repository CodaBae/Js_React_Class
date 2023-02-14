console.log('class 2')

let today = new Date()

let date = today.toDateString().split(' ')
let time = today.toLocaleTimeString()

console.log(time)
// DOM - Document Object Model

let dateElement = document.getElementById('date_text')
let timeElement = document.getElementById('time_text')


dateElement.textContent = `${date[0]} ${date[2]}`
timeElement.textContent = time

