const person = {
    name : 'Vladilen',
    age : 29,
    isYoutuber : true,
    languages : ['ru', 'en'],
    adress : {
        city: 'Saint-Petersburg',
        street: 'Nevskyi',
    },
    'complex key': 'complex',
    ['key_' + 21 * 2]: 'computed value',
    greet(){
        console.log('Greet from person', this)
    },
    arrow: () => {
        console.log('Person arrow', this)
    },
    info(){
        console.log(this)
        console.log(this.name)  
    }
}

// console.log(person.adress)
// const adressKey = 'adress'
// console.log(person[adressKey])
// console.log(person['complex key'])

// person.age++
// person.languages.push('de')
// console.log(person.languages)

// person.adress = undefined
// delete person.adress
// console.log(person)

// Destructoring
// const age = person.age
// const name = person.name
// const languages = person.languages

// const {age,name: firstName = 'Test',languages} = person

// console.log(age, firstName, languages)

// for(let key in person){
//     if (person.hasOwnProperty(key)){
//         console.log(person[key])
//     }
    
// }

// Object.keys(person).forEach((key) => {
//   console.log(person[key])
// })

const logger = {
    keys(){
        console.log(Object.keys(this))
    },

    keysAndValues(){
       Object.keys(this).forEach((key) => {
            console.log(key)
            console.log(this[key])
        })
    }
}



// const bound = logger.keys.bind(person)
// bound(false)
// logger.keys.call(person, false)
// logger.keys.apply(person, [false])

class Human{
    static isHuman = true

    greet(){
        console.log('greet from human')
    }
}

class Person extends Human{
 constructor(name,age){
    super()
    this.name = name ?? 'Undefined name'
    this.age = age ?? 'Undefined age'
 }

 sayHello(){
    console.log('Hello from' , this.name)
 }
}

const newPerson1 = new Person('Vladilen', 30)
const newPerson2 = new Person('Elena', 42)

console.log(Person.isHuman)

