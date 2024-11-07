
//var -- if declared at global level then same can be accessed everywhere in the programm. 
// if declared within the function, the scope won't be available to access outside the function
//can be initialised /reassigned with in the block or within the function

var firstName='Kameswara Rao'

let lastName='Rao'
//let -- Main different between var & let is if same variable declared in a function or block, that's considered as local scope

//

if(true)
{
    var firstName='Gandru'
    let lastName='G'
}



//const -- if scope defined global, it won't change and can't modifiable.

const village='Mamilla Palli'

function print()
{
    firstName='Sai'
    lastName='Gandru\'s'
   // village='Pune'
}

print()



console.log(firstName)
console.log(lastName)
console.log(village)