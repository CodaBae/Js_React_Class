// Vari...

// var, let and const

// let age = 10

// console.log(age)

// age = 20

// console.log(age)


// const num = 30

// console.log(num)

// num = 40

// console.log(num)

// String

let name = "shalom"

// Number

let age = 20

// Boolean

let isRainy = false

// Objects {}

// this

let user = {
    firstName:'shalom',
    lastName:'mathew',
    country : 'nigeria',
    age : 23,
    isActive : true,
    fullName: function (){
        return `${this.firstName} ${this.lastName}`
    }
}

// update a value in object
user.firstName = 'anti'

// how do we add a new value to object
user.city = 'lagos'


// Array []

let names = ['anita','shalom', 'john' ,'ben', 'peter', 'mathew','xyz','last name']

// names.push('adding using push')

// names.pop()

// names.shift()

// names.unshift('new item from unshift')

// 1. shalom, 2. ...

// names.map((item,index) => console.log(`${index + 1}. ${item}!`))

// names.forEach((item, index)=> console.log(`${index + 1}. ${item}!`))

// let nums = [3,2,1,4,6,8, 12, 18]

// nums.sort((a,b)=>{
//     return a - b
// })

// console.log(nums)

// names.splice(4,0,'new name from splice')

// let x = names.slice(0,3)

// console.log(names.splice(0,3))

// console.log(x)


// update an item in array

// names[0] = 'new name'

// add a new item in our array

// names[7] = 'number 7'

// console.log(names)


function greetUser (user) {
 return `hello ${user.firstName}`
}

// console.log(greetUser(user))

const sayHello = (user) => `hello ${user.fullName()}`

// console.log(sayHello(user))
