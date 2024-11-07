//This file shows how many ways we can access functions in Javascript

function add(a,b)
{
    return a+b
}


var sum=add(10,20)
console.log('Sum of 2 interegers is : %d',sum)

//Anonymus function

var addition=function(a,b)
{
    return a+b
}

console.log(addition(2,5))

//simplified Anonymus function

var simpleSum=(a,b)=>a+b
console.log(simpleSum(5,4))