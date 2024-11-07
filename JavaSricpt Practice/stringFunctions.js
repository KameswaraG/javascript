
let searchString='abababababa'

let count=searchString.indexOf('a')

let counter=0
while(count !=-1)
{
    counter++
    console.log('Inside the loop')
   count= searchString.indexOf('a',count+1)

}

console.log(counter)