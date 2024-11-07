
let person={
    firstName :'Kameswara',
    lastName :'Gandru',
    fullName: function()
    {
        return this.firstName+this.lastName
    }
}

console.log(person)
//while accessing values from object using array model, we should pass '' in between the accessing key else compiler throwa not defined error


console.log(person.firstName)
console.log(person['lastName'])
person['age']=34
console.log(person)
console.log(person['age'])

person.age+=1
console.log(person)

delete person.age

console.log(person)

console.log(person.fullName())