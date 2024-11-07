var marks=Array(5)
var marks= new Array(10,20,30,40,5)
var marks=[10,20,30,40,5]

console.log(marks.length)

console.log(marks[6]) // this throws an error as 6th array element doesn't exist.
var sum=0
for(var i=0;i<marks.length;i++)
{
    console.log (marks[i])
    sum+=marks[i]
}
console.log(sum)

marks.push(200)
console.log(marks)
marks.pop()
console.log(marks)

console.log(marks.includes(20)) //Verified whether an element exist in the array or not
console.log(marks.length)
marks.shift() //removes the first element of an array
console.log(marks.length)


// Advacned concepts filter & reduce

var runs=[10,20,30,40,5]

let totalRuns=runs.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
console.log(totalRuns)

/*
	accumulator	currentValue	index	Return value
First call	15	16	1	31
Second call	31	17	2	48
Third call	48	18	3	66
Fourth call	66	19	4	85
*/

let finalRuns=runs.reduce((accumulator,currentValue)=>accumulator+currentValue,-5)
console.log('Final runs after reducing the penalty : %d',finalRuns)


//filter even numbers from an array
var numbers=[10,21,30,40,5]
var evenNumbe=[]

for(var i=0;i<numbers.length;i++)
{
    if(numbers[i] % 2 ==0)
        evenNumbe.push(numbers[i])
}

console.log(evenNumbe)

// filtering the even numbers using filter function

var evenArray=numbers.filter((value)=>value %2 ==0)
console.log(evenArray)

var mapperArray=evenArray.map((value)=>value*3)
console.log(mapperArray)


//Interview question is to identify an even numbers in an array and multiply them by 3 and then sum all the values in an array and retun the value

/*
Login followed will be as below 
first identify the even numbers using filter and then multiply the array numbers with 3 using map and finally use reduce to sum the elements. All this should be performed using chaining of methods
*/

let sumOfTheNumbers = numbers.filter((number)=>number%2==0).map((number)=>number*3).reduce((sum,currentValue)=>sum+currentValue,0)
console.log(sumOfTheNumbers)
